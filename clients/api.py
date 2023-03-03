from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from .models import Client
from .serializers import ClientSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.pagination import PageNumberPagination


class Pagination(PageNumberPagination):
    page_size = 2

class CLientListCreateApi(ListCreateAPIView):
    queryset = Client.objects.all().order_by('-id')
    serializer_class = ClientSerializer
    pagination_class = Pagination
    
class ClientDetailDeleteUpdate(RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all().order_by('-id')
    serializer_class = ClientSerializer