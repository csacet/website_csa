"use client";
import "../app/globals.css";
import Image from 'next/image';
import sampleDepartmentImage from '../app/assets/images/landingImg1.svg';
import landingImg1 from '../app/assets/images/landingImg2.svg';
import landingImg2 from '../app/assets/images/landingImg3.jpg';
import landingImg3 from "../app/assets/images/landingImg4.jpg";
import { useState, useEffect } from 'react';
import ImageCarousel from "@/ui/ImageCarousel";
type landingPageContent = {
    cet_overview: string;
    cse_overview: string;
  };
  
  export default function Landing() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [ sampleDepartmentImage];
    const imagesurl = [landingImg1, landingImg2, sampleDepartmentImage, landingImg3, landingImg1, landingImg2, sampleDepartmentImage, landingImg3];
    const [data, setData] = useState<landingPageContent>({
      cet_overview: "",
      cse_overview: "",
    });
  
    useEffect(() => {
      // Fetch JSON data from the public folder
      fetch("/webContent.json")
        .then((response) => response.json())
        .then((jsonData) => setData(jsonData.landing))
        .catch((error) => console.error("Error fetching JSON:", error));
    }, []);

    // useEffect(() => {
    //     const imageSwitchInterval = setInterval(() => {
    //     setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 2000);

    //     return () => clearInterval(imageSwitchInterval);
    // }, []);

    const submitQUery = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Query submitted!");
    };

    return (
        <div className="font-primary overflow-x-hidden pt-20 lg:pt-28 xl:pt-32 ">
            <div className="relative mt-[1.125rem] mx-[2.03125rem] h-[400px] md:h-[580px] text-white">
            <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 rounded-[1.25rem]"
    style={{
      backgroundImage: `url(${images[currentImage].src})`,
      transition: "background-image 0.5s ease-in-out"
    }}
  ></div>

  {/* Black Overlay with 56% opacity */}
  <div className="absolute inset-0 bg-black opacity-55 rounded-[1.25rem]"></div>
</div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
                <h1 className="text-3xl md:text-6xl font-secondary pt-7">CS ASSOCIATION</h1>
                <p className=" md:text-xl mt-1 md:mt-2">Department of Computer Science</p>
                </div>
                <div className="absolute bottom-14 left-5 md:bottom-10 md:left-5 z-10">
                <button className="border border-white rounded-lg px-8 py-3 text-sm md:text-lg">
                    Contact Us
                </button>
                </div>
                <div className="absolute bottom-5 left-5  md:bottom-5 md:right-9 md:left-auto z-10 text-sm md:text-lg">
                College of Engineering Trivandrum
                </div>
            </div>
            <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col lg:flex-row bg-[#F4F4F4] px-7 md:px-15 py-[2rem] md:py-[3.3125rem] rounded-[1.25rem] space-y-4 md:space-x-6 items-center">
            <h2  className="block lg:hidden font-bold  text-2xl sm:text-4xl  pb-5 ">Department of Computer Science </h2>
                <Image src={landingImg2} alt="Department of Computer Science" className="rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-full " />
                <div className="flex flex-col md:px-16 xl:px-20 items-center md:items-start">
                    <h2  className="hidden lg:block font-bold  text-2xl md:text-4xl  xl:text-5xl">Department of <br /> Computer Science</h2>
                    <p className="px-5 md:px-0 font-normal md:text-lg xl:text-xl mt-[2.5rem]">
                    {data.cse_overview}
                    </p>
                </div>
            </div>
            <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col lg:flex-row bg-[#F4F4F4]  md:px-15 py-[2rem] md:py-[3.3125rem] rounded-[1.25rem] space-y-4 md:space-x-6 items-center">
            <h2  className="block lg:hidden font-bold  text-2xl sm:text-4xl  pb-5 ">College of Engineering Trivandrum </h2>
                <Image src={landingImg3} alt="College of Engineering Trivandrum" className="lg:hidden rounded-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/2 px-3" />
                <div className="flex flex-col md:px-16 xl:px-20 items-center md:items-start">
                    <h2  className="hidden lg:block font-bold  text-2xl md:text-4xl  xl:text-5xl">College of Engineering Trivandrum</h2>
                    <p className="px-5 md:px-0 font-normal md:text-lg xl:text-xl mt-[2.5rem]">
                    {data.cet_overview}
                    </p>
                </div>
                <Image src={landingImg3} alt="College of Engineering Trivandrum" className="hidden lg:block rounded-md w-full md:w-2/3 lg:w-1/2 xl:w-1/2 px-3" />
            </div>
            
            <div className="flex flex-col my-[1.875rem] items-center justify-between">
            <h2  className="block font-bold  text-2xl sm:text-4xl  pb-5 ">  Latest </h2>
            <ImageCarousel images={imagesurl}/>
                
            </div>
            
            

            <div className="flex flex-col my-[1.875rem] items-center justify-between mx-[2.03125rem] bg-[#2C2C2C]  rounded-lg shadow-lg px-min">
                <div className='px-[2.6875rem]'>
                <div className="text-[1.35rem] md:text-[3rem] font-bold text-white mb-4 mt-[2.625rem]">Do you have any queries?</div>
                <form className="flex md:flex-row flex-col space-y-3 md:space-y-0 w-full mb-[4.625rem] items-center mx-auto" onSubmit={submitQUery}>
                    <input
                        type="text"
                        placeholder="Write here..."
                        className="px-4 py-2 mx-auto text-white placeholder:text-[#6A6A6A] rounded-[0.625rem] bg-[#424242]  md:mr-4 w-fit md:w-[27.6875rem] focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="px-[2.1875rem] py-[0.625rem] font-medium text-white bg-transparent border  border-white rounded-[0.625rem] hover:bg-white hover:text-gray-800 transition duration-300 text-[0.875rem] md:text-[1rem]"
                    >
                        Send
                    </button>
                </form>
                </div>
            </div>
        </div>
    );
}
