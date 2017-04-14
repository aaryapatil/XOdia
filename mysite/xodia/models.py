from django.contrib.auth.models import User
from django.db import models
import mysite.settings
from os import path

# Create your models here.

class UserData(models.Model):
    user            = models.OneToOneField(User)
    won             = models.IntegerField(default=0)
    lost            = models.IntegerField(default=0)
    draw            = models.IntegerField(default=0)
    points          = models.IntegerField(default=0)
    bot_path1       = models.CharField(max_length = 200)
    bot_path2       = models.CharField(max_length = 200)
    bot_pathf       = models.CharField(max_length = 50)
    test_no         = models.IntegerField(default = 0)
    submitted       = models.IntegerField(default = 0)
    loginattempt    = models.IntegerField(default = 0)
    mobno           = models.CharField(max_length = 13)
    profilepic      = models.ImageField(upload_to = path.join(mysite.settings.BASE_DIR,'xodia/static/xodia/dps/') , max_length = 4000)


