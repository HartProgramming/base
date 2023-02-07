# Generated by Django 4.1.3 on 2023-02-07 01:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Feature",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("detail", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="HeroBlock",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("heading", models.TextField()),
                ("text", models.TextField()),
                ("buttonText", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="SupportedSites",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("site", models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name="PricingPlan",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=100)),
                ("price", models.DecimalField(decimal_places=2, max_digits=10)),
                ("image", models.ImageField(upload_to="pricing_images")),
                ("bestFor", models.CharField(default="Tits", max_length=100)),
                ("guarantee", models.CharField(default="Tits", max_length=100)),
                (
                    "features",
                    models.ManyToManyField(
                        related_name="features", to="landing.feature"
                    ),
                ),
                (
                    "supportedsites",
                    models.ManyToManyField(
                        related_name="supportedsites", to="landing.supportedsites"
                    ),
                ),
            ],
        ),
    ]
