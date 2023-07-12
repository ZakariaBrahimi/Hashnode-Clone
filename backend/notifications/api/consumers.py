from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny 
from django.shortcuts import get_object_or_404
from .serializers import *
from django.contrib.auth import get_user_model
from channels.generic.websocket import WebsocketConsumer
import json

User = get_user_model()


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        """called when a WebSocket connection is established"""
        # checking if user authenticated
        # if it is authenticated: accept the connection
        print('hhhhhhhhhhhhhhhhhhhhh')
        self.accept()

    def disconnect(self, close_code):
        """called when the WebSocket connection is closed"""
        pass

    def receive(self, text_data):
        """called when the consumer receives a message from the WebSocket connection"""
        text_data_json = json.loads(text_data)
        sender = self.scope['user']
        article = text_data_json["article"]
        # Create a new notification object and save it
        # Send the response message
        self.send(text_data=json.dumps({"message": sender}))
        
    def send_message(self, message):
        # Send a message to the WebSocket connection
        self.send(text_data=message)

"""
Tasks: 
    - Push notifications for the following user actions:
        - Creating a new comment
        - Like an article
    - Functionalities: 
        - Mark all notifications as reviewed
        
    - Model:
        class Notification(models.Model):
            notification_types = (
                ('comment', 'Comment'),
                ('reaction', 'Reaction'),
            )
            created_at = models.DateTimeField(auto_now_add=True)
            type = models.CharField(max_length=50, choices=notification_types)
            is_reviewed = models.BooleanField(default=False)
            target_user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='received_notifications') 
            sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_notifications')
            message = models.TextField(blank=True, null=True) # could be removed

            class Meta:
                ordering = ['-created_at']
            def __str__(self):
                return f"Notification {self.pk}: {self.notification_type} for {self.target_user.username}"    
"""