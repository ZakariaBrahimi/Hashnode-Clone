from .base import *

DEBUG = True

ALLOWED_HOSTS = []

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-m80*pz_k%f=9mzo1p#k3$$xz9e6_9i(=iwlr0qmz2n8021bjf6'

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
