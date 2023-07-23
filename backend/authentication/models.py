from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

# Create your models here.
class ColorManager(BaseUserManager):
    """
    password management and other authentication-related functionalities.

    """
    def create_user(self, email, password, **kwargs):
        if not email:
            raise ValueError('Email is Required')
        if not password:
            raise ValueError('Password is Required')
        email = self.normalize_email(email=email) # converts the email to lowercase
        user = self.model(
            email=email,
            **kwargs
        ) # creates a user object
        user.set_password(password) # sets the password
        user.save()
        return user

    def create_superuser(self, email, password, **kwargs):
        kwargs.setdefault("is_staff", True)
        kwargs.setdefault("is_superuser", True)
        return self.create_user(email=email, password=password, **kwargs)
    
class ColorUser(AbstractUser):
    """
    Custom User Model
    which has email as the unique identifier
    username
    registration_date
    registration_time
    """
    email = models.CharField(max_length=80, unique=True)
    username = models.CharField(max_length=45, unique=True)
    registration_date = models.DateField(auto_now=True)
    registration_time = models.TimeField(null=True)

    objects = ColorManager() # creates a manager for the model

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self) -> str:
        return super().username