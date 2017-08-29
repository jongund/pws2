from django.shortcuts import render

from django.db import models

from .models import Program



# Create your views here.

# -----------------------------------------------------------------------------
# Services View
# -----------------------------------------------------------------------------
     
def show_pws(request):

    user = request.user
    programs = Program.objects.all()

    context = {
          'title'     : 'Welcome to Prairiewind Speech',
          'navbar'    : 'home',
          'programs'  : programs,
          'user'      : user,
      }
    return render(request, 'show_pws.html', context)  
