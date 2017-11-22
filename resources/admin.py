from django.contrib import admin

# Register your models here.

from .models import Resource

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('resource_name', 'order')

admin.site.register(Resource, ResourceAdmin)