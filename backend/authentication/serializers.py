from rest_framework.serializers import ModelSerializer, CharField, TimeField, DateField # imports the ModelSerializer, CharField, TimeField, DateField
from .models import ColorUser # imports the ColorUser model
from rest_framework.validators import ValidationError 
from rest_framework.authtoken.models import Token
from django.utils import timezone


class RegisterSerializer(ModelSerializer):
    email = CharField(max_length=100)
    username = CharField(max_length=45)
    password = CharField(min_length=8, write_only=True)
    registration_time = TimeField(required=False, read_only=True)
    first_name = CharField(required=False)
    last_name = CharField(required=False)

    class Meta:
        model = ColorUser
        fields = ["username", "email", "password", "registration_date",
                  "registration_time", "first_name", "last_name"]

    def validate(self, attrs): # validates the data
        email_exists = ColorUser.objects.filter(email=attrs["email"]) # checks if the email exists
        if email_exists:
            raise ValidationError("Email is already registered")
        return super().validate(attrs) # calls the validate method of the parent class returns the validated data

    def create(self, validated_data): # creates a user
        password = validated_data.pop("password") # removes the password from the validated data
        validated_data["registration_time"] = timezone.now().time()
        user = super().create(validated_data) # creates a user
        user.set_password(password) # sets the password
        user.save()
        Token.objects.create(user=user) # creates a token for the user
        return user


class LoginSerializer(ModelSerializer):
    email = CharField(max_length=100)
    first_name = CharField(read_only=True)
    last_name = CharField(read_only=True)
    registration_date = DateField(read_only=True)
    registration_time = TimeField(read_only=True)

    class Meta:
        model = ColorUser
        fields = ["email", "password", "first_name", "last_name", "registration_date", "registration_time"]

    def validate(self, attrs):
        email_exists = ColorUser.objects.filter(email=attrs["email"])
        if email_exists is None:
            raise ValidationError("Email does not exist")
        return super().validate(attrs)
