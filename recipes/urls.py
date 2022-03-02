from django.urls import path
from .views import RecipeListAPIView, RecipeListCreateAPIView, RecipieDetailChangeAPIView, StepDetailList, RecipeStepsList, IngredientList, IngredientEditList

urlpatterns = [
     path('ingredients/<int:pk>/user/', IngredientEditList.as_view()),
    path('ingredients/user/', IngredientList.as_view()),
    path('recipes/<int:recipes>/step/<int:pk>/', StepDetailList.as_view()),
    path('recipes/<int:recipe>/step/', RecipeStepsList.as_view(), name = 'recipe_steps'),
    path('recipes/<int:pk>/user/', RecipieDetailChangeAPIView.as_view()),
    path('recipes/user/', RecipeListCreateAPIView.as_view()),
    path('recipes/', RecipeListAPIView.as_view()),
]