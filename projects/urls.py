from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views
from .views import RasaChatAPIView

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    path('register/', views.RegisterUserView.as_view(), name='register_user'),
    path('updateuser/<str:pk>/', views.UpdateUserView.as_view(), name="update-view"),
    
    path('chat/', RasaChatAPIView.as_view(), name='chat'),

]

