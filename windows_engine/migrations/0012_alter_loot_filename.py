# Generated by Django 4.2.4 on 2024-01-12 13:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("windows_engine", "0011_loot_filename"),
    ]

    operations = [
        migrations.AlterField(
            model_name="loot",
            name="FileName",
            field=models.TextField(null=True),
        ),
    ]
