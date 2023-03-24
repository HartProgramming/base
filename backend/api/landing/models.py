from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from api.customs import *
from auditlog.registry import auditlog


@custom_metadata(
    autoform_label="Hero Section Content Creator",
    long_description="This model represents a hero section, which is typically the top section of a webpage and contains a prominent headline, subheading, and background image.",
    short_description="A model for creating hero sections.",
    pages_associated={
        "Landing": "/",
    },
    include_preview=True,
    icon="SubtitlesIcon",
    icon_class=None,
    slug="header",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
    info_dump={
    "purpose": "This model represents a hero section, which is typically the top section of a webpage and contains a prominent headline, subheading, and background image.",
    "fields": {
        "title": "The title of the hero section.",
        "buttonText": "The text that will appear on the hero section's button.",
        "heading": "The subtitle of the hero section.",
        "text": "The description of the hero section."
    },
    "model_links": {
        "Django documentation": "https://docs.djangoproject.com/en/3.2/topics/db/models/",
        "Hero Section design examples": "https://www.awwwards.com/50-creative-website-header-designs-for-inspiration/"
    },
}

)
class HeroBlock(models.Model):
    title = CustomCharField(
        max_length=200,
        md_column_count=6,
        verbose_name="Title",
        help_text="Help Text Placeholder",
    )
    buttonText = CustomCharField(
        max_length=50,
        md_column_count=6,
        verbose_name="Button Text",
        help_text="Help Text Placeholder",
    )
    heading = CustomTextField(
        max_length=500,
        md_column_count=6,
        verbose_name="Subtitle",
        help_text="Help Text Placeholder",
    )
    text = CustomTextField(
        max_length=500,
        md_column_count=6,
        verbose_name="Description",
        help_text="Help Text Placeholder",
    )

    class Meta:
        verbose_name = "Hero Section"
        verbose_name_plural = verbose_name + "s"


@custom_metadata(
    autoform_label="Section Headings",
    long_description="A section heading with a title, subtitle, and description to be used as a heading for various content sections.",
    short_description="Section Heading",
    pages_associated={
        "Landing": "/",
        "Services": "/services",
    },
    include_preview=True,
    icon="TitleIcon",
    icon_class=None,
    slug="section-title",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
    info_dump={
    "purpose": "This model represents a section heading with a title, subtitle, and description to be used as a heading for various content sections.",
    "fields": {
        "name": "A unique name for the section heading.",
        "title": "The main title of the section heading.",
        "subtitle": "The subtitle of the section heading.",
        "description": "A brief description of the section heading.",
        "alignment": "The alignment of the section heading (left, right, or center).",
        "show_divider": "Whether to show a divider line under the section heading or not."
    },
    "model_links": {
        "Django documentation": "https://docs.djangoproject.com/en/3.2/topics/db/models/",
        "Bootstrap documentation for headings": "https://getbootstrap.com/docs/5.1/content/typography/#headings"
    }
}
)
class TitleBlock(models.Model):
    ALIGNMENT_CHOICES = (
        ("Left", "Left"),
        ("Right", "Right"),
        ("Center", "Center"),
    )

    name = CustomCharField(
        max_length=100,
        unique=True,
        md_column_count=8,
        verbose_name="Section Name",
        help_text="Help Text Placeholder",
    )

    title = CustomCharField(
        max_length=100,
        md_column_count=6,
        verbose_name="Title",
        help_text="Help Text Placeholder",
    )

    subtitle = CustomCharField(
        max_length=100,
        md_column_count=6,
        verbose_name="Subtitle",
        help_text="Help Text Placeholder",
    )

    description = CustomTextField(
        max_length=250,
        null=True,
        md_column_count=12,
        verbose_name="Description",
        help_text="Help Text Placeholder",
    )

    alignment = CustomCharField(
        max_length=10,
        choices=ALIGNMENT_CHOICES,
        md_column_count=12,
        verbose_name="Alignment",
    )

    show_divider = models.BooleanField(
        default=False,
        verbose_name="Show Divider?",
        help_text="Help Text Placeholder",
    )

    class Meta:
        verbose_name = "Section Headings"
        verbose_name_plural = "Section Headings"


@custom_metadata(
    autoform_label="Hero Text Block",
    long_description="Description Placeholder",
    short_description="Short Description",
    pages_associated={
        "Landing": "/",
    },
    include_preview=True,
    icon="TurnedInIcon",
    icon_class=None,
    slug="header",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
    info_dump={"text": ""},
)
class Item(models.Model):
    image = models.ImageField(upload_to="carousel", verbose_name="Image")
    buttonText = CustomCharField(
        max_length=20, md_column_count=6, verbose_name="Button Text"
    )
    buttonLink = CustomCharField(
        max_length=20, md_column_count=6, verbose_name="Button Link"
    )

    class Meta:
        verbose_name = "Item"
        verbose_name_plural = verbose_name + "s"


@custom_metadata(
    autoform_label="Service Tier Features",
    long_description="This model holds a list of features offered by a Service/Service Tier",
    short_description="Features offered by a Service/Service Tier",
    pages_associated={
        "Landing": "/",
        "Services": "/services",
    },
    include_preview=False,
    icon="StarIcon",
    icon_class=None,
    slug="header",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
    info_dump={
        "purpose": "This model represents the features offered by a Service or Service Tier. Each instance of this model contains information about a single feature.",
        "fields": {
            "detail": "A short description of the feature.",
        },
        "model_links": {
            "ServiceTier": "/docs/models/service-tier/",
            "Service": "/docs/models/service/",
        },
    }
)
class Feature(models.Model):
    detail = CustomCharField(
        max_length=100,
        md_column_count=6,
        verbose_name="Feature Detail",
        help_text="Help Text Placeholder",
    )

    def __str__(self):
        return self.detail

    class Meta:
        verbose_name = "Feature"
        verbose_name_plural = verbose_name + "s"


@custom_metadata(
    autoform_label="Service Tier Supported Sites",
    long_description="This model holds a list of supported sites offered by a Service/Service Tier",
    short_description="Site types supported by a Service/Service Tier",
    pages_associated={
        "Landing": "/",
        "Services": "/services",
    },
    include_preview=False,
    icon="WebIcon",
    icon_class=None,
    slug="header",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
    info_dump={
    "purpose": "This model holds a list of supported sites offered by a Service/Service Tier.",
    "fields": {
        "detail": "The name of the supported site.",
        "md_column_count": "The number of columns the field should take up in a Material Design layout.",
    },
    "model_links": {
        "Service Tier Model": "/service-tier-model/",
        "Service Model": "/service-model/",
    },
}
)
class SupportedSites(models.Model):
    detail = CustomCharField(
        max_length=100,
        md_column_count=6,
        verbose_name="Supported Site Detail",
        help_text="Help Text Placeholder",
    )

    def __str__(self):
        return self.detail

    class Meta:
        verbose_name = "Supported Sites"
        verbose_name_plural = "Supported Sites"


@custom_metadata(
    autoform_label="Service Tiers",
    long_description="This model represents the different service tiers available.",
    short_description="Service Tier Model",
    pages_associated={
        "Landing": "/",
        "Services": "/services",
    },
    include_preview=True,
    icon="DesignServicesIcon",
    icon_class=None,
    slug="header",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
     info_dump={
        "purpose": "This model defines the different service tiers that are available in our system, including the pricing, features, and supported sites for each tier.",
        "fields": {
            "image": "The image associated with the service tier.",
            "service_title": "The title of the service tier.",
            "price": "The price of the service tier.",
            "features": "The features included in the service tier.",
            "supported_sites": "The sites that are supported by the service tier.",
            "paragraph_one": "The first paragraph of the service tier description.",
            "paragraph_two": "The second paragraph of the service tier description.",
            "paragraph_three": "The third paragraph of the service tier description.",
        },
        "model_links": {
            "Feature": "/admin/feature/",
            "SupportedSites": "/admin/supportedsites/",
        },
    },
)
class ServiceTier(models.Model):
    image = models.ImageField(
        upload_to="pricing_images",
        verbose_name="Image",
        help_text="Help Text Placeholder",
    )
    service_title = CustomCharField(
        max_length=100,
        md_column_count=6,
        verbose_name="Service Title",
        help_text="Help Text Placeholder",
    )
    price = CustomDecimalField(
        max_digits=10,
        decimal_places=2,
        md_column_count=6,
        verbose_name="Price",
        help_text="Help Text Placeholder",
    )

    features = CustomManyToManyField(
        Feature,
        related_name="features",
        verbose_name="Features",
        md_column_count=6,
        help_text="Help Text Placeholder",
    )

    supported_sites = CustomManyToManyField(
        SupportedSites,
        related_name="supportedsites",
        verbose_name="Supported Sites",
        md_column_count=6,
        help_text="Help Text Placeholder",
    )
    paragraph_one = CustomTextField(
        max_length=500,
        md_column_count=12,
        verbose_name="Paragraph 1",
        help_text="Help Text Placeholder",
    )
    paragraph_two = CustomTextField(
        max_length=500,
        md_column_count=12,
        verbose_name="Paragraph 2",
        help_text="Help Text Placeholder",
    )
    paragraph_three = CustomTextField(
        max_length=500,
        md_column_count=12,
        verbose_name="Paragraph 3",
        help_text="Help Text Placeholder",
    )

    def __str__(self):
        return self.service_title

    def delete(self, *args, **kwargs):
        self.features.all().delete()
        self.supported_sites.all().delete()
        super().delete(*args, **kwargs)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.features.xs_column_count = 12
        self.features.md_column_count = 8

    class Meta:
        verbose_name = "Service Tiers"
        verbose_name_plural = "Service Tiers"


@custom_metadata(
    autoform_label="Hero Text Block",
    long_description="Description Placeholder",
    short_description="Short Description",
    pages_associated={
        "Landing": "/",
    },
    include_preview=True,
    icon="ReviewsIcon",
    icon_class=None,
    slug="header",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
)
class Testimonial(models.Model):
    heading = CustomCharField(max_length=100, md_column_count=4, verbose_name="Heading")
    image = models.ImageField(upload_to="testimonial_images", verbose_name="Image")
    name = CustomCharField(max_length=40, md_column_count=4, verbose_name="Name")
    position = CustomCharField(
        max_length=40, md_column_count=4, verbose_name="Position"
    )
    text = CustomTextField(max_length=200, md_column_count=10, verbose_name="Quote")

    class Meta:
        verbose_name = "Testimonials"
        verbose_name_plural = "Testimonials"


@custom_metadata(
    autoform_label="Process Steps",
    long_description="This model represents a collection of steps that describe the process of how the business works. Each step includes a title, description, and an icon to illustrate the step.",
    short_description="Model for company process steps",
    pages_associated={
        "Landing": "/",
        "Services": "/services",
    },
    include_preview=True,
    icon="AccountTreeIcon",
    icon_class=None,
    slug="header",
    tags=["About", "Header", "Company"],
    related_components=["Header"],
    visibility=True,
    access_level="All",
   info_dump = {
    "purpose": "This model represents a collection of steps that describe the process of how the business works.",
    "fields": {
        "title": "The title of the process step",
        "description": "A brief description of the process step",
        "icon": "The icon that represents the process step",
    },
    "model_links": {
        "Company": "/company",
        "Service": "/services",
    },
}
)
class Process(models.Model):
    title = CustomCharField(
        max_length=100,
        md_column_count=8,
        verbose_name="Title",
        help_text="Help Text Placeholder",
    )
    description = CustomTextField(
        max_length=200,
        md_column_count=12,
        verbose_name="Description",
        help_text="Help Text Placeholder",
    )
    icon = CustomCharField(
        max_length=40,
        md_column_count=12,
        verbose_name="Icon",
        help_text="Help Text Placeholder",
    )

    class Meta:
        verbose_name = "Processes"
        verbose_name_plural = "Processes"


@receiver(pre_save, sender=TitleBlock)
def lowercase_name(sender, instance, **kwargs):
    instance.name = instance.name.lower()
