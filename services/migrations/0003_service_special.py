# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-17 22:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_service_short_desc_html'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='special',
            field=models.BooleanField(default=False),
        ),
    ]