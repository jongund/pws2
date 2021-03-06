# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2019-02-21 20:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BusinessInformation',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('business_title', models.CharField(max_length=128)),
                ('in_care_of_title', models.CharField(max_length=128)),
                ('street', models.CharField(max_length=128)),
                ('city', models.CharField(max_length=64)),
                ('state', models.CharField(max_length=64)),
                ('zip', models.CharField(max_length=16)),
                ('phone', models.CharField(max_length=256)),
                ('phone_href', models.CharField(default='', max_length=256)),
                ('fax', models.CharField(default='', max_length=256)),
                ('email', models.CharField(max_length=256)),
                ('facebook', models.URLField(blank=True, null=True)),
                ('linkedin', models.URLField(blank=True, null=True)),
                ('googleplus', models.URLField(blank=True, null=True)),
                ('pinterest', models.URLField(blank=True, null=True)),
                ('tag_line', models.CharField(default='', max_length=512)),
                ('directions', models.TextField(blank=True, null=True)),
                ('directions_html', models.TextField(blank=True, editable=False, null=True)),
                ('latitude', models.FloatField(default=0)),
                ('longitude', models.FloatField(default=0)),
            ],
            options={
                'verbose_name_plural': 'Business Information',
                'verbose_name': 'Business Information',
                'ordering': ['business_title'],
            },
        ),
    ]
