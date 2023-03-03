from rest_framework import serializers
from .models import Client
from .utils.validation_data import validation


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id','name','photo' , 'date_of_birth', 'created_at', 'city', 'neightborhood',
                  'public_place', 'zip_code', 'number']

    created_at = serializers.CharField(
        max_length=150,
        read_only=True
        )

    

    def validate_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                {"name":['name must be more than 5 characters']}
            )
        
        
        char = validation(value=value)
        if char:
            return value
    
        raise serializers.ValidationError(
            {'name':['Name needs to be a text']}
        )
    
    def validate_city(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                {"City":['City must be more than 3 characters']}
            )
        
        
        char = validation(value=value)
        if char:
            return value
    
        raise serializers.ValidationError(
            {'City':['City needs to be a text']}
        )

    def validate_neightborhood(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                {"neightborhood":['neightborhood must be more than 3 characters']}
            )
        
        
        char = validation(value=value)
        if char:
            return value
    
        raise serializers.ValidationError(
            {'neightborhood':['neightborhood needs to be a text']}
        )


    def validate_public_place(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                {"public_place":['public_place must be more than 3 characters']}
            )
        
        try:
            value = int(value)


        except:
            value = str(value)

        if isinstance(value, int):

            raise serializers.ValidationError(
                {'public_place':['public_place needs to be a text']}
            )

        return value
    

    def validate_zip_code(self, value):
        try:
            value = int(value)
        except:
            value = value

        if not isinstance(value, int):
          
            raise serializers.ValidationError(
                {'zip_code':['zip_code needs to be a number']}
            )

        return value


    def validate_number(self, value):
        try:
            value = int(value)
        except:
            value = value
        if not isinstance(value, int):

            raise serializers.ValidationError(
                {'number':['number needs to be a number']}
            )

        return value


