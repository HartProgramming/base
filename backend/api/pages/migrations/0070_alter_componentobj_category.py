# Generated by Django 4.1.3 on 2023-04-06 15:24

import api.customs
from django.db import migrations
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("pages", "0069_alter_componentobj_category"),
    ]

    operations = [
        migrations.AlterField(
            model_name="componentobj",
            name="category",
            field=api.customs.CustomForeignKeyField(
                blank=True,
                limit_choices_to={
                    "name__in": (
                        "About",
                        "Ass",
                        "Boobs",
                        "Card",
                        "Contact",
                        "Heading",
                        "Landing",
                        "Poop",
                        "Texas",
                        "Text",
                        "Tits",
                    )
                },
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="components",
                to="pages.componentcategory",
                verbose_name="Component Category",
            ),
        ),
    ]
