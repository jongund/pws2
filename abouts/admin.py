from django.contrib import admin

from abouts.models import BusinessInformation


class BusinessInformationAdmin(admin.ModelAdmin):
    list_display = ('business_title', 'phone', 'fax', 'email')
    
admin.site.register(BusinessInformation, BusinessInformationAdmin)