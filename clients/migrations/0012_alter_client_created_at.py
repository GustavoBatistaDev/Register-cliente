# Generated by Django 4.1.7 on 2023-03-03 01:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0011_alter_client_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
