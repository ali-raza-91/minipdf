'use client'
import { useState } from 'react'

export default function UploadPage() {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a PDF file first.")
            return
        }

        setLoading(true)
        const formData = new FormData()
        formData.append('pdf', file)

        try {
            const res = await fetch('http://127.0.0.1:8000/api/upload-compress/', {
                method: 'POST',
                body: formData,
            })

            if (!res.ok) {
                throw new Error('Compression failed')
            }

            // Convert response to Blob
            const blob = await res.blob()

            // Create download link
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = 'compressed.pdf'
            document.body.appendChild(a)
            a.click()
            a.remove()
            window.URL.revokeObjectURL(url)

        } catch (error) {
            alert('Upload or compression failed!')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-5">
            <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
                className="mb-3"
            />
            <button
                onClick={handleUpload}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
                {loading ? 'Compressing...' : 'Upload & Compress'}
            </button>
        </div>
    )
}
