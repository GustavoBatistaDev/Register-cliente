# Generated by Django 4.1.7 on 2023-03-03 01:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0010_client_city_client_neightborhood_client_number_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='created_at',
            field=models.DateField(auto_now_add=True),
        ),
    ]
