import Navbar from "@/ui/navbar";
import Footer from "@/ui/Footer";
import "../app/globals.css";
import Image from "next/image";

// Import images
import s11 from "../app/assets/images/s1.jpeg";
import s12 from "../app/assets/images/s1b2.jpeg";
import s7 from "../app/assets/images/s7.jpeg";
import s8 from "../app/assets/images/s8toppers.jpg";

// Image data arrays
const images_semtop = [
    { src: s11, alt: "Semester 1 toppers batch 1" },
    { src: s12, alt: "Semester 1 toppers batch 2" },
    { src: s7, alt: "Semester 7 toppers" },
];
const images_top = [
    { src: s8, alt: "Semester 8 toppers" }
];

export default function Achievements() {
    return (
    <>
        <Navbar />
        <div className="bg-slate-400 py-32 flex flex-col items-center justify-center">
            <div className="font-secondary font-bold text-2xl sm:text-4xl pb-5 text-center">Achievements</div>
            {/* underline */}
            <div className="border-b-2 border-black w-60 mb-16"></div>

            <div className="font-primary font-bold text-xl sm:text-2xl pb-5 text-center">KTU Toppers</div>

            {/* Semester Toppers Section */}
            <div className="flex flex-wrap justify-center gap-4 w-full px-4 lg:px-20">
                {images_semtop.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full sm:w-1/2 lg:w-1/4 rounded-md"
                        width={500} 
                        height={300} 
                    />
                ))}
            </div>

            {/* Top Toppers Section */}
            <div className="flex flex-wrap justify-center gap-4 w-full px-4 lg:px-20 mt-8">
                {images_top.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full sm:w-1/2 lg:w-1/4 rounded-md"
                        width={500} 
                        height={300} 
                    />
                ))}
            </div>
        </div>
        <Footer />
    </>
  );
}
