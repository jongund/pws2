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

from insurance.models import InsuranceCompany
    
def create_insurance_company(order, name):
  try:
    t = InsuranceCompany.objects.get(order=order)
    print("  Updating Insurance Company: " + name) 
    t.name=name
  except ObjectDoesNotExist:
    print("  Creating Insurance Company: " + name) 
    t = InsuranceCompany(order=order, name=name)
  t.save()
  return t

InsuranceCompany.objects.all().delete(); 
 
t = create_insurance_company(1, 'United Healthcare')
t = create_insurance_company(2, 'Blue Cross Blue Shield')
t = create_insurance_company(3, 'Illinois Medicaid – All Kids')
t = create_insurance_company(4, 'We can also bill for out of network services for some plans')

