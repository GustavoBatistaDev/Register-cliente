from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=150)
    date_of_birth = models.DateField()
    photo = models.ImageField(upload_to='img_clients')
    created_at = models.DateTimeField(auto_now_add=True)
    city = models.CharField(max_length=150)
    neightborhood = models.CharField(max_length=150)
    public_place = models.CharField(max_length=150) 
    zip_code = models.CharField(max_length=9)
    number = models.IntegerField()
    
    def __str__(self) -> str:
        return self.name


