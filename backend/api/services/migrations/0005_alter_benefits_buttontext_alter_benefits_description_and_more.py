# Generated by Django 4.1.3 on 2023-02-27 15:58

import api.customs
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("services", "0004_alter_benefits_options"),
    ]

    operations = [
        migrations.AlterField(
            model_name="benefits",
            name="buttonText",
            field=api.customs.CustomCharField(
                max_length=40, verbose_name="Button Text"
            ),
        ),
        migrations.AlterField(
            model_name="benefits",
            name="description",
            field=models.TextField(max_length=250, verbose_name="Description"),
        ),
        migrations.AlterField(
            model_name="benefits",
            name="icon",
            field=api.customs.CustomCharField(max_length=40, verbose_name="Icon"),
        ),
        migrations.AlterField(
            model_name="benefits",
            name="title",
            field=api.customs.CustomCharField(max_length=100, verbose_name="Title"),
        ),
    ]
