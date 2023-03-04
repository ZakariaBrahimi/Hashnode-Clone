from ..models import *
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('fullname', 'email', 'date_joined', 'follow', 'bio', 'profile_tagline', 'available_for', 'location', 'stackOverflow', 'facebook', 'linkedin', 'youtube', 'website', 'github', 'twitter', 'instagram',)
        depth = 1

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        depth = 1