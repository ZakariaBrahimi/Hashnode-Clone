from django.db import models
from django.conf import settings
from django.utils.text import slugify





class Article(models.Model):
	article_options = (('draft', 'Draft'), ('published', 'Published'))
	author     = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE) # on_delete=models.CASCADE --> if the user deleted, then delete the article
	likes      = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='likes', blank=True) # by default 0
	bookmarks  = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='bookmarks', blank=True) # by default 0
	status     = models.CharField(max_length=10, choices=article_options, default='draft') # To achieve drafts functionality
	content    = models.TextField()
	subtitle   = models.CharField(max_length=250, blank=True)
	title      = models.CharField(max_length=250)
	cover      = models.ImageField(upload_to="media/images/articles_covers/") # , default='images/articles_covers/default.jpg'
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	slug = models.SlugField(max_length=250, blank=True, null=False)

	def __str__(self):
		return self.title

	def save(self, *args, **kwargs):
		self.slug = slugify(self.title)
		super(Article, self).save(*args, **kwargs) 



class Comment(models.Model):
	content = models.TextField()
	author  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
	article = models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
	created_date = models.DateTimeField(auto_now_add=True) # was could updated_at field later
	def __str__(self):
		return f'Comment by {self.author}'


class Tag(models.Model):
	#TODO: User can follow any tag
	tag_name = models.CharField(max_length=50)
	articles  = models.ManyToManyField(Article, related_name='articles')
		# one article has one/many tags
		# one tag is on one/many articles

	def __str__(self):
		return self.tag_name

# Through Models
# class Like(models.Model):
# 	user    = models.ForiegnKeyField(settings.AUTH_USER_MODEL)
# 	article = models.ForiegnKeyField(Article)		

# class Bookmark(models.Model):
# 	user    = models.ForiegnKeyField(settings.AUTH_USER_MODEL)
# 	article = models.ForiegnKeyField(Article)

# class Follow(models.Model):
# 	user         = models.ForiegnKeyField(settings.AUTH_USER_MODEL)
# 	following_to = models.ForiegnKeyField(settings.AUTH_USER_MODEL)

# class Tag(models.Model):
# 	tag = models.ForiegnKeyField(Tag)
# 	article   = models.ForiegnKeyField(article)

# Special Through Model


"""
class User(AbstractUser):
    followers = models.ManyToManyField('self', symmetrical=False, 
                blank=True)

    def count_followers(self):
        return self.followers.count()
    
    def count_following(self):
        return User.objects.filter(followers=self).count()
# Taked from --> https://stackoverflow.com/questions/58794639/how-to-make-follower-following-system-with-django-model
"""