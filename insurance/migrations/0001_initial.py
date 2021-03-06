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
            name='InsuranceCompany',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128)),
                ('url', models.URLField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('description_html', models.TextField(blank=True, editable=False, null=True)),
                ('order', models.IntegerField(default=0)),
            ],
            options={
                'verbose_name': 'Insurance Company',
                'ordering': ['name'],
                'verbose_name_plural': 'Insurance Companies',
            },
        ),
    ]
