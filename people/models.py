from django.db import models

# Create your models here.

class Person(models.Model):
  id = models.AutoField(primary_key=True)
  
  first_name   = models.CharField(max_length=32, default="")
  last_name    = models.CharField(max_length=32, default="")

  suffix       = models.CharField(max_length=32, default="CCC-SLP",null=True,blank=True)

  title        = models.CharField(max_length=128, default="",null=True,blank=True)
  email        = models.CharField(max_length=128, default="",null=True,blank=True)

  facebook     = models.URLField(null=True,blank=True)
  linkedin     = models.URLField(null=True,blank=True)
  googleplus   = models.URLField(null=True,blank=True)
  pinterest    = models.URLField(null=True,blank=True)

  picture      = models.CharField(max_length=128, default="",null=True,blank=True)

  order        = models.IntegerField(default=0)

  description       = models.TextField(null=True,blank=True)
  description_html  = models.TextField(null=True,blank=True, editable=False)
  short_desc_html   = models.CharField(max_length=256, default="",null=True,blank=True)


  class Meta:
    verbose_name        = "Person"
    verbose_name_plural = "Persons"
    ordering = ['order', 'last_name']
    
  def __unicode__(self):
    return self.first_name + ' ' + self.last_name + ' ' + self.suffix

  def save(self):

    if self.description:  
      self.description_html = self.description
      self.short_desc_html  = self.description[:128]

    super(Person, self).save() # Call the "real" save() method.  