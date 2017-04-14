# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('xodia', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='LogFiles',
        ),
        migrations.RemoveField(
            model_name='userdata',
            name='actually_tested',
        ),
        migrations.AlterField(
            model_name='userdata',
            name='bot_path1',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='bot_path2',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='userdata',
            name='profilepic',
            field=models.ImageField(max_length=4000, upload_to=b'/home/lite/xodia_web_engine/mysite/xodia/static/xodia/dps/'),
        ),
    ]
