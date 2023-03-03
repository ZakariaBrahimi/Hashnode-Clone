from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.views.generic import TemplateView
import requests
from django.shortcuts import render, redirect


class AccountConfirmEmailTemplateView(TemplateView):
    template_name='verify_email.html'
    print('AccountConfirmEmailTemplateView')
    def get(self,request, *args, **kwargs):
        print(kwargs['key'])
        r = requests.post('http://127.0.0.1:8000/auth/registration/verify-email/', data={'key': kwargs['key']})
        return render(request, self.template_name, {})
    
class PasswordResetConfirmTemplateView(TemplateView):
    template_name='password_reset_confirm.html'
    def post(self,request, *args, **kwargs):
        r = requests.post('http://127.0.0.1:8000/auth/password/reset/confirm/', data={'uid': kwargs['uidb64'], 'token': kwargs['token'], 'new_password1':request.POST['password1'], 'new_password2':request.POST['password2']})
        #print(r.text)
        return redirect('http://127.0.0.1:3000/onboard')
    

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('userAccount.urls')),
    path('hashnode/api/', include('hashnode.api.urls')),
    
    # Optional - browsable API login and Logout functionalities
    path('api-auth', include('rest_framework.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
    #path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    #path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # Verify email 
    re_path(
        r'^account-confirm-email/(?P<key>[-:\w]+)/$', AccountConfirmEmailTemplateView.as_view()
        ,name='account_confirm_email',
    ),
    path('auth/password-reset/confirm/',
        TemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password-reset-confirm'),
    re_path(r'^password-reset/confirm/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,32})/$',
        PasswordResetConfirmTemplateView.as_view(template_name="password_reset_confirm.html"),
        name='password_reset_confirm'),
    ]




"""
browsable API login and Logout dubctionality
    - /api-auth/ --> login/ logout
/auth/:
    - password reset
    - password reset confirm
    - login
    - logout
    - user details
    - password change
    - token verify
    - token refresh

dj-rest-auth/registration/

"""

