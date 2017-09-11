from django.db import models

# Create your models here.

class BusinessInformation(models.Model):
  id = models.AutoField(primary_key=True)
  
  business_title    = models.CharField(max_length=128)
  in_care_of_title  = models.CharField(max_length=128)
    
  street  = models.CharField(max_length=128)
  city    = models.CharField(max_length=64)
  state   = models.CharField(max_length=64)
  zip     = models.CharField(max_length=16)

  phone  = models.CharField(max_length=256)
  fax    = models.CharField(max_length=256)
  email  = models.CharField(max_length=256)

  facebook    = models.URLField(null=True,blank=True)
  linkedin    = models.URLField(null=True,blank=True)
  googleplus  = models.URLField(null=True,blank=True)
  pinterest   = models.URLField(null=True,blank=True)

  tag_line  = models.CharField(max_length=512,default="")

  directions       = models.TextField(null=True,blank=True)
  directions_html  = models.TextField(null=True,blank=True, editable=False)

  latitude   = models.FloatField(default=0)
  longitude  = models.FloatField(default=0)

  class Meta:
    verbose_name        = "Business Information"
    verbose_name_plural = "Business Information"
    ordering = ['business_title']
    
  def __unicode__(self):
    return self.business_title

  def save(self):

    if self.directions:  
      self.directions_html =self.directions
            
    super(BusinessInformation, self).save() # Call the "real" save() method. 