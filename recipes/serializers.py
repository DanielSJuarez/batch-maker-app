from django.dispatch import receiver
from rest_framework import serializers  
from .models import Recipe, Step, Ingredient


class RecipeSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes', 'id', 'catagory')

class RecipeCreatorSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes', 'catagory', 'status', 'id')

class RecipeCreatorStepSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Step
        fields = ('recipe','creator','step_name', 'directions','ingredient', 'measure', 'amount_measure', 'id')


class RecipeCreatorChangeSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes', 'catagory', 'status', 'id')


class RecipeCreatorChangeStepSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Step
        fields = ('recipe','creator','step_name', 'directions','ingredient','measure', 'amount_measure', 'id')


class IngredientSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Ingredient
        fields =  ('name', 'brand', 'price', 'id')

class IngredientEditSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Ingredient
        fields = ('name', 'brand', 'price', 'id')