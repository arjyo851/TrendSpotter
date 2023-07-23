from django.db import models


class File(models.Model):
    """
    Model for file upload
    file_id: primary key
    file: file to be uploaded
    uploaded_at: time of upload
    """
    file_id = models.AutoField(primary_key=True)
    file = models.FileField(blank=False, null=False)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file.name
