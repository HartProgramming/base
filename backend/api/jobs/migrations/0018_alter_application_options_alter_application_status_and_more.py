# Generated by Django 4.1.3 on 2023-04-04 04:09

import api.customs
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("jobs", "0017_alter_application_city_alter_application_email_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="application",
            options={
                "ordering": ["-id"],
                "verbose_name": "Application",
                "verbose_name_plural": "Applications",
            },
        ),
        migrations.AlterField(
            model_name="application",
            name="status",
            field=api.customs.CustomCharField(
                choices=[
                    ("Pending", "Pending"),
                    ("Reviewing", "Reviewing"),
                    ("Rejected", "Rejected"),
                    ("Accepted", "Accepted"),
                ],
                db_index=True,
                default="Pending",
                help_text="Application Status",
                max_length=20,
                verbose_name="Status",
            ),
        ),
        migrations.AlterField(
            model_name="jobposting",
            name="filled",
            field=models.BooleanField(
                db_index=True,
                default=False,
                help_text="Filled Status",
                verbose_name="Filled",
            ),
        ),
        migrations.AlterField(
            model_name="jobposting",
            name="position",
            field=api.customs.CustomCharField(
                db_index=True,
                help_text="Job Title/Position",
                max_length=40,
                verbose_name="Position",
            ),
        ),
    ]
