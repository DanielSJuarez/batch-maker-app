from django.shortcuts import render
from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer, RecipeCreatorSerializer, RecipeCreatorChangeSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Create your views here.

class RecipeListAPIView(generics.ListAPIView):
    serializer_class = RecipeSerializer
    def get_queryset(self):
        return Recipe.objects.filter(status='PUB')

class RecipeListCreateAPIView(generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = RecipeCreatorSerializer
    def get_queryset(self):
       
        user = self.request.user
        return Recipe.objects.filter(author=user)

class RecipieDetailChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = RecipeCreatorChangeSerializer
    def get_queryset(self):
       
        user = self.request.user
        return Recipe.objects.filter(author=user)