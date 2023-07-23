from django.contrib import admin
from .models import File

# customizing the admin panel
class CoreAdmin(admin.ModelAdmin):
    list_display = ["file_id", "file", "uploaded_at"]
    search_fields = ["uploaded_at"]


admin.site.register(File, CoreAdmin)
