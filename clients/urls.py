from django.urls import path
from . import api


urlpatterns = [
    path('home/clients/api/', api.home, name='home'),
    path('home/clients/api/<int:id>/', api.detail, name='detail'),


]