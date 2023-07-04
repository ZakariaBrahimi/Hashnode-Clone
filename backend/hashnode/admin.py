from django.contrib import admin
from .models import Comment, Article, Tag

# Register your models here.


class CustomArticleAdmin(admin.ModelAdmin):
    # add_form = CustomUserCreationForm
    # form = CustomUserChangeForm
    model = Article
    list_display = ('title', 'author', 'status','created_at', 'updated_at', 'id', 'pk')
    # list_filter = ('first_name', 'last_name', 'email', 'is_staff', 'is_active',)
    
    fieldsets = (
        ('Required Fields', {'fields': ('author', 'title', 'status', 'content', 'cover')}),
        ('Optional Fields', {'fields': ('subtitle', 'likes', 'bookmarks')}),
    )
    # add_fieldsets = (
    #     (None, {
    #         'classes': ('wide',),
    #         'fields': ('first_name', 'last_name', 'email', 'password1', 'password2', 'is_staff', 'is_active', 'is_superuser')}
    #     ),
    # )
    # search_fields = ('email',)
    # ordering = ('email',)

from django.urls import reverse
from django.utils.html import format_html
from django.utils.http import urlencode

class CustomCommentAdmin(admin.ModelAdmin):
    model = Comment
    list_display = ('author', 'article_link', 'created_date',)
    def article_link(self, obj):
        url = (reverse("admin:hashnode_article_changelist")
        	+ "?"
            + urlencode({"comments__id": f"{obj.id}"})
        	)
        return format_html('<a href="{}">{}</a>', url, obj)


class CustomTagAdmin(admin.ModelAdmin):
    model = Tag
    list_display = ('tag_name',)



admin.site.register(Comment, CustomCommentAdmin)
admin.site.register(Article, CustomArticleAdmin)
admin.site.register(Tag, CustomTagAdmin)