# Generated by Django 3.2.12 on 2022-03-02 02:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0010_alter_step_measure'),
    ]

    operations = [
        migrations.AddField(
            model_name='ingredient',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
