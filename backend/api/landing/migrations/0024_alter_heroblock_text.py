# Generated by Django 4.1.3 on 2023-03-13 13:25

import api.customs
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("landing", "0023_alter_servicetier_options"),
    ]

    operations = [
        migrations.AlterField(
            model_name="heroblock",
            name="text",
            field=api.customs.CustomTextField(
                max_length=500, verbose_name="Description"
            ),
        ),
    ]
