# Generated by Django 4.1.3 on 2022-11-11 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0002_rename_recurso_episodio_file'),
    ]

    operations = [
        migrations.RenameField(
            model_name='episodio',
            old_name='image',
            new_name='foto',
        ),
    ]
