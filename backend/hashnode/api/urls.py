from django.urls import path
from . import views


urlpatterns = [
	# Project Scop
	#path('v1', include(app.api.urls))
	# API Scop
	path('users/<int:pk>/', views.user_profile),
	path('profile-edit', views.edit_user_profile),
	path('user-delete', views.user_delete),

	path('articles/recent', views.recentArticles),	
	path('articles/<int:article_id>/', views.article_details),
	path('create/article', views.create_article),
	path('create-draft/article', views.save_as_draft),
	path('edit/<str:slug>', views.edit_article),
	path('article/delete/<int:article_id>', views.delete_article),
	path('article/like-or-dislike/<int:article_id>', views.likeDislikeArticle),
	path('add-or-remove-bookmark', views.bookmark_article),
	path('add-or-remove-draft', views.draft_article),
	path('add-comment', views.create_comment),
	path('edit-comment', views.edit_comment),
	path('delete-comment', views.delete_comment),
	path('bookmarked-articles-list', views.bookmarked_articles_list),
	path('drafted-articles-list', views.drafted_articles_list),
	path('tag-articles-list', views.tag_articles_list),
]