from django.contrib import admin

from contacts.models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('date', 'first_name', 'last_name', 'phone', 'email')

admin.site.register(Contact, ContactAdmin)
