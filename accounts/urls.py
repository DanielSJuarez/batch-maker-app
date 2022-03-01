from django.urls import path
from .views import ProfileListAPIView

urlpatterns = [
    path('accounts/', ProfileListAPIView.as_view())
]