from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from .models import Client
from .serializers import ClientSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.pagination import PageNumberPagination
from django.db.models import Q


class Pagination(PageNumberPagination):
    page_size = 9

class CLientListCreateApi(ListCreateAPIView):
    queryset = Client.objects.all().order_by('-id')
    serializer_class = ClientSerializer
    pagination_class = Pagination

    def get_queryset(self):
        qs = super().get_queryset()
        q = self.request.query_params.get('q')
        print(q)

        if q is not None:
            query = Q(
                Q(name__icontains=q) | Q(city__icontains=q) |
                Q(last_name__icontains=q) | Q(neightborhood__icontains=q)|
                Q(public_place__icontains=q)
            )
            qs = qs.filter(query)
            
        return qs
    
class ClientDetailDeleteUpdate(RetrieveUpdateDestroyAPIView):
    queryset = Client.objects.all().order_by('-id')
    serializer_class = ClientSerializer