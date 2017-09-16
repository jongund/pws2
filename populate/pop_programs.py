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

from programs.models import Program

def create_program(title, order):
  try:
    s = Program.objects.get(order=order)
    print("  Updating Program: " + title) 
    s.order  = order
  except ObjectDoesNotExist:
    print("  Creating Program: " + title) 
    s = Program(title=title, order=order, description="")
  s.save()
  return s
    
s = create_program('Summer Programs', 1)  
s.show = False
s.description = """
Nullam congue tellus et dui hendrerit, ac facilisis augue pellentesque. In tincidunt, risus eget congue pretium, lacus nisl pretium lectus, quis convallis arcu odio et risus. Phasellus commodo volutpat lorem, eu iaculis metus hendrerit in. Etiam pulvinar commodo dui. In posuere augue a quam cursus pretium. Sed suscipit eu metus eu sagittis. Curabitur mollis mi eleifend, imperdiet metus et, varius risus. Vivamus imperdiet consequat est, sed pulvinar dui fringilla eu. Cras a ipsum non diam volutpat aliquam ac eget est. Quisque ultrices lobortis volutpat. Integer quis turpis in enim egestas mattis. Fusce ipsum neque, iaculis nec tempus ut, pulvinar in mi. Phasellus bibendum augue turpis, eget gravida turpis aliquet in. Vestibulum aliquam diam vel massa aliquam, venenatis ornare leo ultricies. Mauris tortor nulla, aliquam in sagittis non, pharetra sit amet sem. """
s.save()

s = create_program('Fall Programs', 2)  
s.show = False
s.description = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at ante sit amet tortor porta tempus at in ipsum. Sed quis porta urna. Nullam et dapibus ligula. Vivamus volutpat dui felis, vel suscipit lorem semper ut. Fusce tincidunt lacus a ligula ultricies, non eleifend mauris aliquam. Vestibulum fringilla lorem at neque bibendum porttitor. Suspendisse quis eleifend neque. Nulla quis semper sem, auctor pharetra est. Fusce fringilla lorem purus, quis posuere quam vehicula in. Nulla facilisi. Praesent ornare, urna sit amet mattis tristique, ex risus tristique libero, ac luctus lorem felis id dolor. Curabitur eget dui sed leo volutpat pellentesque. In feugiat libero nulla, eu gravida eros finibus nec. Sed sed nisl et lorem ullamcorper aliquet vitae id metus. Fusce iaculis, est et egestas aliquet, mi nisl ultricies ligula, ut efficitur justo metus quis quam. Nulla volutpat euismod tortor, at eleifend odio gravida ac. """
s.save()

s = create_program('Spring Programs', 2)  
s.show = False
s.description = """
Maecenas faucibus, enim non dapibus aliquet, odio velit dictum neque, vitae aliquam diam lacus nec massa. Integer a est malesuada, eleifend ipsum a, imperdiet magna. Proin velit erat, lobortis sit amet lorem id, mattis interdum tortor. Ut pharetra sapien sit amet lorem aliquam posuere. Donec efficitur posuere neque. Etiam ornare congue nisi id vehicula. Donec consectetur pretium dolor in dictum. Nam vestibulum eleifend sem, nec lacinia lacus aliquam et. Nulla in nisl magna. Integer id orci et magna tincidunt rhoncus. 
"""
s.save()

