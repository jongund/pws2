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
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=16)),
                ('last_name', models.CharField(max_length=32)),
                ('phone', models.CharField(blank=True, max_length=32, null=True)),
                ('email', models.CharField(blank=True, max_length=32, null=True)),
                ('email2', models.CharField(blank=True, editable=False, max_length=32, null=True)),
                ('option1', models.CharField(choices=[('', 'Select option'), ('Summer', 'Summer Programs'), ('AAC', 'Augmentative communication'), ('Bilingual', 'Bilingual Spanish/English'), ('Speech production', 'Speech production'), ('Late talker', 'Late talker'), ('Language skills', 'Language skills'), ('Home school', 'Home school'), ('Other', 'Other')], default='', max_length=32)),
                ('option2', models.CharField(choices=[('', 'Select option'), ('Summer', 'Summer Programs'), ('AAC', 'Augmentative communication'), ('Bilingual', 'Bilingual Spanish/English'), ('Speech production', 'Speech production'), ('Late talker', 'Late talker'), ('Language skills', 'Language skills'), ('Home school', 'Home school'), ('Other', 'Other')], default='', max_length=32)),
                ('comment', models.TextField(blank=True, null=True)),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Contact',
                'verbose_name_plural': 'Contacts',
            },
        ),
    ]
