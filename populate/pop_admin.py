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

users = (
('jongund', 'abc', 'jongund@illinois.edu', 'Jon', 'Gunderson', True, True, True), 
)

def create_users(users):
    
    for person in users:
        try:
          user = User.objects.get(username=person[0])
          user.email        = person[2]
          user.first_name   = person[3]
          user.last_name    = person[4]
          user.is_active    = person[5]
          user.is_superuser = person[6]
          user.is_staff     = person[7]
        except ObjectDoesNotExist:
          user = User(username=person[0], email=person[2], first_name=person[3], last_name=person[4], is_active=person[5], is_superuser=person[6], is_staff=person[7])
          user.set_password(person[1])
        user.save()
        print('User: ' + user.first_name + ' ' + user.last_name)
        
create_users(users)

users = User.objects.all()

for u in users:
  print(u.first_name + ' ' + u.last_name)
