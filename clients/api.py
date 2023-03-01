from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from .models import Client
from .serializers import ClientSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404


@api_view(http_method_names=['get', 'post'])
def home(request: Request) -> Response:
    if request.method == 'GET':
        clients = Client.objects.all().order_by('-id')
        serializer = ClientSerializer(instance=clients, many=-True)
        return Response(serializer.data)
    
    serializer = ClientSerializer( 
        data=request.data  
    )

    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.validated_data,
                    status=status.HTTP_201_CREATED
                    )
    
@api_view(http_method_names=['get', 'delete', 'patch'])
def detail(request: Request, id: int) -> Response:
    client = get_object_or_404(Client, id=id)

    if request.method == "GET":
        serializer = ClientSerializer(
            instance=client,
            many=False
        )
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == "PATCH":


        serializer = ClientSerializer(
            instance=client,
            data=request.data,
            many=False,
            context={'request':request},
            partial=True
        ) 

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    elif request.method == "DELETE":
        client.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
