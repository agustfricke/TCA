# Generated by Django 4.1.3 on 2022-11-11 17:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cursos', '0003_rename_image_episodio_foto'),
    ]

    operations = [
        migrations.RenameField(
            model_name='episodio',
            old_name='foto',
            new_name='image',
        ),
    ]
