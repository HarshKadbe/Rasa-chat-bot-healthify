from django.db import models
from django.contrib.auth.models import User

class ChatBotResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.CharField(max_length=500)
    answer = models.TextField(blank=True, null=True)
    data_created = models.DateTimeField(auto_now_add=True)
    
    
    
class PreDefineQA(models.Model):
    question = models.CharField(unique=True, max_length=255)
    answer = models.CharField(max_length=500)
    
    def __str__(self):
        return self.question  + " - " + self.answer
    


class ChatResponses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    query = models.TextField()
    response = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.timestamp}"



class UserResponse(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    gender = models.CharField(max_length=10)
    medical_conditions = models.CharField(max_length=255)
    physical_activity = models.CharField(max_length=255)
    diet = models.CharField(max_length=255)
    stress = models.CharField(max_length=255)
    habits = models.CharField(max_length=255)
    family_history = models.CharField(max_length=255)
    health_goals = models.CharField(max_length=255)
    
    
    