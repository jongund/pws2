from django.db import models

# Create your models here.

class Testimonial(models.Model):
  id = models.AutoField(primary_key=True)
  
  quote  = models.CharField(max_length=1024)
  order  = models.IntegerField(default=0)

  class Meta:
    verbose_name        = "Testimonial"
    verbose_name_plural = "Testimonials"
    ordering = ['order']
    
  def __unicode__(self):
    return self.quote
    
