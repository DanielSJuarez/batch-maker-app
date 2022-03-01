from django.dispatch import receiver
from rest_framework import serializers  
from .models import Recipe, Step


class RecipeSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes')

class RecipeCreatorSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes', 'catagory', 'status')

class RecipeCreatorStepSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Step
        fields = ('recipe','creator','step_name', 'directions','ingredient', 'measure', 'amount_measure', 'unit', 'amount_unit',)


class RecipeCreatorChangeSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Recipe
        fields = ('creator', 'recipe_name','cook_temp', 'cook_time', 'yield_name', 'yield_quantity', 'notes', 'catagory', 'status')


class RecipeCreatorChangeStepSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source = 'author.username')
    class Meta:
        model = Step
        fields = ('recipe','creator','step_name', 'directions','ingredient','measure', 'amount_measure', 'unit', 'amount_unit')