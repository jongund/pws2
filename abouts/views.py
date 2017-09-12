from django.shortcuts import render

from .models           import BusinessInformation
from insurance.models  import InsuranceCompany
from people.models     import Person
from programs.models   import Program
from services.models   import Service

# Abouts View
# -----------------------------------------------------------------------------
     
def show_home(request):

    user = request.user
    businessinfo  = BusinessInformation.objects.all().first()
    insurance     = InsuranceCompany.objects.all()
    people        = Person.objects.all()
    programs      = Program.objects.all()
    services      = Service.objects.all()

    context = {
          'user'        : user,          
          'businessinfo': businessinfo,      
          'isurance'    : insurance,
          'people'      : people,
          'programs'    : programs,
          'services'    : services
      }
    return render(request, 'show_home.html', context)  

def show_people(request):

    user = request.user
    businessinfo  = BusinessInformation.objects.all().first()
    insurance     = InsuranceCompany.objects.all()
    people        = Person.objects.all()
    programs      = Program.objects.all()
    services      = Service.objects.all()

    context = {
          'user'        : user,          
          'businessinfo': businessinfo,      
          'insurance'   : insurance,
          'people'      : people,
          'programs'    : programs,
          'services'    : services
      }
    return render(request, 'show_people.html', context)  

def show_services(request):

    user = request.user
    businessinfo  = BusinessInformation.objects.all().first()
    insurance     = InsuranceCompany.objects.all()
    people        = Person.objects.all()
    programs      = Program.objects.all()
    services      = Service.objects.all()

    context = {
          'user'        : user,          
          'businessinfo': businessinfo,      
          'insurance'    : insurance,
          'people'      : people,
          'programs'    : programs,
          'services'    : services
      }
    return render(request, 'show_services.html', context)  

def show_contact(request):

    user = request.user
    businessinfo  = BusinessInformation.objects.all().first()
    insurance     = InsuranceCompany.objects.all()
    people        = Person.objects.all()
    programs      = Program.objects.all()
    services      = Service.objects.all()

    context = {
          'user'        : user,
          'businessinfo': businessinfo,      
          'insurance'   : insurance,
          'people'      : people,
          'programs'    : programs,
          'services'    : services
      }
    return render(request, 'show_contact.html', context)  

def show_directions(request):

    user = request.user
    businessinfo  = BusinessInformation.objects.all().first()
    insurance     = InsuranceCompany.objects.all()
    people        = Person.objects.all()
    programs      = Program.objects.all()
    services      = Service.objects.all()

    context = {
          'user'        : user,          
          'businessinfo': businessinfo,      
          'insurance'   : insurance,
          'people'      : people,
          'programs'    : programs,
          'services'    : services
      }
    return render(request, 'show_directions.html', context)  


       