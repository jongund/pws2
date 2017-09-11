from django.contrib import admin

from services.models import Service

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    
admin.site.register(Service, ServiceAdmin)


