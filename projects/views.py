from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth.models import Group

from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

from .models import ChatResponses
from .serializers import UserSerializer
from rest_framework.views import APIView      

import requests

        
class RegisterUserView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
 
class UpdateUserView(generics.UpdateAPIView):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def perform_update(self, serializer):
        serializer.save()
           

    
class RasaChatAPIView(APIView):
    
    #permission_classes = (IsAuthenticated, )
    
    def post(self, request):
        user = request.user
        user_message = request.data.get('message')
        rasa_response = self.send_message_to_rasa(user_message)
        
        conversation = ChatResponses(user=user, query=user_message, response=rasa_response)
        conversation.save()
        
        return Response({'response': rasa_response}, status=status.HTTP_200_OK)

    def send_message_to_rasa(self, message):
        rasa_url = 'http://localhost:5005/webhooks/rest/webhook' 
        data = {
            'message': message
        }
        response = requests.post(rasa_url, json=data)
        if response.status_code == 200:
            rasa_response = response.json()
            if rasa_response:
                return rasa_response[0]['text']
        return 'Failed to get response from Rasa server'