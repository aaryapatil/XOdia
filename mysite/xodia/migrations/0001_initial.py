# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='LogFiles',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('u1', models.CharField(max_length=50)),
                ('u2', models.CharField(max_length=50)),
                ('lf', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('won', models.IntegerField(default=0)),
                ('lost', models.IntegerField(default=0)),
                ('draw', models.IntegerField(default=0)),
                ('points', models.IntegerField(default=0)),
                ('bot_path1', models.CharField(max_length=50)),
                ('bot_path2', models.CharField(max_length=50)),
                ('bot_pathf', models.CharField(max_length=50)),
                ('test_no', models.IntegerField(default=0)),
                ('actually_tested', models.IntegerField(default=0)),
                ('submitted', models.IntegerField(default=0)),
                ('loginattempt', models.IntegerField(default=0)),
                ('mobno', models.CharField(max_length=13)),
                ('profilepic', models.ImageField(max_length=4000, upload_to=b'/home/lite/xodia_web_engine/mysite/xodia/static/xodia/dps')),
                ('user', models.OneToOneField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
