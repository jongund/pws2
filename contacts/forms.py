from django         import forms

from contacts.models import Contact
from contacts.models import INFO_OPTIONS

class ContactForm(forms.Form):

  first_name     = forms.CharField(label="First Name",    required=True, initial="")
  last_name      = forms.CharField(label="Last Name",     required=True, initial="")
  phone          = forms.CharField(label="Phone",         required=False, initial="")
  email          = forms.EmailField(label="Email",        required=False, initial="")
  email2         = forms.CharField(label="Verify email",  required=False, initial="")
  option1        = forms.ChoiceField(choices=INFO_OPTIONS,  widget=forms.Select, required=False, label="Primary Interest")
  option2        = forms.ChoiceField(choices=INFO_OPTIONS,  widget=forms.Select, required=False, label="Additional Interest")
  comment        = forms.CharField(label="Other Information", widget=forms.Textarea,  required=False, initial="")
