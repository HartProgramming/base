# Generated by Django 4.1.3 on 2023-02-08 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("about", "0008_skill_teammember"),
    ]

    operations = [
        migrations.AlterField(
            model_name="teammember",
            name="github",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="teammember",
            name="linkedIn",
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name="teammember",
            name="twitter",
            field=models.CharField(max_length=100),
        ),
    ]
