# Generated by Django 4.1.7 on 2023-02-28 22:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0009_address_main'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='city',
            field=models.CharField(default=1, max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='client',
            name='neightborhood',
            field=models.CharField(default=1, max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='client',
            name='number',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='client',
            name='public_place',
            field=models.CharField(default=1, max_length=150),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='client',
            name='zip_code',
            field=models.CharField(default=1, max_length=9),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Address',
        ),
    ]
