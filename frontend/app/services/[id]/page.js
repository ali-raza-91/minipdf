'use client';

import { use } from 'react';
import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import Compress from '@/app/compress/page';
// 🔹 Tool Component: Merge PDF
const MergePDFTool = ({pdfFiles,setPdfFiles,handleFileChange,handleMerge,handleDownload,message,}) => (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
        <p className="text-gray-600">Select two or more PDF files to merge them into one.</p>

        <input
            type="file"
            accept="application/pdf"
            multiple
            onChange={handleFileChange}
            className="block w-full mt-4 text-sm"
        />

        <div className="flex justify-center gap-4 mt-4">
            <button
                onClick={handleMerge}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition duration-300"
            >
                Merge PDF
            </button>

            <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-300"
            >
                Download PDF
            </button>
        </div>

        {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
);

const CompressPDFTool = () => {
    return (
        <Compress />
    )
}
// 🔹 Tool Component: Compress PDF
// export default function UploadPage() {
//     const [file, setFile] = useState(null)
//     const [loading, setLoading] = useState(false)

//     const handleUpload = async () => {
//         if (!file) {
//             alert("Please select a PDF file first.")
//             return
//         }

//         setLoading(true)
//         const formData = new FormData()
//         formData.append('pdf', file)

//         try {
//             const res = await fetch('http://127.0.0.1:8000/api/upload-compress/', {
//                 method: 'POST',
//                 body: formData,
//             })

//             if (!res.ok) {
//                 throw new Error('Compression failed')
//             }

//             // Convert response to Blob
//             const blob = await res.blob()

//             // Create download link
//             const url = window.URL.createObjectURL(blob)
//             const a = document.createElement('a')
//             a.href = url
//             a.download = 'compressed.pdf'
//             document.body.appendChild(a)
//             a.click()
//             a.remove()
//             window.URL.revokeObjectURL(url)

//         } catch (error) {
//             alert('Upload or compression failed!')
//             console.error(error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div className="p-5">
//             <input
//                 type="file"
//                 accept="application/pdf"
//                 onChange={(e) => setFile(e.target.files[0])}
//                 className="mb-3"
//             />
//             <button
//                 onClick={handleUpload}
//                 disabled={loading}
//                 className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//             >
//                 {loading ? 'Compressing...' : 'Upload & Compress'}
//             </button>
//         </div>
//     )
// }


// 🔹 Main Page Component
export default function ServicePage({ params }) {
    const { id } = use(params);

    const [pdfFiles, setPdfFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [mergedPdfBlob, setMergedPdfBlob] = useState(null);

    const handleFileChange = (e) => {
        setPdfFiles(Array.from(e.target.files));
        setMessage('');
        setMergedPdfBlob(null);
    };

    const handleMerge = async () => {
        if (pdfFiles.length < 2) {
            setMessage('Please select at least two PDF files to merge.');
            return;
        }

        const mergedPdf = await PDFDocument.create();

        for (let file of pdfFiles) {
            const bytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);
            const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            copiedPages.forEach((page) => mergedPdf.addPage(page));
        }

        const mergedPdfBytes = await mergedPdf.save();
        const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
        setMergedPdfBlob(blob);

        setMessage('PDF merged successfully. Click "Download PDF" to save the file.');
    };

    const handleDownload = () => {
        if (!mergedPdfBlob) {
            setMessage('No merged PDF to download. Please merge first.');
            return;
        }

        const url = URL.createObjectURL(mergedPdfBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'merged.pdf';
        link.click();
        URL.revokeObjectURL(url);
    };

    // 🔹 Tool hash map (can grow easily)
    const toolHandlers = {
        '1': MergePDFTool,
        // '2': SplitPDFTool,
        '3': CompressPDFTool,
        // Add more tools here...
    };

    const ToolComponent = toolHandlers[id];

    return ToolComponent ? (
        <ToolComponent
            pdfFiles={pdfFiles}
            setPdfFiles={setPdfFiles}
            handleFileChange={handleFileChange}
            handleMerge={handleMerge}
            handleDownload={handleDownload}
            message={message}
        />
    ) : (
        <div className="text-center mt-10 text-lg text-red-600">
            Invalid Service ID
        </div>
    );
}
