from django.db import models
from utils import text_to_paragraphs

# Create your models here.

class Resource(models.Model):
  id = models.AutoField(primary_key=True)
  
  resource_name  = models.CharField(max_length=128, default="Resource Name")
  contact_name   = models.CharField(max_length=64, default="")
 
  email       = models.CharField(max_length=128, default="",null=True,blank=True)
  url         = models.URLField(null=True,blank=True)
  phone       = models.CharField(max_length=256)
  phone_href  = models.CharField(max_length=256,default="")

  order       = models.IntegerField(default=0)

  description       = models.TextField(null=True,blank=True)
  description_html  = models.TextField(null=True,blank=True, editable=False)


  class Meta:
    verbose_name        = "Resource"
    verbose_name_plural = "Resources"
    ordering = ['order', 'resource_name']
    
  def __unicode__(self):
    return self.title

  def save(self):

    if self.description:  
      self.description_html = text_to_paragraphs(self.description)

    super(Person, self).save() # Call the "real" save() method.  