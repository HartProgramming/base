# Generated by Django 4.1.3 on 2023-03-07 21:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("authorization", "0007_header"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Header",
        ),
    ]
