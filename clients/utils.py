import re
from rest_framework import serializers


def fields_validator_text(value_field, field):
    data = re.search('[0-9]', value_field)
    if data:
        raise serializers.ValidationError(f'The field {field} must be text.')
    return value_field

def text_and_number_validator(value_field, field):
    try:
        data = int(value_field)
    except:
        data = value_field

    if isinstance(data, int):
        raise serializers.ValidationError(f'The field {field} must be text.')
    return value_field

def number_validator(value_field, field):
   
    if not isinstance(value_field, int):
        raise serializers.ValidationError(f'The field {field} must be number.')
    return value_field