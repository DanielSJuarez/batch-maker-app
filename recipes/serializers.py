from django.dispatch import receiver
from rest_framework import serializers  
from .models import Recipe


class RecipeSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','steps','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes')

class RecipeCreatorSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','steps','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes', 'catagory', 'status')


class RecipeCreatorChangeSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','steps','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes', 'catagory', 'status')