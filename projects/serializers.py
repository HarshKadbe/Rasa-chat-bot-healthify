from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import ChatBotResponse, ChatResponses

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = "__all__"
        
    def validate_password(self, value: str) -> str:
        return make_password(value)
    
    
class ChatBotResponseSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ChatBotResponse
        fields = ['question', 'answer']
        extra_kwargs = {
            'answer':{'required': False}
        }
        
class DialogflowWebhookSerializer(serializers.Serializer):
    query = serializers.CharField()

    