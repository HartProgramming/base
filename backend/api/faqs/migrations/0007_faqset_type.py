# Generated by Django 4.1.3 on 2023-04-30 14:40

import api.customs
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("faqs", "0006_remove_faqquestionset_answer_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="faqset",
            name="type",
            field=api.customs.CustomCharField(
                choices=[
                    ("Tabbed", "Tabbed"),
                    ("List", "List"),
                    ("Condensed", "Condensed"),
                ],
                default="Tabbed",
                help_text="FAQ Type",
                max_length=10,
                verbose_name="FAQ Type",
            ),
        ),
    ]
