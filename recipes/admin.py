from django.contrib import admin

from recipes.models import Recipe
from .models import Recipe

# Register your models here.
admin.site.register(Recipe)