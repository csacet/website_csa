import Navbar from "../ui/navbar";
import "../app/globals.css";
import Image from "next/image";
// import sampleDepartmentImage from "../app/assets/images/sampleDepartmentImage.svg";
import landingImg1 from "../app/assets/images/dot1.jpeg";
import landingImg2 from "../app/assets/images/dot2.jpeg";
import landingImg3 from "../app/assets/images/dot3.jpeg";
import landingImg4 from "../app/assets/images/dot4.jpeg";
import landingImg5 from "../app/assets/images/dot5.jpeg";
import landingImg from "../app/assets/images/Group 17.png";

import landingImg6 from "../app/assets/images/dot6.jpeg";
import landingImg7 from "../app/assets/images/dot7.jpeg";
import landingImg8 from "../app/assets/images/dot8.jpeg";






import { useState, useEffect } from "react";

import Footer from "../ui/Footer";
type landingPageContent = {
  dotslash_one: string;
  dotslash_two: string;
  dotslash_three: string;
};

export default function Dotslash() {
  const [data, setData] = useState<landingPageContent>({
    dotslash_one: "",
    dotslash_two: "",
    dotslash_three: "",
  });

  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch("/webContent.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.landing))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
   
      <div className="font-primary">
      <Navbar />
      <div className="font-primary  md:mx-[2.03125rem] mt-[1.875rem] flex flex-col px-1  md:px-[4.875rem] md:py-[3.3125rem] rounded-[1.25rem] items-center pt-20 lg:pt-28 xl:pt-32 ">
  {/* Full-width image at the top */}
  <Image
    src={landingImg}
    alt="Department of Computer Science"
    className="w-full h-auto rounded-lg mb-[2rem]"
  />

  {/* Centered text content below the image */}
  <div className="flex flex-col text-center max-w-6xl">
  <div className="text-sm sm:text-lg  text-justify px-5 md:text-xl mt-[2.5rem] ">
  {data.dotslash_one}
  
  <p className="leading-relaxed mt-4 text-center">
  Visit <a href="https://www.dotslashcet.tech/" className="underline font-primary">Dotslash</a> for more
</p>

</div>

  </div>
</div>

<div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col lg:flex-row sm:px-7 md:px-15 py-[2rem] md:py-[3.3125rem] rounded-[1.25rem] space-y-4 md:space-x-6 items-center">
            <h2  className="block lg:hidden font-bold  text-2xl sm:text-4xl  pb-5 ">Dotslash 2023-24 </h2>
                <Image src={landingImg1} alt="Department of Computer Science" className="rounded-md w-full lg:w-1/2 " />
                <div className="flex flex-col px-0 xl:px-20 items-center md:items-start">
                    <h2  className="hidden lg:block font-bold  text-2xl md:text-4xl  xl:text-5xl">Dotslash 2023-24 </h2>
                    <p className=" sm:px-5 md:px-0 font-normal md:text-lg xl:text-xl mt-[2.5rem]">
                    {data.dotslash_two}
                    </p>
                </div>
            </div>
            <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col lg:flex-row  sm:px-7 md:px-15 py-[2rem] md:py-[3.3125rem] rounded-[1.25rem] space-y-4 md:space-x-6 items-center">
            
                <Image src={landingImg2} alt="College of Engineering Trivandrum" className="lg:hidden rounded-md w-full lg:w-1/2 " />
                <div className="flex flex-col md:px-0 xl:px-20 items-center md:items-start">
                    
                    <p className="sm:px-5 md:px-0 font-normal md:text-lg xl:text-xl mt-[2.5rem]">
                    {data.dotslash_three}
                    </p>
                </div>
                <Image src={landingImg2} alt="College of Engineering Trivandrum" className="hidden lg:block rounded-md w-full lg:w-1/2 " />
            </div>
            

      {/* Updated Image Grid with 7 images in 3 rows */}
<div className="mx-[2.03125rem] my-[2.875rem] flex flex-col space-y-4">
  <div className="font-bold text-5xl mb-3 text-center">Gallery</div>

  {/* First Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <Image
      src={landingImg3}
      alt="Department of Computer Science"
      className="object-cover w-full h-[412px] rounded-md"
    />
    <Image
      src={landingImg4}
      alt="Department of Computer Science"
      className="object-cover w-full h-[412px] rounded-md"
    />
  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    <Image
      src={landingImg5}
      alt="Department of Computer Science"
      className="object-cover w-full h-[412px] rounded-md"
    />
    <Image
      src={landingImg2}
      alt="Department of Computer Science"
      className="object-cover w-full h-[412px] rounded-md"
    />
    <Image
      src={landingImg6}
      alt="Department of Computer Science"
      className="object-cover w-full h-[412px] rounded-md"
    />
  </div>

  {/* Third Row */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <Image
      src={landingImg7}
      alt="Department of Computer Science"
      className="object-cover w-full h-[412px] rounded-md"
    />
    <Image
      src={landingImg8}
      alt="Department of Computer Science"
      className="object-cover w-full h-[412px] rounded-md"
    />
  </div>
</div>


      <Footer />
    </div>
  );
}
