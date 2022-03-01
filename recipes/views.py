from django.shortcuts import render
from rest_framework import generics
from .models import Recipe, Step
from .serializers import RecipeSerializer, RecipeCreatorSerializer, RecipeCreatorChangeSerializer, RecipeCreatorChangeStepSerializer, RecipeCreatorStepSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

# Create your views here.

class RecipeListAPIView(generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    serializer_class = RecipeSerializer
    def get_queryset(self):
        return Recipe.objects.filter(status='PUB')

class RecipeListCreateAPIView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = RecipeCreatorSerializer
    def get_queryset(self):
       
        user = self.request.user
        return Recipe.objects.filter(author=user)

class RecipieDetailChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = RecipeCreatorChangeSerializer
    def get_queryset(self):
       
        user = self.request.user
        return Recipe.objects.filter(author=user)


class RecipeStepsList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = RecipeCreatorStepSerializer

    def get_queryset(self):
        '''
        This view should return a list of all stepss by the recipe passed in the url
        '''

        recipe = self.kwargs['recipe'] 
        return Step.objects.filter(recipe=recipe) 


    def perform_create(self, serializer):
        serializer.save(user=self.request.user) 

class StepDetailList(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Step.objects.all()
    serializer_class = RecipeCreatorChangeStepSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user) 