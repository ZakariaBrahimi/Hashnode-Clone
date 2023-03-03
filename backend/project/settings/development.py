from .base import *

DEBUG = True

ALLOWED_HOSTS = []

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure--$^@(#(v#do1&0m-xu=tm38$@bw$!27wffrj_mzpgx%if+2658'

# Application definition
INSTALLED_APPS += []

# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Email Configurations
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
