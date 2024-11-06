import Navbar from '../ui/navbar';
import "../app/globals.css";
import Image from 'next/image';
import sampleDepartmentImage from '../app/assets/images/sampleDepartmentImage.svg';
import landingImg1 from '../app/assets/images/landingImg1.svg';
import landingImg2 from '../app/assets/images/landingImg2.svg';
import Footer from '../ui/Footer';
import { useState, useEffect } from 'react';

export default function Landing() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [sampleDepartmentImage, landingImg1];

    useEffect(() => {
        const imageSwitchInterval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(imageSwitchInterval);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <Navbar />
            <div className="relative mt-[1.125rem] mx-[2.03125rem] h-[400px] text-white">
                <div className=" rounded-[1.25rem] overflow-hidden">
                    <Image
                        src={images[currentImage]}
                        alt="CS Department"
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <h1 className="text-4xl md:text-6xl font-secondary">CS ASSOCIATION</h1>
                    <p className="text-lg md:text-2xl mt-1 md:mt-2">Department of Computer Science</p>
                </div>
                <div className="absolute bottom-10 left-5">
                    <button className="border border-white rounded-lg px-8 py-3 text-lg">
                        Contact Us
                    </button>
                </div>
                <div className="absolute bottom-5 right-9 text-lg">
                    College of Engineering Trivandrum
                </div>
            </div>

            <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col md:flex-row bg-[#F4F4F4] px-[2rem] md:px-[4.875rem] py-[2rem] md:py-[3.3125rem] rounded-[1.25rem] space-y-4 md:space-x-6">
                <Image src={landingImg1} alt="Department of Computer Science" className="rounded-md w-full" />
                <div className="flex flex-col my-auto ml-[6.25rem]">
                    <h2 className="font-bold text-5xl">Department of Computer Science</h2>
                    <p className="font-normal text-xl mt-[2.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col md:flex-row bg-[#F4F4F4] px-[2rem] md:px-[4.875rem] py-[2rem] md:py-[3.3125rem] rounded-[1.25rem] space-y-4 md:space-x-6">
                <div className="flex flex-col my-auto mr-[4.0625rem]">
                    <h2 className="font-bold text-5xl">College Of Engineering Trivandrum</h2>
                    <p className="font-normal text-xl mt-[2.5rem]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <Image src={landingImg2} alt="Department of Computer Science" className="rounded-md" />
            </div>

            <div className="flex flex-col my-[1.875rem] items-center justify-center mx-[2.03125rem] bg-[#2C2C2C]  rounded-lg shadow-lg px-min">
                <div className='px-[2.6875rem]'>
                <h2 className="text-5xl font-bold text-white mb-4 mt-[2.625rem]">Do you have any queries?</h2>
                <form className="flex w-full mb-[4.625rem] tems-center  mx-auto">
                    <input
                        type="text"
                        placeholder="Write here..."
                        className="px-4 py-2 mx-auto text-[#6A6A6A] rounded-[0.625rem] bg-[#424242] mr-4 w-[27.6875rem] focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="px-[2.1875rem] py-[0.625rem] font-medium text-white bg-transparent border border-white rounded-[0.625rem] hover:bg-white hover:text-gray-800 transition duration-200"
                    >
                        Send
                    </button>
                </form>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}
