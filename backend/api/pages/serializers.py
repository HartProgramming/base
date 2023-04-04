from rest_framework import serializers
from .models import *
from jobs.models import JobPosting
from jobs.serializers import JobPostingSerializer
from contact.serializers import ContactSerializer
from django.contrib.contenttypes.models import ContentType
from django.core.exceptions import ObjectDoesNotExist
from django.apps import apps
from functools import reduce
from django.utils.datastructures import MultiValueDict
import re
import json


class DataSourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentType
        fields = "__all__"


class ComponentObjMinSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["name"]

    class Meta:
        model = ComponentObj
        fields = "__all__"


class ComponentObjSerializer(serializers.ModelSerializer):
    data_source = serializers.SerializerMethodField()
    content_type_info = serializers.SerializerMethodField()
    used_on = serializers.SerializerMethodField(label="Used On")
    FIELD_KEYS = [
        "name",
        "order",
        "content",
        "used_on",
        "category",
    ]

    class Meta:
        model = ComponentObj
        fields = [
            "id",
            "name",
            "order",
            "category",
            "content",
            "query_params",
            "data_source",
            "content_type_info",
            "used_on",
        ]

    def get_used_on(self, component):
        used_on = component.pageobj_set.values_list("page_name", flat=True) or ["None"]

        return [i.strip() for i in ",".join(used_on).split(",")]

    def get_data_source(self, obj):
        print(obj)
        try:
            model = obj.content.model_class()
        except:
            try:
                model = obj["content"].model_class()
            except ObjectDoesNotExist:
                return None

        qs = model.objects.all()

        try:
            query_params = obj.query_params
        except:
            try:
                query_params = obj["query_params"]
            except ObjectDoesNotExist:
                return None

        if len(query_params) == 1:
            key, value = next(iter(query_params.items()))
            qs = qs.filter(**value)
        elif len(query_params) > 1:
            q_objects = []
            for key, value in obj.query_params.items():
                for k, v in value.items():
                    q_objects.append(Q(**{f"{k}" if key == "0" else f"{k}": v}))

            qs = qs.filter(
                reduce(lambda x, y: x | y, q_objects)
            )  # combine the Q objects with OR operator

        serializer_class = model.serializer_class
        serializer = serializer_class(
            qs,
            many=True,
            context={"request": self.context["request"]},
        )

        return serializer.data

    def get_content_type_info(self, obj):
        try:
            model = obj.content.model_class()
        except ObjectDoesNotExist:
            return None

        filter_options = model._meta.filter_options

        filter_choices = {}
        for option in filter_options:
            field = model._meta.get_field(option)
            if isinstance(field, models.ForeignKey) or isinstance(
                field, models.ManyToManyField
            ):
                related_model = field.related_model
                choices_qs = related_model.objects.all()
                choices = [{"value": c.pk, "display_name": str(c)} for c in choices_qs]
            else:
                choices_qs = (
                    model.objects.order_by().values_list(option, flat=True).distinct()
                )
                choices = [{"value": c, "display_name": str(c)} for c in choices_qs]

            filter_choices[option] = choices

        return {
            "filter_options": filter_options,
            "model": model._meta.verbose_name,
            "filter_choices": filter_choices,
        }

    def get_serializer_class(self, model):
        attrs = {field.name: serializers.CharField() for field in model._meta.fields}
        attrs["Meta"] = type("Meta", (object,), {"model": model, "fields": "__all__"})
        return type("DynamicSerializer", (serializers.ModelSerializer,), attrs)


class ComponentSerializer(serializers.ModelSerializer):
    data_source = serializers.SerializerMethodField()
    FIELD_KEYS = ["component_name"]

    class Meta:
        model = Component
        fields = [
            "id",
            "component_name",
            "order",
            "query_set",
            "props",
            "data_source",
        ]

    def get_data_source(self, obj):
        model_name = obj.component_name

        for model in apps.get_models():
            if model.__name__ == model_name:
                model_class = model
                break
        else:
            data = None
            return data

        app_label = model_class._meta.app_label
        data_source_serializer = model_class.serializer_class

        if obj.query_set:
            if obj.query_set == "None":
                data_source_queryset = model_class.objects.get(name="Landing-Hero")

                data = data_source_serializer(
                    data_source_queryset,
                    context={"request": self.context["request"]},
                ).data
                return data
            else:
                data_source_queryset = model_class.objects.all()
        else:
            data_source_queryset = model_class.objects.all()

        data = data_source_serializer(
            data_source_queryset,
            many=True,
            context={"request": self.context["request"]},
        ).data
        return data


class PageSerializer(serializers.ModelSerializer):
    components = ComponentSerializer(many=True)
    FIELD_KEYS = [
        "verbose_name",
        "components",
    ]

    class Meta:
        model = Page
        fields = (
            "id",
            "page_name",
            "components",
            "verbose_name",
        )

    def create(self, validated_data):
        components_data = validated_data.pop("components")
        page = Page.objects.create(**validated_data)
        for component_data in components_data:
            component = Component.objects.create(**component_data)
            page.components.add(component)
        return page

    def update(self, instance, validated_data):
        formatted_data = self.format_data(self.context["request"].data)

        components_data = formatted_data.pop("components")
        instance.page_name = formatted_data.get("page_name", instance.page_name)
        instance.verbose_name = formatted_data.get(
            "verbose_name", instance.verbose_name
        )
        instance.components.clear()

        for component_data in components_data:
            component, created = Component.objects.get_or_create(
                component_name=component_data
            )
            component.save()
            instance.components.add(component)

        return instance

    def format_data(self, data, create=False):
        if create:
            formatted_data = {
                "components": [],
            }
        else:
            formatted_data = {
                "components": [],
            }

        for key, value in data.items():
            parts = re.findall(r"\[(.*?)\]", key)
            name = key.split("[")[0]

            if name == "components":
                if (
                    len(parts) == 2
                    and parts[0].isdigit()
                    and parts[1] == "component_name"
                ):
                    feature_detail = value
                    if create:
                        formatted_data[name].append({parts[1]: value})
                    else:
                        formatted_data[name].append(feature_detail)
            else:
                formatted_data[name] = value

        return formatted_data


class PageObjSerializer(serializers.ModelSerializer):
    components = ComponentObjSerializer(many=True)
    FIELD_KEYS = [
        "verbose_name",
        "components",
        "access",
    ]

    class Meta:
        model = PageObj
        fields = (
            "id",
            "page_name",
            "components",
            "verbose_name",
            "access",
        )

    def create(self, validated_data):
        components_data = validated_data.pop("components")
        print("components_data", components_data)
        page = PageObj.objects.create(**validated_data)

        for component_data in components_data:
            component, _ = ComponentObj.objects.get_or_create(
                content=component_data.get("content"), name=component_data.get("name")
            )
            page.components.add(component)

        return page

    def update(self, instance, validated_data):
        formatted_data = self.format_data(self.context["request"].data)

        components_data = formatted_data.pop("components")
        instance.page_name = formatted_data.get("page_name", instance.page_name)
        instance.verbose_name = formatted_data.get(
            "verbose_name", instance.verbose_name
        )
        instance.access = formatted_data.get("access", instance.access)
        instance.components.clear()

        for component_data in components_data:
            component, _ = ComponentObj.objects.get_or_create(
                content=component_data.get("content"), name=component_data.get("name")
            )
            component.save()
            instance.components.add(component)

        instance.save()

        return instance

    def format_data(self, data, create=False):
        formatted_data = {}
        components = []

        for key, value in data.items():
            parts = re.findall(r"\[(.*?)\]", key)
            name = key.split("[")[0]

            if name == "components":
                if (
                    len(parts) == 2
                    and parts[0].isdigit()
                    and (
                        parts[1] == "name" or parts[1] == "content" or parts[1] == "id"
                    )
                ):
                    if parts[1] == "id":
                        print("id")

                    idx = int(parts[0])
                    feature_detail = {parts[1]: value}

                    if idx >= len(components):
                        components.append({})
                    components[idx].update(feature_detail)
            else:
                formatted_data[name] = value

        if components:
            formatted_data["components"] = components

        return formatted_data


class ComponentCategorySerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["name"]

    class Meta:
        model = ComponentCategory
        fields = "__all__"


class PageNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = (
            "id",
            "page_name",
            "verbose_name",
        )


class PageObjNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = (
            "id",
            "page_name",
            "verbose_name",
            "access",
        )


class PageSetSerializer(serializers.ModelSerializer):
    pages = PageObjSerializer(many=True)
    FIELD_KEYS = ["set_name"]

    class Meta:
        model = PageSet
        fields = "__all__"

    def format_data(self, request):
        page_data = request.POST.getlist("pages")
        print(page_data)
        pages = []
        for data in page_data:
            page_id = data.get("id")
            page_name = data.get("page_name")
            page_obj = (
                PageObj.objects.get(id=page_id)
                if page_id
                else PageObj.objects.get(page_name=page_name)
            )
            # Save the page object to the page set or do whatever else you need to do with it
            pages.append(page_obj)


class AppSerializer(serializers.ModelSerializer):
    page_set_data = PageSetSerializer(source="page_set", read_only=True)
    contact_set_data = ContactSerializer(source="contact_set", read_only=True)
    jobs_data = serializers.SerializerMethodField()
    FIELD_KEYS = ["app_name"]

    class Meta:
        model = App
        fields = [
            "id",
            "app_name",
            "business_name",
            "page_set",
            "contact_set",
            "nav_component",
            "footer_component",
            "fab_component",
            "error_component",
            "loading_component",
            "jobs",
            "users",
            "services",
            "page_set_data",
            "contact_set_data",
            "jobs_data",
        ]

    def get_jobs_data(self, obj):
        if obj.jobs:
            jobs = JobPosting.objects.filter(filled=False)
            serializer = JobPostingSerializer(jobs, many=True)
            return serializer.data
        return []


ComponentCategory.serializer_class = ComponentCategorySerializer
ComponentObj.serializer_class = ComponentObjSerializer
Component.serializer_class = ComponentSerializer
PageSet.serializer_class = PageSetSerializer
Page.serializer_class = PageSerializer
PageObj.serializer_class = PageObjSerializer
App.serializer_class = AppSerializer
