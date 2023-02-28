from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from .models import Address, Client
from .serializers import ClientSerializer


@api_view(http_method_names=['get', 'post'])
def home(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(instance=clients, many=-True)
    return Response(serializer.data)