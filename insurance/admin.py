from django.contrib import admin

# Register your models here.

from insurance.models import InsuranceCompany

class InsuranceCompanyAdmin(admin.ModelAdmin):
    list_display = ('order', 'name')
    
admin.site.register(InsuranceCompany, InsuranceCompanyAdmin)