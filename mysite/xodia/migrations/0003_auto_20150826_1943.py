# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('xodia', '0002_auto_20150824_1516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdata',
            name='profilepic',
            field=models.ImageField(max_length=4000, upload_to=b'/home/admin13/Downloads/xodia_web_engine/mysite/xodia/static/xodia/dps/'),
        ),
    ]
