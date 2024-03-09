from django.urls import re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
   openapi.Info(
      title="API Documentation",
      default_version='v1',
      description="""
        TrendSpotter is an online fashion recommendation system using ResNet50 and K-means clustering.
         that offers the capability to extract color information from images uploaded by users.
      """,
      contact=openapi.Contact(email="arjyo77@gmail.com"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny]
)

urlpatterns = [
   re_path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]