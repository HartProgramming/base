# Generated by Django 4.1.3 on 2023-03-28 16:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("pages", "0006_alter_reactcomponent_data_source_id"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="reactcomponent",
            name="data_source_id",
        ),
        migrations.RemoveField(
            model_name="reactcomponent",
            name="data_source_type",
        ),
        migrations.AlterField(
            model_name="reactcomponent",
            name="component_name",
            field=models.CharField(
                choices=[("ServiceTier", "ServiceTier"), ("Value", "Value")],
                max_length=50,
            ),
        ),
    ]
