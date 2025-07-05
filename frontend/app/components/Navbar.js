import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
    return (
        <nav className="bg-white flex justify-between items-center p-4 sm:px-6">
            <Image src="/logo.png" alt="logo" className="w-auto  h-auto" width={400} height={100} />

            {/* Links */}
            <div className="flex justify-between items-center gap-4">
               <input type="text" placeholder="Search tools" className="w-full py-[1px] px-2 outline-none border-2 border-green-800 rounded sm:py-1 md:w-80" />
                <button className=" hidden sm:block text-green-800 py-1 px-3 border-2 border-green-800 rounded ">Login</button>
                <button className="hidden sm:block bg-green-800 text-white py-1 px-2 border-2 border-green-800 rounded">Signup</button>
            </div>
        </nav>
    );
}
