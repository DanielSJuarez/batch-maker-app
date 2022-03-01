from django.db import models
from django.conf import settings

# Create your models here.

class Recipe(models.Model):
    CATAGORY = (
        ('POP', 'Popular'),
        ('FAV', 'Favorite'),
    )

    STATUS = (
        ('PUB', 'Public'),
        ('PRV', 'Private'),
    )

    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    recipe_name = models.CharField(max_length=255, null=True)
    steps = models.JSONField()
    cook_temp = models.IntegerField()
    cook_time = models.IntegerField()
    yield_name = models.CharField(max_length=255, null=True)
    yield_quantity = models.IntegerField()
    status = models.CharField(max_length=3, choices=STATUS, default='PRV')
    catagory = models.CharField(max_length=3, choices=CATAGORY)
    notes = models.TextField(blank=True)
    
    def __str__(self):
        return self.recipe_name

