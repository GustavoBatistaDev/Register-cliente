from rest_framework import serializers
from .models import Client
from.utils import fields_validator_text, text_and_number_validator, number_validator


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id' , 'last_name', 'name', 'date_of_birth', 'created_at', 'city', 'neightborhood',
                  'public_place', 'zip_code', 'number']

    created_at = serializers.CharField(
        max_length=150,
        read_only=True
        )
    
    def validate_name(self, value):
       return fields_validator_text(value_field=value, field='name')
    
    def validate_last_name(self, value):
       return fields_validator_text(value_field=value, field='last_name')
    
    def validate_city(self, value):
       return fields_validator_text(value_field=value, field='city')

    def validate_neightborhood(self, value):
       return fields_validator_text(value_field=value, field='neightborhood')
    
    def validate_public_place(self, value):
       return text_and_number_validator(value_field=value, field='public_place')
    
    def validate_zip_code(self, value):
       return number_validator(value_field=value, field='zip_code')
    
    def validate_number(self, value):
       return number_validator(value_field=value, field='number')
    
    

    

    

    
    

    





   

