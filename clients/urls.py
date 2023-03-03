from django.urls import path
from . import api


urlpatterns = [
    path('home/clients/api/', api.CLientListCreateApi.as_view(), name='home'),
    path('home/clients/api/<int:pk>/', api.ClientDetailDeleteUpdate.as_view(), name='detail'),

]