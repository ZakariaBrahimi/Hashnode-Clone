from django.urls import path

from . import consumers

websocket_urlpatterns = [
    path("ws/notifications", consumers.ChatConsumer.as_asgi()),
]