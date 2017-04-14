from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from models import UserData


class UserDataInline(admin.StackedInline):
	model = UserData


class UserAdmin(admin.ModelAdmin):
	fieldsets = [
	('Personal Information',  {'fields': ['first_name','last_name'] , 'classes' : ['collapse']}),
	('Account information',      {'fields': ['username','password'] , 'classes' : ['collapse']}),
		]
	inlines = [UserDataInline]
	list_display = ('first_name' , 'last_name' , 'username' , 'password')
	search_fields = ['first_name' , 'username' ]


admin.site.unregister(User) 
admin.site.register(User,UserAdmin)