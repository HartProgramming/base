# Generated by Django 4.1.3 on 2023-02-27 15:58

import api.customs
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("landing", "0012_delete_tile_alter_supportedsites_options"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="titleblock",
            options={
                "verbose_name": "Section Headings",
                "verbose_name_plural": "Section Headings",
            },
        ),
        migrations.AlterField(
            model_name="feature",
            name="detail",
            field=api.customs.CustomCharField(
                max_length=100, verbose_name="Feature Detail"
            ),
        ),
        migrations.AlterField(
            model_name="heroblock",
            name="buttonText",
            field=api.customs.CustomCharField(
                max_length=50, verbose_name="Button Text"
            ),
        ),
        migrations.AlterField(
            model_name="heroblock",
            name="heading",
            field=api.customs.CustomTextField(max_length=500, verbose_name="Tagline"),
        ),
        migrations.AlterField(
            model_name="heroblock",
            name="text",
            field=api.customs.CustomTextField(
                max_length=500, verbose_name="Description Text"
            ),
        ),
        migrations.AlterField(
            model_name="heroblock",
            name="title",
            field=api.customs.CustomCharField(max_length=200, verbose_name="Title"),
        ),
        migrations.AlterField(
            model_name="item",
            name="buttonLink",
            field=api.customs.CustomCharField(
                max_length=20, verbose_name="Button Link"
            ),
        ),
        migrations.AlterField(
            model_name="item",
            name="buttonText",
            field=api.customs.CustomCharField(
                max_length=20, verbose_name="Button Text"
            ),
        ),
        migrations.AlterField(
            model_name="item",
            name="image",
            field=models.ImageField(upload_to="carousel", verbose_name="Image"),
        ),
        migrations.AlterField(
            model_name="pricingplan",
            name="bestFor",
            field=api.customs.CustomTextField(max_length=100, verbose_name="Best For"),
        ),
        migrations.AlterField(
            model_name="pricingplan",
            name="guarantee",
            field=api.customs.CustomTextField(max_length=100, verbose_name="Guarantee"),
        ),
        migrations.AlterField(
            model_name="pricingplan",
            name="price",
            field=api.customs.CustomDecimalField(
                decimal_places=2, max_digits=10, verbose_name="Price"
            ),
        ),
        migrations.AlterField(
            model_name="pricingplan",
            name="title",
            field=api.customs.CustomCharField(max_length=100, verbose_name="Title"),
        ),
        migrations.AlterField(
            model_name="process",
            name="description",
            field=api.customs.CustomCharField(max_length=200),
        ),
        migrations.AlterField(
            model_name="process",
            name="icon",
            field=api.customs.CustomCharField(max_length=40),
        ),
        migrations.AlterField(
            model_name="process",
            name="title",
            field=api.customs.CustomCharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="supportedsites",
            name="site",
            field=api.customs.CustomCharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="heading",
            field=api.customs.CustomCharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="name",
            field=api.customs.CustomCharField(max_length=40),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="position",
            field=api.customs.CustomCharField(max_length=40),
        ),
        migrations.AlterField(
            model_name="testimonial",
            name="text",
            field=api.customs.CustomCharField(max_length=200),
        ),
        migrations.AlterField(
            model_name="titleblock",
            name="alignment",
            field=api.customs.CustomCharField(
                choices=[("Left", "Left"), ("Right", "Right"), ("Center", "Center")],
                max_length=10,
                verbose_name="Alignment",
            ),
        ),
        migrations.AlterField(
            model_name="titleblock",
            name="description",
            field=api.customs.CustomTextField(
                max_length=250, null=True, verbose_name="Description"
            ),
        ),
        migrations.AlterField(
            model_name="titleblock",
            name="name",
            field=api.customs.CustomCharField(
                max_length=100, unique=True, verbose_name="Section Name"
            ),
        ),
        migrations.AlterField(
            model_name="titleblock",
            name="show_divider",
            field=models.BooleanField(default=False, verbose_name="Show Divider?"),
        ),
        migrations.AlterField(
            model_name="titleblock",
            name="subtitle",
            field=api.customs.CustomCharField(max_length=100, verbose_name="Subtitle"),
        ),
        migrations.AlterField(
            model_name="titleblock",
            name="title",
            field=api.customs.CustomCharField(max_length=100, verbose_name="Title"),
        ),
    ]
