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
Tracy is co-owner of Prairie Wind Speech Therapy, Inc.  Tracy received her Masters from the University of Wisconsin-Madison.  She practiced at the Munroe-Meyer institute of the University of Nebraska Omaha and at the Waisman Center of the University of Wisconsin – Madison, prior to moving to Champaign, IL.  Her practice has included parent collaboration and therapy with young children through young adults.  She particularly specializes in autism, apraxia of speech, motor speech, stuttering and receptive / expressive language.  Tracy is Hanen certified (More Than Words) and has received extensive continuing education in social cognitive models from Social Thinking (Michelle Garcia Winner), as well as attending extensive workshops in autism and apraxia of speech.  
Tracy’s style of therapy draws from the Hanen approach and social thinking models from Michelle Garcia Winner. She uses a multimodal therapy format that includes visual supports, picture based communication systems and sensory integration techniques (tactile, oral and vestibular) in a play based format.  Tracy deeply values partnering with the parent or care provider so that the intervention is functional for the child.   
Tracy enjoys spending time with friends and family.  Her husband, Jon and her, like taking walks and being outdoors.
""" 
p.save()
   
p = create_person('Cheryl', 'Yepez', 'M.A., CCC-SLP')
p.order = 1
p.title = 'Speech and Language Pathologist'
p.picture = "img/cheryl.png"
p.description = """
As a mother of three, I love working with families and believe the family is the most important factor in a child’s progress and success. In my 14 years’ experience as a bilingual therapist, I have worked in several different settings, including public schools, Early Intervention, and as an independent provider of bilingual speech-language services to our community. My most recent experience has been at the University of Illinois, where I trained graduate students in speech-language pathology. My favorite thing about the Early Intervention system is its focus on family-centered care, and I have built that into my practice at Prairie Wind. It is a joy to me to be able to collaborate with parents and involve them in their children’s therapy. I am also passionate about bilingual therapy. I love working with Spanish-speaking families to help them develop their children’s communication while still supporting their home language."""
p.save()

