# Generated by Django 4.1.7 on 2023-06-24 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userAccount', '0002_alter_customuser_fullname_alter_customuser_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='img',
            field=models.ImageField(blank=True, upload_to='users', verbose_name='User Image'),
        ),
    ]