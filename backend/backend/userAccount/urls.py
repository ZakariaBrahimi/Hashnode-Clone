from django.urls import path
from .views import GoogleLogin

app_name = 'userAccount'

urlpatterns = [
	path('social_auth/google/', GoogleLogin.as_view(), name='google_login')
]