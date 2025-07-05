// File: app/components/Footer.js (or Footer.jsx)
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center p-4 border-t border-gray-300 bg-white text-gray-800 my-10">
            <div className="flex justify-around items-center w-full max-w-6xl flex-wrap gap-4">
                <Image src="/logo.png" alt="logo" width={100} height={100} className="w-30 h-auto" />

                <div className="flex flex-row gap-4 text-sm">
                    <Link href="/" className="hover:underline">Free PDF Tools</Link>
                    <Link href="/" className="hover:underline">Our Story</Link>
                    <Link href="/" className="hover:underline">Register Free</Link>
                </div>
            </div>

            <hr className="w-full my-4 border-gray-300" />

            <p className="text-xs text-gray-500 text-center">
                © {new Date().getFullYear()} iloveminiPDF. All rights reserved.
            </p>
        </footer>

    );
}
