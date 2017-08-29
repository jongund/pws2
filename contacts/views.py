import datetime

from django.shortcuts import render
from django import forms
from django.core.mail import send_mail


from django.db import models

from contacts.models import Contact
from contacts.forms import ContactForm

from pws2.settings_local import INFO_EMAIL
    
# -----------------------------------------------------------------------------
# Contact View
# -----------------------------------------------------------------------------
     
def show_contact(request):

  user = request.user

  bus_info = BusinessInformation.objects.all()[0]

  if request.method == 'POST': 
  
    contact_form = ContactForm(request.POST) 
    
    if contact_form.is_valid(): 

      email2   = contact_form.cleaned_data['email2']
      
      if email2 == '':
            
        first   = contact_form.cleaned_data['first_name']
        last    = contact_form.cleaned_data['last_name']
        phone   =  contact_form.cleaned_data['phone']
        email   = contact_form.cleaned_data['email']
        option1 = contact_form.cleaned_data['option1']
        option2 = contact_form.cleaned_data['option2']
        comment = contact_form.cleaned_data['comment']

        contact = Contact.objects.create(first_name=first, last_name=last)
        contact.phone = phone
        contact.email = email
        contact.option1 = option1
        contact.option2 = option2
        contact.comment = comment
      
        contact.save()
        
        topic = "Information request from " + first + " " + last        
        
        message = "    name: " + first + " " + last + "\n"
          
        if len(phone):
          message += "   phone: " + phone + "\n"
        if len(email):
          message += "   email: " + email + "\n"
        if len(option1):
          message += "\nInterest: " + option1 + "\n"
        if len(option2):
          message += "Interest: " + option2 + "\n"
        if len(comment):
          message += "\nMore Information\n" + comment + "\n"
        
#        print("TOPIC: " + topic)
#        print("MESSAGE: " + message)
          
        recipients = [INFO_EMAIL]

        send_mail(topic, message, '', recipients)
        

      context = {
        'title'     : 'Thank You',
        'navbar'    : 'contact',
        'user'      : user,
      }
      return render(request, 'show_contact_thank_you.html', context)  
      
    else:  

      context = {
        'title'     : 'Contact',
        'navbar'    : 'contact',
        'user'      : user,
        'post_url'  : reverse('show_contact'),
        'form'      : contact_form,
      }

      return render(request, 'show_contact.html', context)  
    
  else:
    contact_form = ContactForm() # An unbound form

    context = {
        'title'     : 'Contact',
        'navbar'    : 'contact',
        'post_url'  : reverse('show_contact'),
        'user'      : user,
        'form'      : contact_form,
    }

    return render(request, 'show_contact.html', context)  

