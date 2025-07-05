from django.views.decorators.csrf import csrf_exempt
from django.http import FileResponse, JsonResponse
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
import subprocess
import uuid


@csrf_exempt
def upload_and_compress_pdf(request):
    """
    Accepts a PDF upload, compresses it using Ghostscript, and immediately returns it for download.
    """
    if request.method == 'POST' and request.FILES.get('pdf'):
        uploaded_file = request.FILES['pdf']
        unique_name = str(uuid.uuid4())  # avoid overwrite
        input_dir = 'media/uploads'
        output_dir = 'media/compressed'

        input_path = os.path.join(input_dir, f'{unique_name}.pdf')
        output_path = os.path.join(output_dir, f'{unique_name}_compressed.pdf')

        os.makedirs(input_dir, exist_ok=True)
        os.makedirs(output_dir, exist_ok=True)

        # Save uploaded file
        default_storage.save(input_path, ContentFile(uploaded_file.read()))

        try:
            # Compress using Ghostscript
            command = [
                "C:\\Program Files\\gs\\gs10.05.1\\bin\\gswin64c.exe",
                "-sDEVICE=pdfwrite",
                "-dCompatibilityLevel=1.4",
                "-dPDFSETTINGS=/ebook",
                "-dNOPAUSE",
                "-dQUIET",
                "-dBATCH",
                f"-sOutputFile={output_path}",
                input_path
            ]
            subprocess.run(command, check=True)

            # Return the file directly as download
            return FileResponse(
                open(output_path, 'rb'),
                as_attachment=True,
                filename=f'{unique_name}_compressed.pdf'
            )

        except subprocess.CalledProcessError as e:
            return JsonResponse({"error": f"Compression failed: {str(e)}"}, status=500)

    return JsonResponse({"error": "No PDF file uploaded"}, status=400)



def download_pdf(request, filename):
    """
    Serves the compressed PDF as a file download.
    """
    file_path = os.path.join('media/compressed', filename)

    if os.path.exists(file_path):
        return FileResponse(open(file_path, 'rb'), as_attachment=True, filename=filename)
    else:
        return JsonResponse({'error': 'File not found'}, status=404)
