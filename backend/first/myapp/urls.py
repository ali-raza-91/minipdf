from django.urls import path
from .views import upload_and_compress_pdf, download_pdf

urlpatterns = [
    path("api/upload-compress/", upload_and_compress_pdf),
    path('download/<str:filename>/', download_pdf), 
    ]
