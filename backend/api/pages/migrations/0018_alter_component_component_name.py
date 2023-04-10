# Generated by Django 4.1.3 on 2023-03-30 01:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("pages", "0017_page_verbose_name"),
    ]

    operations = [
        migrations.AlterField(
            model_name="component",
            name="component_name",
            field=models.CharField(
                choices=[
                    ("ServiceTier", "ServiceTier"),
                    ("Value", "Value"),
                    ("About", "About"),
                    ("FAQ", "FAQ"),
                    ("Hero", "Hero"),
                    ("Processes", "Processes"),
                    ("LatestNews", "LatestNews"),
                    ("NewsletterForm", "NewsletterForm"),
                    ("IconScroller", "IconScroller"),
                    ("Quiz", "Quiz"),
                    ("TeamMember", "TeamMember"),
                    ("JobPosting", "JobPosting"),
                    ("ContactInformation", "ContactInformation"),
                    ("Socials", "Socials"),
                    ("Hours", "Hours"),
                ],
                max_length=50,
            ),
        ),
    ]
