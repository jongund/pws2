import sys,os
sys.path.append(os.path.abspath('..'))

print(sys.path)

#os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'pws2.settings')

os.environ['DJANGO_SETTINGS_MODULE'] = 'pws2.settings'

from django.conf import settings

import django
django.setup()

"""This file is for populating the database with markup information
I empty it. Run as a standalone script!"""


from django.core.exceptions import ObjectDoesNotExist

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

bi = get_business_info('Prairie Wind Speech Therapy, Inc.')

bi.in_care_of_title  = "Savoy Business Development Center"
    
bi.street            = "1803 Woodfield Drive, Suite C"
bi.city              = "Savoy"
bi.state             = "IL"
bi.zip               = "61874"

bi.phone             = "(217) 355-5905"
bi.phone_href        = "1-217-355-5905"
bi.fax               = "(217) 666-2008"
bi.email             = "info@prairiewindspeech.com"

bi.tag_line          = "Serving Champaign-Urbana and the surrounding communities."

bi.facebook   = "https://www.facebook.com/prairiewindspeech"
bi.googleplus = "https://plus.google.com/101104787326194323431/about"

bi.directions        = """
* Located near the intersection of Highway 45 and Arbors Drive in Savoy, IL
* About a block North of the Honda/BMW Car Dealership on Woodfield Drive
* Savoy is just south of Champaign and East of Urbana
* Entrance and parking in the back of the building
"""

bi.latitude          = 40.077958
bi.longitude         = -88.249188
bi.save()
