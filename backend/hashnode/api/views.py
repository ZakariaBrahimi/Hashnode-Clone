from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .serializers import *
from django.contrib.auth import get_user_model


User = get_user_model()
# Logged User
# Before move on to writing the code in vscode,
# Declare the arguments for each view

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request, pk):
	user_details = get_object_or_404(User, pk=pk)
	user_details_serializer = UserSerializer(user_details)
	return Response(user_details_serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_user_profile(request):
	data = request.data
	user = get_object_or_404(User, id=request.user.id)
	new_user_data = UserSerializer(instance=user, data=data)
	if new_user_data.is_valid():
		new_user_data.save() # .save() will update the existing `User` instance.
		return Response(new_user_data.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_delete(request):
	user = get_object_or_404(User, id=request.user.id)
	user.delete()
	return Response('your account has been deleted successfully.')


#Article

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def recentArticles(request):
	recent_articles = Article.objects.filter(status='published').order_by('-updated_at')
	recent_articles_serializer = ArticleSerializer(recent_articles, many=True)
	return Response(recent_articles_serializer.data)

@api_view(['GET'])
def article_details(request,article_id):
	article = get_object_or_404(Article, id=article_id)
	article_serializer = ArticleSerializer(article)
	return Response(article_serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_article(request):
	return Response()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_article(request):
	return Response()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_article(request, article_id):
	article = get_object_or_404(Article, id=article_id, author=request.user)
	article.delete()
	return Response('your article has been deleted successfully.')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def likeDislikeArticle(request, article_id):
	article = get_object_or_404(Article, id=article_id)
	if article.likes.filter(id=request.user.id).exists():
		article.likes.remove(request.user.id)
	else:
		article.likes.add(request.user.id)

	return Response({'likesCount': len(article.likes.all())})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def bookmark_article(request):
	""" Make an article bookmarked/un-bookmarked """
	return Response()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def draft_article(request):
	""" Make an article drafted/un-drafted """
	return Response()


# Comment

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_comment(request):
	return Response()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_comment(request):
	return Response()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_comment(request):
	return Response()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def bookmarked_articles_list(request, user):
	""" Returning the list of all bookmarked articles of the current logged user """
	return Response()


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def drafted_articles_list(request, user):
	""" Returning the list of all drafts articles of the current logged user """
	return Response()


# Tags
def tag_articles_list(request):
	""" Listing all Tag Articles """
	return Response()




# Other functions to implement --> - User feed base on 3 catirories: recent/folled tags/....
# Anynomous User