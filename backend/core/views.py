import os.path
import pickle
from rest_framework.generics import GenericAPIView
from rest_framework.parsers import MultiPartParser # for file upload

from .models import File # import File model
from .serializer import FileSerializer # import FileSerializer
from django.http import JsonResponse # for returning JSON response
from rest_framework import status # for returning status codes
from drf_yasg.utils import swagger_auto_schema # for swagger documentation
from rest_framework.permissions import IsAuthenticated      # for authentication
from core.utils.util import recc_images # for extracting colors
from pathlib import Path # for getting the path of the file

img_files_list = pickle.load(open("img_files.pkl", "rb"))

class FileUploadView(GenericAPIView):
    serializer_class = FileSerializer
    parser_classes = (MultiPartParser,)
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        tags=['upload'],
        operation_summary='Upload a file and predict images'
    )

    def post(self, request):  # for uploading file
        file = request.FILES.get('file')
        if not file:
            return JsonResponse({"error": "No file uploaded."}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            res = File.objects.create(file=file)  # create a file object
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        # colors = extract_colors(os.path.join(Path(__file__).resolve().parent.parent, 'media', res.file.name))
        try:
            img_indicess = recc_images(os.path.join(Path(__file__).resolve().parent.parent, 'media', res.file.name))
            print(img_indicess)
            recommended_images = [img_files_list[index] for index in img_indicess[0]]
            print(recommended_images)

            response_data = {
                'uploaded_image': res.name,
                'recommended_images': recommended_images,
            }
            return JsonResponse({
                "success": "true",
                "code": 200,
                "result": response_data
            }, status=status.HTTP_200_OK)
        except FileNotFoundError:
            return JsonResponse({"error": "File not found."}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
