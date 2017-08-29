from django.db import models

# Create your models here.

INFO_OPTIONS = (
    ('',                  'Select option'),
    ('Summer',            'Summer Programs'),
    ('AAC',               'Augmentative communication'),
    ('Bilingual',         'Bilingual Spanish/English'),
    ('Speech production', 'Speech production'),
    ('Late talker',       'Late talker'),
    ('Language skills',   'Language skills'),
    ('Home school',       'Home school'),
    ('Other',             'Other'),
)


class Contact(models.Model):

  id = models.AutoField(primary_key=True)

  first_name  = models.CharField(max_length=16)
  last_name   = models.CharField(max_length=32)
  phone       = models.CharField(max_length=32,null=True,blank=True)
  email       = models.CharField(max_length=32,null=True,blank=True)
  email2      = models.CharField(max_length=32,null=True,blank=True, editable=False)
  option1     = models.CharField(choices=INFO_OPTIONS, max_length=32, default="")
  option2     = models.CharField(choices=INFO_OPTIONS, max_length=32, default="")
  comment     = models.TextField(null=True,blank=True)
  date        = models.DateTimeField(auto_now=False, auto_now_add=True)

  class Meta:
    verbose_name        = "Contact"
    verbose_name_plural = "Contacts"
    
  def __unicode__(self):
    return self.first_name + " " + self.last_name
