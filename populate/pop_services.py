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

from services.models import Service

def create_service(order, title, special):
  try:
    s = Service.objects.get(order=order)
    print("  Updating Service: " + title) 
    s.order  = order
    s.special = special
  except ObjectDoesNotExist:
    print("  Creating Service: " + title) 
    s = Service(title=title, order=order, description="", special=special)
  s.save()
  return s

    
s = create_service(1, 'Late Talkers', False)  
s.description = """
Are you concerned because your toddler isn’t talking? Can you count the number of words your 2-year-old understands? If the answer is yes, your child may be a late talker. When children under the age of three have language delays, communication at home often looks a lot like pointing and grunting. Our therapists have many years of experience understanding and working with toddlers and families. We believe parents and caregivers are an integral part of the therapy process, and we welcome the chance to work with you.
"""
s.save()

s = create_service(2, 'Speech', False)  
s.menu = "Bilingual"
s.description = """
Is your child’s speech hard to understand? Do people often say “What?” or ask him to repeat himself?  Does your child stutter?   We can help your child communicate more effectively.  Full evaluations are available, as well as therapy for articulation, phonology, apraxia of speech and stuttering.
"""
s.save()

s = create_service(3, 'Autism Spectrum Disorder', True)  
s.menu = "Receptive/Expressive"
s.description = """
Our experienced therapists work with you and your child to develop social interaction skills.  We use motivating activities to teach turn-taking, conversation, play and thinking about others.  We draw upon research-based interventions to support our therapy techniques. 
"""
s.save()

s = create_service(4, 'Receptive/Expressive Language Difficulties', False)  
s.menu = "Speech Development"
s.description = """
Language skills are the foundation of school success and effective self-expression. A strong vocabulary, the ability to understand what’s being said and to follow directions, and positive interactions are the basis for academic and social growth. We treat the language skills that affect a wide range of concerns, including autism, Down syndrome, learning disabilities, auditory processing, and language delays/disorders. Make an appointment for your free initial consult today.
"""
s.save()

s = create_service(5, 'Augmentative and Alternative Communication (AAC)', True)  
s.menu = "Home School"
s.description = """
We offer assessment and ongoing therapy for individuals who can benefit from both low and high tech augmentative and alternative communication (AAC) systems. In addition, we have access to assistive technology that can be used for reading and writing. Our therapists work closely with families to determine the most effective methods to assist the child’s communication.
"""
s.save()

s = create_service(6, 'Bilingual Therapy', True)  
s.description = """
<span lang="es">Habla bien su hijo? La gente le entiende cuando habla? El nino comprende lo que le dicen los demas? Ofrecemos evaluaciones y terapia en espanol para problemas del habla y para mejorar la comunicacion y la comprension. La consulta inicial es gratis.</span>
We offer a variety of speech and language services in Spanish, including therapy for speech sound errors, language comprehension, expression, and social skills. As always, our initial consult is free. In addition, bilingual speech-language evaluations are available to individuals and school districts.
"""
s.save()

s = create_service(7, 'School Services', True)  
s.description = """
Are you a school district looking for help? We offer small contracts for school-based speech-language therapy. We are also available for individual speech-language evaluations in English and Spanish.
"""
s.save()