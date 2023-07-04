import requests
from ..models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny 
from django.shortcuts import get_object_or_404
from .serializers import *
from django.contrib.auth import get_user_model


User = get_user_model()
# Logged User

@api_view(['GET'])
@permission_classes([AllowAny])
def user_profile(request, pk):
    print(pk)
    user_details = get_object_or_404(User, pk=pk)
    user_details_serializer = UserDetailsSerializer(user_details)
    return Response(user_details_serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_user_profile(request):
	data = request.data
 
	print(data)
	user = get_object_or_404(User, id=request.user.id)
	new_user_data = UserDetailsSerializer(instance=user, data=data, partial=True)
	if new_user_data.is_valid():
		new_user_data.save()
		print(new_user_data.data)
		return Response(new_user_data.data)
	return Response(new_user_data.errors)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_delete(request):
	user = get_object_or_404(User, id=request.user.id)
	user.delete()
	return Response('your account has been deleted successfully.')


#Article

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def recentArticles(request):
	recent_articles = Article.objects.filter(status='published').order_by('-updated_at')
	recent_articles_serializer = ArticleSerializer(recent_articles, many=True)
	print(recent_articles)
	return Response(recent_articles_serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def personalizedArticles(request):
	return Response()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def FeatureArticles(request):
	return Response()

@api_view(['GET'])
def article_details(request,article_id):
	article = get_object_or_404(Article, id=article_id)
	article_serializer = ArticleSerializer(article)
	return Response(article_serializer.data)

import requests
from django.core.files.temp import NamedTemporaryFile
def download_and_save_article_image(image_url):
	"""helper function: when the user upload the image from usplash website as url"""
	response = requests.get(image_url)
	if response.status_code == 200:
		img_temp = NamedTemporaryFile() # create a temporary file
		img_temp.write(response.content) # write the image content to a temporary file
		img_temp.flush()
		return img_temp

from django.core.files import File
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_article(request):
    print(request.data.get('content'))
    upload_from = request.data.get('upload_from')
    if upload_from == 'local':
        print('local upload')
        new_article = Article.objects.create(author=request.user,cover=request.data.get('cover'),content=request.data.get('content'),title=request.data.get('title'),subtitle=request.data.get('subtitle'))
        serializer = ArticleSerializer(new_article)
        return Response(serializer.data)
    else:
        print('unsplash upload')
        img_temp = download_and_save_article_image(request.data.get('cover'))
        new_article = Article(author=request.user,content=request.data.get('content'),title=request.data.get('title'),subtitle=request.data.get('subtitle'))
        new_article.cover.save(f"{request.data.get('title')}.jpg", File(img_temp))
        new_article.save()
        serializer = ArticleSerializer(new_article)
        return Response(serializer.data)
        
        

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
	created, instance = Article.objects.get_or_create()
	return Response()
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_as_draft(request):
	""" Save the new created article as draft """
	article = Article.objects.create(
		author=request.user,
		cover=request.data.get('cover'),
		content=request.data.get('content'),
		title=request.data.get('title'),
		subtitle=request.data.get('subtitle'),
		status='draft'
	)
	return Response('Article Created successfully, and added to draft list')



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