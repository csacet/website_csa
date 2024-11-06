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








import Footer from "../ui/Footer";

export default function Landing() {
  return (
    <div>
      <Navbar />
      <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col bg-[#F4F4F4] px-[4.875rem] py-[3.3125rem] rounded-[1.25rem] items-center">
  {/* Full-width image at the top */}
  <Image
    src={landingImg}
    alt="Department of Computer Science"
    className="w-full h-auto rounded-lg mb-[2rem]"
  />

  {/* Centered text content below the image */}
  <div className="flex flex-col text-center max-w-6xl">
  <div className="font-normal text-xl mt-[2.5rem]">
  Relive the excitement of Dotslash, the annual extravaganza from the Computer Science & Engineering Department at the College of Engineering, Trivandrum! Explore the workshops, competitions, and project exhibitions that showcased student innovation and technology. Dotslash has left a legacy of fostering continuous learning and skill development in the computer science community.
  
  <p className="leading-relaxed mt-4">Visit <strong>Dotslash</strong> for more</p>
</div>

  </div>
</div>


      <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-row bg-[#F4F4F4] px-[4.875rem] py-[3.3125rem] rounded-[1.25rem]">
      <Image
  src={landingImg1}
  alt="Department of Computer Science"
  className="w-1/2 h-auto rounded-lg" 
/>

        <div className="flex flex-col my-auto ml-[6.25rem]">
          <div className="font-bold text-4xl">
          Dotslash 2023-24
          </div>
          <div className="font-normal text-xl mt-[2.5rem]">
          Dotslash, the annual tech fest by the Computer Science and Engineering Department at College of Engineering, Trivandrum, kicked off with Professor Balu John unveiling the event logo. Gokul G Menon highlighted its significance, promising workshops and competitions to nurture innovation. Dotslash provided a platform for students to exhibit talents and engage in collaborative learning in computer science and engineering.
          </div>
        </div>
      </div>

      <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-row bg-[#F4F4F4] px-[4.875rem] py-[3.3125rem] rounded-[1.25rem]">
        <div className="flex flex-col my-auto mr-[4.0625rem]">
          <div className="font-normal text-xl mt-[2.5rem]">
          Dot Slash, the techno-cultural fest of College of Engineering Trivandrum's Department of Computer Science and Engineering, returned after 4 years with Dot Slash 23 on December 8th-9th, 2023. Inaugurated by Dr. Savier J S, the event featured talk sessions by startup leaders, workshops, games, and 'Dot Slash for Juniors' aimed at introducing coding to school students. The fest concluded with "Dot Night" and Day 2 included workshops, competitions, and Frost Code hackathon, reviving the department's spirit and igniting student interest in technology.
          </div>
        </div>
        <Image
  src={landingImg2}
  alt="Department of Computer Science"
  className="w-1/2 h-auto rounded-lg" 
/>
      </div>

      {/* Updated Image Grid with 7 images in 3 rows */}
      <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col space-y-4 ">
        <div className="font-bold text-5xl  text-center">Gallery</div>
        {/* First Row */}
        <div className="grid grid-cols-2 gap-2 ">
          <Image
            src={landingImg3}
            alt="Department of Computer Science"
            className="object-cover w-full  h-[412px] rounded-md"
          />
          <Image
            src={landingImg4}
            alt="Department of Computer Science"
            className="object-cover w-full h-[412px] rounded-md"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-2 ">
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
        <div className="grid grid-cols-2 gap-2">
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
