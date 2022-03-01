from django.contrib import admin

from recipes.models import Recipe
from .models import Ingredient, Recipe, Step

# Register your models here.
admin.site.register(Recipe)
admin.site.register(Step)
admin.site.register(Ingredient)