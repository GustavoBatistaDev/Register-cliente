from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=150)
    date_of_birth = models.DateField()
    
    def __str__(self) -> str:
        return self.name


class Address(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    city = models.CharField(max_length=150)
    neightborhood = models.CharField(max_length=150)
    public_place = models.CharField(max_length=150) 
    zip_code = models.CharField(max_length=9)
    number = models.IntegerField()

    def __str__(self) -> str:
        return self.city

