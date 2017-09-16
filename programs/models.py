import datetime

from django.db import models
from utils import text_to_html

# Create your models here.

PROGRAM_CHOICES = (
  ('always',   'Program/Service '),
  ('summer',   'Summer Programs'),
  ('fall',     'Fall Programs' ),
  ('winter',   'Winter Programs' ),
  ('spring',   'Spring Programs' )
)

class Program(models.Model):
  id = models.AutoField(primary_key=True)
  
  title             = models.CharField(max_length=256)
  show              = models.BooleanField(default=True)
  program_choices   = models.CharField("Program Type", max_length=8, choices=PROGRAM_CHOICES, default="Chrome")

  description       = models.TextField(null=True,blank=True)
  description_html  = models.TextField(null=True,blank=True, editable=False)
  short_desc_html   = models.CharField(max_length=256, default="",null=True,blank=True)

  order  = models.IntegerField(default=0)

  class Meta:
    verbose_name        = "Program"
    verbose_name_plural = "Programs"
    ordering = ['order', 'title']
    
  def __unicode__(self):
    return self.title
    
  def save(self):
  
    if self.description:  
      self.description_html = text_to_html(self.description)
      self.short_desc_html  = self.description[:128]
            
    super(Program, self).save() # Call the "real" save() method.  

