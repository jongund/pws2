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


from testimonials.models import Testimonial
    
def create_testimonial(order):
  try:
    t = Testimonial.objects.get(order=order)
    print("  Updating Testimonial " + str(order)) 
  except ObjectDoesNotExist:
    print("  Creating Testimonial " + str(order)) 
    t = Testimonial(order=order, quote="")
  t.save()
  return t

Testimonial.objects.all().delete(); 
 
t = create_testimonial(1)
t.quote = """There is nothing better than seeing people pour their heart and soul into everything they do to help your child. Before Prairie Wind Speech Therapy, we were unsure of the future for our son. Within the first week of starting, our hopes and dreams for him came back and we knew there was nowhere else we would go. The progress he has made from when we started 18 months ago has assured us we made the right decision.
"""
t.save()

t = create_testimonial(2)
t.quote = """
She has helped my son make great progress on his speech and language goals, working with us every step of the way to make the process seamless and collaborative. She really got to know us as a family and formed a great relationship with our son; this has had a hugely positive impact on his therapy outcomes. She is a top notch SLP and we would recommend her to our family and friends.
"""    
t.save()
