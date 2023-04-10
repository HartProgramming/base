# Generated by Django 4.1.3 on 2023-04-03 17:26

import api.customs
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("pages", "0022_alter_componentcategory_options_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="componentobj",
            name="category",
            field=api.customs.CustomForeignKeyField(
                blank=True,
                limit_choices_to={
                    "name__in": (
                        "Contact",
                        "Landing",
                        "About",
                        "Heading",
                        "Card",
                        "Text",
                    )
                },
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="components",
                to="pages.componentcategory",
                verbose_name="Component Category",
            ),
        ),
        migrations.CreateModel(
            name="App",
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
                ("app_name", models.CharField(max_length=50)),
                ("jobs", models.BooleanField(default=False)),
                ("users", models.BooleanField(default=False)),
                ("services", models.BooleanField(default=False)),
                (
                    "page_set",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="pages.pageset",
                        verbose_name="App Page Set",
                    ),
                ),
            ],
        ),
    ]
