from ..models import *
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()

class UserDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model  = User
        fields = ('id', 'fullname', 'img', 'email', 'date_joined', 'follow', 'bio', 'profile_tagline', 'available_for', 'location', 'stackOverflow', 'facebook', 'linkedin', 'youtube', 'website', 'github', 'twitter', 'instagram',)
        depth  = 1

class ArticleSerializer(serializers.ModelSerializer):
    # new field created for recent article view
    articleCommentsCount = serializers.SerializerMethodField(method_name='get_comments_length')
    def get_comments_length(self, article):
        return article.comments.count()
    class Meta:
        model = Article
        fields = '__all__'
        depth = 1
        
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('content', 'author', 'article', 'created_date', 'id')
        depth = 1
class CreateCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('content', 'author', 'article', 'created_date')
        # depth = 1