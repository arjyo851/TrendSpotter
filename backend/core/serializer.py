from rest_framework.serializers import ModelSerializer, ValidationError, FileField 
from .models import File


class FileSerializer(ModelSerializer):
    file = FileField()

    class Meta:
        model = File
        fields = [
            "file"
        ]

    def validate(self, data):
        file = data.get('file')
        if file.size > 1024 * 1024 * 2: # 2 MB
            raise ValidationError("File size should not exceed 2 MB")
        return data

    def create(self, validated_data):
        self.is_valid(raise_exception=true)
        file = File.objects.create(**validated_data) # create a file object
        return file
