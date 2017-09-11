from django.contrib import admin

from programs.models import Program

class ProgramAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'show')
    
admin.site.register(Program, ProgramAdmin)

