# Generated by Django 4.1.3 on 2023-02-07 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("landing", "0006_testimonial_alter_titleblock_name"),
    ]

    operations = [
        migrations.CreateModel(
            name="Process",
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
                ("description", models.CharField(max_length=200)),
                ("icon", models.CharField(max_length=40)),
            ],
        ),
    ]
