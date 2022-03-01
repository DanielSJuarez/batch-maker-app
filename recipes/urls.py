from django.urls import path
from .views import RecipeListAPIView, RecipeListCreateAPIView, RecipieDetailChangeAPIView

urlpatterns = [
    path('articles/<int:pk>/user/', RecipieDetailChangeAPIView.as_view()),
    path('recipes/user/', RecipeListCreateAPIView.as_view()),
    path('recipes/', RecipeListAPIView.as_view()),
]