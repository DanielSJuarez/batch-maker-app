from django.db import models
from django.conf import settings

# Create your models here.

class Recipe(models.Model):
    CATAGORY = (
        ('POP', 'Popular'),
        ('FAV', 'Favorite'),
        ('ALL', 'All'),
    )

    STATUS = (
        ('PUB', 'Public'),
        ('PRV', 'Private'),
    )
    
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    recipe_name = models.CharField(max_length=255, null=True)
    cook_temp = models.IntegerField(default=0)
    cook_time = models.IntegerField(default=0)
    yield_name = models.CharField(max_length=255, null=True)
    yield_quantity = models.IntegerField(default=0)
    status = models.CharField(max_length=3, choices=STATUS, default='PRV')
    catagory = models.CharField(max_length=3, choices=CATAGORY, default='ALL')
    notes = models.TextField(blank=True)
    
    def __str__(self):
        return self.recipe_name

class Step(models.Model):

    MEASURE = (
        ('GRM', 'Grams'),
        ('CUP', 'Cups'),
        ('OUC', 'Ounces'),
        ('LBS', 'Pounds'),
        ('UNT', 'Unit'),
    )

    step_name = models.CharField(max_length=255, null=True)
    directions = models.TextField(blank=True)
    ingredient = models.CharField(max_length=255, null=True)
    amount_measure = models.IntegerField(default=0)
    measure = models.CharField(max_length=3, choices=MEASURE, default='UNT')
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)

    def __str__(self):
        return self.step_name


class Ingredient(models.Model):
    name = models.CharField(max_length=255, null=True)
    brand = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.step_name