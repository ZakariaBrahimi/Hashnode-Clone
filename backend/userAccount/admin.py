from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from django.contrib.auth import get_user_model


User = get_user_model()

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User
    list_display = ('email', 'fullname', 'is_staff', 'is_active', 'id',)
    list_filter = ('fullname', 'email', 'is_staff', 'is_active',)
    
    fieldsets = (
        ('User Information', {'fields': ('fullname', 'email', 'password', 'bio', 'profile_tagline', 'available_for', 'location', 'img')}),
        ('Social Accounts', {'fields': ('stackOverflow', 'facebook', 'linkedin', 'youtube', 'website', 'github', 'twitter', 'instagram',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('fullname', 'email', 'password1', 'password2', 'is_staff', 'is_active', 'is_superuser', 'img')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)


admin.site.register(User, CustomUserAdmin)