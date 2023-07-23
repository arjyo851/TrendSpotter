from django.contrib import admin
from .models import ColorUser

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "email", "username", "registration_date", "registration_time"]
    search_fields = ["first_name", "last_name", "email"]

admin.site.register(ColorUser, UserAdmin)