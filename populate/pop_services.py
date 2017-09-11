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

def create_service(title, order):
  try:
    s = Service.objects.get(order=order)
    print("  Updating Service: " + title) 
    s.order  = order
  except ObjectDoesNotExist:
    print("  Creating Service: " + title) 
    s = Service(title=title, order=order, description="")
  s.save()
  return s
    
s = create_service('Augmentative and Alternative Communication (AAC)', 1)  
s.menu = "AAC"
s.description = """
Nullam congue tellus et dui hendrerit, ac facilisis augue pellentesque. In tincidunt, risus eget congue pretium, lacus nisl pretium lectus, quis convallis arcu odio et risus. Phasellus commodo volutpat lorem, eu iaculis metus hendrerit in. Etiam pulvinar commodo dui. In posuere augue a quam cursus pretium. Sed suscipit eu metus eu sagittis. Curabitur mollis mi eleifend, imperdiet metus et, varius risus. Vivamus imperdiet consequat est, sed pulvinar dui fringilla eu. Cras a ipsum non diam volutpat aliquam ac eget est. Quisque ultrices lobortis volutpat. Integer quis turpis in enim egestas mattis. Fusce ipsum neque, iaculis nec tempus ut, pulvinar in mi. Phasellus bibendum augue turpis, eget gravida turpis aliquet in. Vestibulum aliquam diam vel massa aliquam, venenatis ornare leo ultricies. Mauris tortor nulla, aliquam in sagittis non, pharetra sit amet sem. """
s.save()

s = create_service('Bilingual Therapy', 2)  
s.menu = "Bilingual"
s.description = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at ante sit amet tortor porta tempus at in ipsum. Sed quis porta urna. Nullam et dapibus ligula. Vivamus volutpat dui felis, vel suscipit lorem semper ut. Fusce tincidunt lacus a ligula ultricies, non eleifend mauris aliquam. Vestibulum fringilla lorem at neque bibendum porttitor. Suspendisse quis eleifend neque. Nulla quis semper sem, auctor pharetra est. Fusce fringilla lorem purus, quis posuere quam vehicula in. Nulla facilisi. Praesent ornare, urna sit amet mattis tristique, ex risus tristique libero, ac luctus lorem felis id dolor. Curabitur eget dui sed leo volutpat pellentesque. In feugiat libero nulla, eu gravida eros finibus nec. Sed sed nisl et lorem ullamcorper aliquet vitae id metus. Fusce iaculis, est et egestas aliquet, mi nisl ultricies ligula, ut efficitur justo metus quis quam. Nulla volutpat euismod tortor, at eleifend odio gravida ac. """
s.save()

s = create_service('Receptive/Expressive Language Difficulties', 3)  
s.menu = "Receptive/Expressive"
s.description = """
Maecenas faucibus, enim non dapibus aliquet, odio velit dictum neque, vitae aliquam diam lacus nec massa. Integer a est malesuada, eleifend ipsum a, imperdiet magna. Proin velit erat, lobortis sit amet lorem id, mattis interdum tortor. Ut pharetra sapien sit amet lorem aliquam posuere. Donec efficitur posuere neque. Etiam ornare congue nisi id vehicula. Donec consectetur pretium dolor in dictum. Nam vestibulum eleifend sem, nec lacinia lacus aliquam et. Nulla in nisl magna. Integer id orci et magna tincidunt rhoncus. 
"""
s.save()

s = create_service('Speech Development', 4)  
s.menu = "Speech Development"
s.description = """
Nam nisi nunc, feugiat efficitur elit sed, tincidunt auctor ex. Suspendisse a dolor dui. Etiam consequat justo sodales tellus condimentum lacinia. Etiam non tortor ut massa euismod condimentum. Praesent sed quam porttitor, tristique massa eget, hendrerit magna. Curabitur efficitur vestibulum tempor. Fusce non magna consequat, eleifend lacus vel, pellentesque tortor. Vivamus auctor arcu est, at suscipit velit dictum vel. Aliquam erat volutpat. Ut congue consequat pharetra. Mauris in ornare odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget orci blandit, condimentum nulla nec, bibendum dui. 
"""
s.save()

s = create_service('Home School Resource', 5)  
s.menu = "Home School"
s.description = """
Quisque scelerisque sem non felis iaculis, quis molestie nibh scelerisque. Mauris non ipsum elit. Donec non felis urna. Sed finibus euismod ullamcorper. Integer elementum at elit eget egestas. Aliquam pharetra risus cursus interdum volutpat. Integer luctus dignissim elit vitae dapibus. Pellentesque id finibus massa, vel fermentum nunc. Aliquam molestie ipsum et placerat tincidunt. Nullam sit amet sagittis magna. Nam convallis risus ut dui facilisis euismod. Phasellus at risus sit amet turpis commodo lobortis. Phasellus eget scelerisque arcu, et placerat tellus. Vestibulum quis leo a eros malesuada consectetur et et sem. Proin quis tempus lacus. 
"""
s.save()

s = create_service('Late Talkers', 6)  
s.menu = "Late Talkers"
s.description = """
Nam convallis dui felis, vehicula molestie neque tincidunt non. Maecenas sodales dui quis augue accumsan, hendrerit porta justo efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas iaculis efficitur est, nec accumsan quam elementum quis. Nam quis ante dictum, interdum quam nec, ullamcorper libero. Morbi vestibulum mi vitae urna consectetur, at egestas tortor ornare. Nam posuere, odio vel viverra tincidunt, quam sapien mollis orci, a egestas ex ex at ligula. Fusce dictum congue turpis a facilisis. Fusce at augue rutrum, egestas risus quis, condimentum ante. Sed sit amet diam ac ex bibendum lacinia interdum id neque. Quisque in iaculis lectus. Nunc sed elit mi. Proin elementum risus et felis placerat varius. 
"""
s.save()

