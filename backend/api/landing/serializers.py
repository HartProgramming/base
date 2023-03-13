from rest_framework import serializers
import re
from .models import (
    HeroBlock,
    Feature,
    ServiceTier,
    SupportedSites,
    Item,
    TitleBlock,
    Testimonial,
    Process,
)
from about.serializers import ContactInformationSerializer
from articles.serializers import ArticleSerializer
from api.views import get_model_metadata


class HeroBlockSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["title", "heading"]

    class Meta:
        model = HeroBlock
        fields = ["title", "buttonText", "heading", "text"]


class TitleBlockSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["title", "subtitle"]

    class Meta:
        model = TitleBlock
        fields = "__all__"


class ItemSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["buttonText", "buttonLink"]
    SEARCH_KEYS = ["buttonLink"]

    class Meta:
        model = Item
        fields = "__all__"


class FeatureSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["detail"]

    class Meta:
        model = Feature
        fields = "__all__"


class SupportedSitesSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["detail"]

    class Meta:
        model = SupportedSites
        fields = "__all__"


class ServiceTierSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True)
    supported_sites = SupportedSitesSerializer(many=True)
    FIELD_KEYS = ["service_title", "price"]

    class Meta:
        model = ServiceTier
        fields = "__all__"

    def format_data(self, data):
        formatted_data = {"features": [], "supported_sites": []}

        for key, value in data.items():
            parts = re.findall(r"\[(.*?)\]", key)
            name = key.split("[")[0]

            if name == "features":
                if len(parts) == 2 and parts[0].isdigit() and parts[1] == "detail":
                    feature_detail = value
                    formatted_data[name].append(feature_detail)

            elif name == "supported_sites":
                if len(parts) == 2 and parts[0].isdigit() and parts[1] == "detail":
                    supported_site_detail = value
                    formatted_data[name].append(supported_site_detail)

            else:
                formatted_data[name] = value

        return formatted_data


class ProcessSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["title", "description", "icon"]

    class Meta:
        model = Process
        fields = "__all__"


class TestimonialSerializer(serializers.ModelSerializer):
    FIELD_KEYS = ["name", "position", "text"]

    class Meta:
        model = Testimonial
        fields = "__all__"


class LandingFullSerializer(serializers.Serializer):
    hero_block = HeroBlockSerializer()
    title_block_process = TitleBlockSerializer()
    title_block_news = TitleBlockSerializer()
    service_tiers = ServiceTierSerializer(many=True)
    processes = ProcessSerializer(many=True)
    contact_information = ContactInformationSerializer()
    articles = ArticleSerializer(many=True)
    metadata = serializers.SerializerMethodField()

    def get_metadata(self, obj):
        metadata = []
        for model in [
            "HeroBlock",
            "TitleBlock",
            "ServiceTier",
            "Process",
            "TeamMember",
            "ContactInformation",
            "Article",
        ]:
            metadata.append(get_model_metadata(model))
        return metadata


HeroBlock.serializer_class = HeroBlockSerializer
TitleBlock.serializer_class = TitleBlockSerializer
Item.serializer_class = ItemSerializer
Feature.serializer_class = FeatureSerializer
Process.serializer_class = ProcessSerializer
Testimonial.serializer_class = TestimonialSerializer
ServiceTier.serializer_class = ServiceTierSerializer
