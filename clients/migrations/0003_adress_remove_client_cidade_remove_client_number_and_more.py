# Generated by Django 4.1.7 on 2023-02-27 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0002_alter_client_date_of_birth'),
    ]

    operations = [
        migrations.CreateModel(
            name='Adress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('city', models.CharField(max_length=150)),
                ('neightborhood', models.CharField(max_length=150)),
                ('public_place', models.CharField(max_length=150)),
                ('zip_code', models.CharField(max_length=9)),
                ('number', models.IntegerField()),
            ],
        ),
        migrations.RemoveField(
            model_name='client',
            name='cidade',
        ),
        migrations.RemoveField(
            model_name='client',
            name='number',
        ),
        migrations.RemoveField(
            model_name='client',
            name='public_place',
        ),
        migrations.RemoveField(
            model_name='client',
            name='zip_code',
        ),
    ]
