# Generated by Django 4.1.3 on 2023-03-30 01:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("content", "0002_rename_header_head_alter_dictionary_options_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="homepage",
            name="page_ptr",
        ),
        migrations.DeleteModel(
            name="AboutPage",
        ),
        migrations.DeleteModel(
            name="HomePage",
        ),
        migrations.DeleteModel(
            name="Page",
        ),
    ]
