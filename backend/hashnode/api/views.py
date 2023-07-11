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
# user = request.user
#     bookmarked_articles = user.bookmarks.all()
@api_view(['GET'])
@permission_classes([AllowAny])
def recentArticles(request):
    recentArticles = Article.objects.filter(status='published').order_by('-updated_at')
    serializer = ArticleSerializer(recentArticles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def personalizedArticles(request):
	return Response()

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def FeatureArticles(request):
	return Response()

# @api_view(['GET'])
# def article_details(request,article_id):
# 	article = get_object_or_404(Article, id=article_id)
# 	article_serializer = ArticleSerializer(article)
# 	return Response(article_serializer.data)
@api_view(['GET'])
def article_details(request, article_id):
    article = get_object_or_404(Article, id=article_id)
    comments = Comment.objects.filter(article=article_id)
    article_serializer = ArticleSerializer(article)
    comments_serializer = CommentSerializer(comments, many=True)
    return Response({'comments': comments_serializer.data, 'article_details': article_serializer.data})
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
    articleID = request.query_params.get('articleID')
    article = get_object_or_404(Article, pk=articleID)
    print(request.data)
    serializer = ArticleSerializer(instance=article, data=request.data, partial=True)
    if serializer.is_valid():
        print(request.data)
        serializer.save()
        return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_article(request, article_id):
    user = request.user
    article = get_object_or_404(Article, id=article_id, author=user)
    article.delete()
    articles = Article.objects.filter(author=user, status='draft')
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def likeDislikeArticle(request):
    articleID = request.query_params.get('articleID')
    article = get_object_or_404(Article, id=articleID)
    if article.likes.filter(id=request.user.id).exists():
        article.likes.remove(request.user.id)
        article.save()
        return Response({'likesCount': len(article.likes.all()), 'status': 'disliked'})
    else:
       article.likes.add(request.user.id)
       article.save()
       return Response({'likesCount': len(article.likes.all()), 'status': 'liked'})



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def bookmark_article(request):
    """ Make an article bookmarked/un-bookmarked """
    articleID = request.query_params.get('articleID')
    article = get_object_or_404(Article, id=articleID)
    print(article.bookmarks.all())
    if request.user in article.bookmarks.all():
        article.bookmarks.remove(request.user)
        print('exist, and removed')
        article.save()
        return Response('un-bookmarked')
    else:
        article.bookmarks.add(request.user)
        print('un-exist, adn added')
        article.save()
        return Response('bookmarked')
    

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
    article_id = int(request.query_params.get('articleID'))
    print(f"Article ID: {article_id}")
    article = get_object_or_404(Article, id=article_id)
    serializer = CreateCommentSerializer(data={
        'content': request.data.get('content'),
        'author': request.user.id,
        'article': article.id,  # Assign the article's primary key to the field
    })
    print(serializer)
    if serializer.is_valid():
        serializer.save()
        comments = Comment.objects.filter(article=article_id)
        comments_serializer = CommentSerializer(comments, many=True)
        return Response(comments_serializer.data)
    return Response(serializer.errors)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_comment(request):
    # try:
    comment_id = int(request.query_params.get('commentID'))
    comment = get_object_or_404(Comment, id=comment_id)
    article_id = comment.article.id
    print(request.data)
    serializer = CommentSerializer(instance=comment, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        comments = Comment.objects.filter(article=article_id)
        comments_serializer = CommentSerializer(comments, many=True)
        return Response(comments_serializer.data)
    print(serializer.errors)
    return Response(serializer.errors)
    # except:
    #     return Response('serializer.errors')
    return Response()


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_comment(request):
    print(type(request.query_params.get('commentID')))
    # try:
    comment_id = int(request.query_params.get('commentID'))
    comment = get_object_or_404(Comment, id=comment_id)
    article_id = comment.article.id
    comment.delete()
    comments = Comment.objects.filter(article=article_id)
    serializer = CommentSerializer(comments, many=True)
    # if serializer.is_valid():
    return Response(serializer.data)
    print(serializer.errors)
    return Response(serializer.errors)
    # except:
    #     return Response('serializer.errors')



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def bookmarked_articles_list(request):
    """Returning the list of all bookmarked articles of the current logged user"""
    user = request.user
    bookmarked_articles = user.bookmarks.all()
    serializer = ArticleSerializer(bookmarked_articles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def drafted_articles_list(request, user):
	""" Returning the list of all drafts articles of the current logged user """
	return Response()
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def drafted_articles_list(request):
    user = request.user
    drafted_articles = Article.objects.filter(author=user, status='draft')
    serializer = ArticleSerializer(drafted_articles, many=True)
    return Response(serializer.data)


# Tags
def tag_articles_list(request):
	""" Listing all Tag Articles """
	return Response()




# Other functions to implement --> - User feed base on 3 catirories: recent/folled tags/....
# Anynomous User