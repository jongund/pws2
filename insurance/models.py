from django.db import models

# Create your models here.

class InsuranceCompany(models.Model):
  id = models.AutoField(primary_key=True)
  
  name    = models.CharField(max_length=128)
  url     = models.URLField(null=True,blank=True)

  description         = models.TextField(null=True,blank=True)
  description_html    = models.TextField(null=True,blank=True, editable=False)

  order        = models.IntegerField(default=0)

  class Meta:
    verbose_name        = "Insurance Company"
    verbose_name_plural = "Insurance Companies"
    ordering = ['name']
    
  def __unicode__(self):
    return self.business_title

  def save(self):
  
    if self.description:  
      self.description_html = self.description
            
    super(InsuranceCompany, self).save() # Call the "real" save() method.  