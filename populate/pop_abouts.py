import sys,os
sys.path.append(os.path.abspath('..'))

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pws2.settings')
from django.conf import settings

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""

from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

from people.models import Person
from abouts.models import BusinessInformation
  
def get_business_info(title):
  try:
    bi = BusinessInformation.objects.all()
    if len(bi) > 0:
      bi = bi[0]
    else:
      bi = BusinessInformation(business_title=title)  
    print("  Getting Business Information: " + title) 
  except ObjectDoesNotExist:
    print("  Creating Business Information: " + title) 
    bi = BusinessInformation(business_title=title)
    bi.save()
  return bi
  
def create_person(f,l,s):
  print("  Creating Person: " + f + ' ' + l) 
  p = Person(first_name=f, last_name=l, suffix=s)
  p.save()
  return p
  
  
p = create_person('Tracy', 'Gunderson',  'M.S., CCC-SLP')
p.order = 1
p.title = 'Co-Founder'
p.description = """
Tracy's inspiration for Prairie Wind comes from the families and clients that she has had the opportunity to come to know. Tracy has provided therapy services to both children and adults for over 20 years in many different types of settings, including working in the homes of families, community based outreach, school and clinic settings. From early on in her career, Tracy's passion for working with individuals' with more severe speech impairments and augmentative communication has inspired her to connect with children and their families.

Tracy most recently provided clinical instruction and supervision to undergraduate and graduate students at the University of Illinois Department of Speech and Hearing Science. Tracy's specialty areas include parent/toddler groups, individuals using low and high tech augmentative communication and children with speech, language and literacy needs in preschool through elementary school."""
p.save()
   
p = create_person('Cheryl', 'Yepez', 'M.A., CCC-SLP')
p.order = 1
p.title = 'Co-Founder'
p.description = """
I am a bilingual therapist with 14 years' experience. I have worked in several different settings, including public schools, Early Intervention, and as an independent provider of bilingual speech-language services to our community. My most recent experience has been at the University of Illinois, where I trained graduate students in speech-language pathology. As a mother of three, I love working with families and believe the family is the most important factor in a child's progress and success.   
"""
p.save()

bi = get_business_info('Prairie Wind Speech Therapy, Inc.')

bi.in_care_of_title  = "Savoy Business Development Center"
    
bi.street            = "611 North Dunlap, Suite 74"
bi.city              = "Savoy"
bi.state             = "IL"
bi.zip               = "61874"

bi.phone             = "(217) 355-5905"
bi.fax               = "(217) 666-2008"
bi.email             = "info@prairiewindspeech.com"

bi.tag_line          = "Serving Champaign-Urbana and the surrounding communities."

bi.facebook   = "https://www.facebook.com/prairiewindspeech"
bi.googleplus = "https://plus.google.com/101104787326194323431/about"

bi.directions        = """
    <div>Located near the intersection of Highway 45 and Tomaras Ave in Savoy, IL</div>
    <div>Across the street from the Savoy Fire Department</div>
    <div>Savoy is just south of Champaign and East of Urbana Illinois</div>
"""

bi.latitude          = 40.061906
bi.longitude         = -88.251189
bi.save()
