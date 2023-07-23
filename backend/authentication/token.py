from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()


def create_jwt_pair_for_user(user: User): # takes user object and generates a access and refresh token
    refresh = RefreshToken.for_user(user) # creates a refresh token for the user
    refresh["email"] = user.email # adds the email to the refresh token
    tokens = {"access": str(refresh.access_token), "refresh": str(refresh)} # creates a dictionary with the access and refresh token
    return tokens

# The access token is used to authenticate and authorize the user for protected API endpoints
# The refresh token is used to obtain a new access token when the current access token expires