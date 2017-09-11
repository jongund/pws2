import sys,os
sys.path.append(os.path.abspath('..'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pws2.settings')
from django.conf import settings

import django
django.setup()

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""

from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist


from people.models import Person
    
def create_person(f,l,s):
  try:
    p = Person.objects.get(first_name=f, last_name=l)
    print("  Updating Person: " + f + ' ' + l) 
    p.suffix  = s
  except ObjectDoesNotExist:
    print("  Creating Person: " + f + ' ' + l) 
    p = Person(first_name=f, last_name=l, suffix=s)
  p.save()
  return p

  

p = create_person('Tracy', 'Gunderson',  'M.S., CCC-SLP')
p.order = 1
p.title = 'Speech and Language Pathologist'
p.picture = "img/page1_pic1.jpg"
p.description = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non hendrerit ante, quis mollis neque. Proin non lacus quis eros pulvinar sollicitudin. Praesent nunc est, pellentesque nec nibh a, consectetur iaculis mi. Duis mauris augue, tempus quis hendrerit ac, mattis ut ligula. In interdum magna nec nisl ullamcorper congue. Curabitur vitae sollicitudin tortor. Phasellus quis dictum tortor, in mattis dolor. Suspendisse id suscipit ligula. Aenean pulvinar felis nisl, eu hendrerit nisl gravida ac. Integer a mi rutrum, fringilla mauris ac, vulputate felis. 
"""
p.save()
   
p = create_person('Cheryl', 'Yepez', 'M.A., CCC-SLP')
p.order = 1
p.title = 'Speech and Language Pathologist'
p.picture = "img/page1_pic2.jpg"
p.description = """
Nam vel dictum augue. Nam id molestie ipsum. Donec nec nunc eget purus auctor tristique sagittis quis lacus. Nulla ultricies posuere cursus. Proin viverra justo et ligula feugiat, in fringilla erat blandit. Nulla magna orci, tristique eget lectus et, suscipit semper massa. Maecenas gravida euismod turpis non viverra. Proin ante magna, vulputate vitae libero sit amet, malesuada pulvinar erat. Vivamus et massa ut nisi commodo lacinia ac et quam. In nec tellus arcu. Aenean eget dolor vitae libero faucibus ornare. Vivamus tellus ipsum, sodales nec finibus eget, dapibus vitae ligula. Proin tristique finibus odio, vitae ornare velit malesuada in. Suspendisse vel pellentesque nibh. Cras dignissim egestas mi. 
"""
p.save()

