import datetime

from django.db import models
from utils import text_to_paragraphs


# Create your models here.

class Service(models.Model):
  id = models.AutoField(primary_key=True)
  
  title   = models.CharField(max_length=256)
  order   = models.IntegerField(default=0)
  special = models.BooleanField(default=False)

  description       = models.TextField(null=True,blank=True)
  description_html  = models.TextField(null=True,blank=True, editable=False)
  short_desc_html   = models.CharField(max_length=256, default="",null=True,blank=True)


  class Meta:
    verbose_name        = "Service"
    verbose_name_plural = "Services"
    ordering = ['order', 'title']
    
  def __unicode__(self):
    return self.title
    
  def save(self):
  
    if self.description:  
      self.description_html = text_to_paragraphs(self.description)
      self.short_desc_html  = self.description[:128]
            
    super(Service, self).save() # Call the "real" save() method.  