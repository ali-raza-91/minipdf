import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cardsection from "./components/Cardsection";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
    <div className="bg-gray-100">
    <Navbar />
    <Hero />
    <Cardsection className='p-10 bg-gray-800 '/> 
    <Contact />
    <Footer />
    </div>
    </>
  );
}
