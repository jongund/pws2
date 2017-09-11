"""pws2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin

from django.conf import settings
from django.conf.urls.static import static

from abouts.views import show_home
from abouts.views import show_contact
from abouts.views import show_directions
from abouts.views import show_people
from abouts.views import show_services


urlpatterns = [
#    url(r'^static/(?P<path>.*)$', never_cache(serve_static)),

    url(r'^admin/', admin.site.urls),
    url(r'^$',             show_home,        name='show_home'),
    url(r'^contact/$',     show_contact,     name='show_contact'),   
    url(r'^directions/$',  show_directions,  name='show_directions'),   
    url(r'^people/$',      show_people,      name='show_people'),   
    url(r'^services/$',    show_contact,     name='show_services'),   

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
