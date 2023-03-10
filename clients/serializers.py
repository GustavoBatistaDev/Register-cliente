from rest_framework import serializers
from .models import Client


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id','photo' , 'last_name', 'name', 'date_of_birth', 'created_at', 'city', 'neightborhood',
                  'public_place', 'zip_code', 'number']

    created_at = serializers.CharField(
        max_length=150,
        read_only=True
        )
    
    

   

