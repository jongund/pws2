from django.contrib import admin

# Register your models here.

from testimonials.models import Testimonial

class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('order', 'quote')
    
admin.site.register(Testimonial, TestimonialAdmin)