# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-18 12:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('abouts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='businessinformation',
            name='phone_href',
            field=models.CharField(default='', max_length=256),
        ),
        migrations.AlterField(
            model_name='businessinformation',
            name='fax',
            field=models.CharField(default='', max_length=256),
        ),
    ]