# Generated by Django 3.2 on 2022-11-18 21:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0008_rename_trailer_url_curso_trailer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='episodio',
            name='url',
        ),
    ]