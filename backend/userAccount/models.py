from django.contrib.auth.models import PermissionsMixin, AbstractUser, AbstractBaseUser, BaseUserManager
from django.db import models
from django.conf import settings

"""
- It's strongly recommended to use a custom user model before starting the project
- There main two(there others also) methods to make a custom user model:
    1. AbstractUser: 
        - if you are happy with the authentication/ fields provided by Django,
        - and you just wand to add extra fields
    2. AbstractBaseUser: 
        - If you want the full control of the user model include user creating, create suer users, and so on...
        - 

Note that the AbstractUser model inherits from the AbstractBaseUser model, so if you want a custom user model, but you want a base to start from, go with the AbstractUser model.

On the other hand, sub-classing the AbstractBaseUser model will give you full control over the user model, but you'll have to start from scratch (redefine username, email, is_staff, is_active, is_superuser ... fields, and so on). Generally, you don't need that much freedom.

In this tutorial, we will see how to make our user model inherit from the AbstractUser model to make the email address the unique identifier instead of the username.




If you’re starting a new project, it’s highly recommended to set up a custom user model, even if the default User model is sufficient for you
USERNAME_FIELD: - A string describing the name of the field on the user model that is used as the unique identifier
                - This will usually be a username of some kind, but it can also be an email address, or any other unique identifier
                - The field must be unique (i.e., have unique=True set in its definition)
REQUIRED_FIELD: - A list of the field names that will be prompted for when creating a user via the createsuperuser management command
                - has no effect in other parts of Django, like creating a user in the admin
                - must contain all required fields on your user model, but should not contain the USERNAME_FIELD or password as these fields will always be prompted for

CustomUserManager:
                1. create_user(username_field, password=None, **other_fields)
                    - The prototype of create_user() should accept the username field, plus all required fields as arguments. For example, if your user model uses email as the username field, and has date_of_birth as a required field, then create_user should be defined as:

                2. create_superuser(username_field, password=None, **other_fields)
                    - The prototype of create_superuser() should accept the username field, plus all required fields as arguments. For example, if your user model uses email as the username field, and has date_of_birth as a required field, then create_superuser should be defined as:
AbstractUser vs AbstractBaseUser
The default User model in Django uses a username to uniquely identify a user during authentication. If you'd rather use an email address, you'll need to create a custom User model by either subclassing AbstractUser or AbstractBaseUser.

Options:

AbstractUser: Use this option if you are happy with the existing fields on the User model and just want to remove the username field.
AbstractBaseUser: Use this option if you want to start from scratch by creating your own, completely new User model.
"""

class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError(_('The Email must be set'))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField("email address", unique=True)
    username = None
    first_name = None
    last_name  = None
    fullname  = models.CharField(max_length=100)
    bio = models.TextField(blank=True)
    profile_tagline = models.CharField(max_length=100, blank=True)
    follow = models.ManyToManyField(settings.AUTH_USER_MODEL, symmetrical=False, related_name='following')
    available_for = models.TextField(blank=True, max_length=140)
    location = models.CharField(blank=True, max_length=50)
    stackOverflow = models.URLField(blank=True)
    facebook = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    youtube = models.URLField(blank=True)
    website = models.URLField(blank=True)
    github = models.URLField(blank=True)
    twitter = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    img = models.ImageField(upload_to="images/users_images/", blank=True) # , default='images/articles_covers/default.jpg'


    
    # make the user log in with the email
    USERNAME_FIELD = "email"
    # Required fields when create a super user using createsuperuser management command
    # Has no effect in other parts of Django, like creating a user in the admin
    # Should not contain the USERNAME_FIELD or password(it's contained by default)
    REQUIRED_FIELDS = ['first_name', 'last_name'] 
    
    objects = CustomUserManager()
    
    def __str__(self):
        if self.first_name:
            return self.first_name + ' ' + self.last_name
        return self.email

# error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')