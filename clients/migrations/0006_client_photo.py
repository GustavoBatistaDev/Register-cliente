# Generated by Django 4.1.7 on 2023-02-28 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0005_address_client'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='photo',
            field=models.ImageField(default=1, upload_to='img_clients'),
            preserve_default=False,
        ),
    ]
