# Generated by Django 4.1.3 on 2023-04-04 04:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("authorization", "0015_alter_themesettings_options_alter_user_username"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="themesettings",
            options={
                "verbose_name": "Theme Settings",
                "verbose_name_plural": "Theme Settings",
            },
        ),
    ]
