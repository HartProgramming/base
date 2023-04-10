# Generated by Django 4.1.3 on 2023-04-06 18:27

import api.customs
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "elements",
            "0035_remove_listelementitem_element_listelementitem_icon_and_more",
        ),
    ]

    operations = [
        migrations.RemoveField(
            model_name="listelementitem",
            name="list_element",
        ),
        migrations.AddField(
            model_name="listelement",
            name="items",
            field=models.ManyToManyField(to="elements.listelementitem"),
        ),
        migrations.AlterField(
            model_name="listelementitem",
            name="order",
            field=api.customs.CustomPositiveIntegerField(
                default=0, verbose_name="Page Appearance Order"
            ),
        ),
    ]
