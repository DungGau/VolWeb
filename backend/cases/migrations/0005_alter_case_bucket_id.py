# Generated by Django 5.1.1 on 2024-11-26 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cases", "0004_alter_case_bucket_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="case",
            name="bucket_id",
            field=models.CharField(max_length=255),
        ),
    ]
