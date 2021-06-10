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
            name='Person',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(default='', max_length=32)),
                ('last_name', models.CharField(default='', max_length=32)),
                ('suffix', models.CharField(blank=True, default='CCC-SLP', max_length=32, null=True)),
                ('title', models.CharField(blank=True, default='', max_length=128, null=True)),
                ('email', models.CharField(blank=True, default='', max_length=128, null=True)),
                ('facebook', models.URLField(blank=True, null=True)),
                ('linkedin', models.URLField(blank=True, null=True)),
                ('googleplus', models.URLField(blank=True, null=True)),
                ('pinterest', models.URLField(blank=True, null=True)),
                ('picture', models.CharField(blank=True, default='', max_length=128, null=True)),
                ('order', models.IntegerField(default=0)),
                ('description', models.TextField(blank=True, null=True)),
                ('description_html', models.TextField(blank=True, editable=False, null=True)),
                ('short_desc_html', models.CharField(blank=True, default='', max_length=256, null=True)),
            ],
            options={
                'verbose_name_plural': 'Persons',
                'verbose_name': 'Person',
                'ordering': ['order', 'last_name'],
            },
        ),
    ]