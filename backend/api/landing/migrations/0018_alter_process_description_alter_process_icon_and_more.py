# Generated by Django 4.1.3 on 2023-02-27 23:52

import api.customs
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("landing", "0017_alter_pricingplan_features_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="process",
            name="description",
            field=api.customs.CustomTextField(
                max_length=200, verbose_name="Description"
            ),
        ),
        migrations.AlterField(
            model_name="process",
            name="icon",
            field=api.customs.CustomCharField(max_length=40, verbose_name="Icon"),
        ),
        migrations.AlterField(
            model_name="process",
            name="title",
            field=api.customs.CustomCharField(max_length=100, verbose_name="Title"),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="heading",
            field=api.customs.CustomCharField(max_length=100, verbose_name="Heading"),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="image",
            field=models.ImageField(
                upload_to="testimonial_images", verbose_name="Image"
            ),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="name",
            field=api.customs.CustomCharField(max_length=40, verbose_name="Name"),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="position",
            field=api.customs.CustomCharField(max_length=40, verbose_name="Position"),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="text",
            field=api.customs.CustomTextField(max_length=200, verbose_name="Quote"),
        ),
    ]
