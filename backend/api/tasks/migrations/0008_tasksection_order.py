# Generated by Django 4.1.3 on 2023-04-17 19:06

import api.customs
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("tasks", "0007_rename_created_date_task_created_at_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="tasksection",
            name="order",
            field=api.customs.CustomPositiveIntegerField(
                default=0, verbose_name="Order within List"
            ),
        ),
    ]
