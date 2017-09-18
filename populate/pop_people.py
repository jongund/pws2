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
Tracy is co-owner of Prairie Wind Speech Therapy, Inc.  Tracy received her Masters from the University of Wisconsin-Madison.  She practiced at the Munroe-Meyer institute of the University of Nebraska Omaha and at the Waisman Center of the University of Wisconsin – Madison, prior to moving to Champaign, IL.  Her practice has included parent collaboration and therapy with young children through young adults.  She particularly specializes in autism, apraxia of speech, motor speech, feeding, stuttering and receptive / expressive language.  Tracy is Hanen certified (More Than Words&reg;) and has received extensive continuing education in social cognitive models from Social Thinking (Michelle Garcia Winner), as well as attending in-depth workshops in autism, apraxia of speech and feeding.  
Tracy’s style of therapy draws from the Hanen approach and Social Thinking &reg; models from Michelle Garcia Winner. She uses a multimodal therapy format that includes visual supports, picture based communication systems and sensory integration techniques (tactile, oral and vestibular) in a play-based format.  Tracy deeply values partnering with the parent or care provider so that the intervention is functional for the child.   
Tracy enjoys spending time with friends and family.  She and her husband, Jon, like taking walks and being outdoors.   She has two grown children, Palmer and Kathryn.
""" 
p.save()
   
p = create_person('Cheryl', 'Yepez', 'M.A., CCC-SLP')
p.order = 1
p.title = 'Speech and Language Pathologist'
p.picture = "img/cheryl.png"
p.description = """
Cheryl is co-owner of Prairie Wind Speech Therapy, Inc.  Cheryl received her Masters from the University of Illinois at Urbana-Champaign.  She has worked as a bilingual (English/Spanish) speech-language therapist for local school districts, a provider for the Illinois Early Intervention System, and a Clinical Instructor at the University of Illinois.  Her practice has included family collaboration as well as individual therapy, and she has treated children from age one to age fourteen.  She particularly specializes in speech sound disorders, language delay, communication disorders in bilingual children, and autism.  Cheryl is certified in DIR/Floortime&reg;, is trained in the Picture Exchange Communication System&reg; (PECS), and has received extensive continuing education in Social Thinking, autism, bilingual language development and disorders, and apraxia of speech.
Cheryl’s approach to therapy is family-centered and functional.  She begins with the child’s interests and builds a therapy program that may include sensory integration techniques, visual supports, structured work, home programming, and play.  Cheryl believes that communication is the foundation of all relationships.  Through collaboration with families, she seeks to help children communicate in the most effective way they can.
Cheryl enjoys reading, hiking, kayaking, and spending time with her three daughters.
"""
p.save()

