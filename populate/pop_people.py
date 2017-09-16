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
p.picture = "img/tracy.png"
p.description = """
My inspiration to open Prairie Wind Speech Therapy, Inc. evolved from the requests and dreams of the various families I’ve had the pleasure to collaborate with. I have provided therapy services to both children and adults for over 20 years in many different types of settings, including client homes, community based sites, and school and clinic settings. From early on in my career, my passion has been in working with individuals’ with severe speech impairments and supplementing communication with low and high tech augmentative communication. In addition, I’ve consistently worked with and enjoyed early communicators in the toddler through preschool years.
Most recently I provided clinical instruction and supervision to undergraduate and graduate students at the University of Illinois Department of Speech and Hearing Science. My specialty areas include parent/toddler groups, individuals using low and high tech augmentative communication and children with speech, language and literacy needs in preschool through elementary school."""
p.save()
   
p = create_person('Cheryl', 'Yepez', 'M.A., CCC-SLP')
p.order = 1
p.title = 'Speech and Language Pathologist'
p.picture = "img/cheryl.png"
p.description = """
As a mother of three, I love working with families and believe the family is the most important factor in a child’s progress and success. In my 14 years’ experience as a bilingual therapist, I have worked in several different settings, including public schools, Early Intervention, and as an independent provider of bilingual speech-language services to our community. My most recent experience has been at the University of Illinois, where I trained graduate students in speech-language pathology. My favorite thing about the Early Intervention system is its focus on family-centered care, and I have built that into my practice at Prairie Wind. It is a joy to me to be able to collaborate with parents and involve them in their children’s therapy. I am also passionate about bilingual therapy. I love working with Spanish-speaking families to help them develop their children’s communication while still supporting their home language."""
p.save()

