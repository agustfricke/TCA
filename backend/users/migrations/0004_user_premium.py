# Generated by Django 3.2 on 2022-11-20 04:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20221112_0058'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='premium',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
