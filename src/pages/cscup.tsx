import Navbar from "../ui/navbar";
import "../app/globals.css";
import Image from "next/image";
// import sampleDepartmentImage from "../app/assets/images/sampleDepartmentImage.svg";
import landingImg1 from "../app/assets/images/landingImg1.svg";
import landingImg2 from "../app/assets/images/landingImg2.svg";
import Footer from "../ui/Footer";

export default function cscup() {
  return (
    <div>
      <Navbar />

      <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-row bg-[#F4F4F4] px-[4.875rem] py-[3.3125rem] rounded-[1.25rem]">
        <Image
          src={landingImg1}
          alt="Department of Computer Science"
          className=""
        />
        <div className="flex flex-col my-auto ml-[6.25rem]">
          <div className="font-bold text-5xl">
            Department of Computer Science
          </div>
          <div className="font-normal text-xl mt-[2.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>

      <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-row bg-[#F4F4F4] px-[4.875rem] py-[3.3125rem] rounded-[1.25rem]">
        <div className="flex flex-col my-auto mr-[4.0625rem]">
          <div className="font-normal text-xl mt-[2.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <Image
          src={landingImg2}
          alt="Department of Computer Science"
          className=""
        />
      </div>

      {/* Updated Image Grid with 7 images in 3 rows */}
      <div className="mx-[2.03125rem] mt-[1.875rem] flex flex-col space-y-4 ">
        <div className="font-bold text-5xl  text-center">Gallery</div>
        {/* First Row */}
        <div className="grid grid-cols-2 gap-2 ">
          <Image
            src={landingImg1}
            alt="Department of Computer Science"
            className="object-cover w-full  h-[412px] rounded-md"
          />
          <Image
            src={landingImg1}
            alt="Department of Computer Science"
            className="object-cover w-full h-[412px] rounded-md"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-2 ">
          <Image
            src={landingImg1}
            alt="Department of Computer Science"
            className="object-cover w-full h-[412px] rounded-md"
          />
          <Image
            src={landingImg1}
            alt="Department of Computer Science"
            className="object-cover w-full h-[412px] rounded-md"
          />
          <Image
            src={landingImg1}
            alt="Department of Computer Science"
            className="object-cover w-full h-[412px] rounded-md"
          />
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-2 gap-2">
          <Image
            src={landingImg1}
            alt="Department of Computer Science"
            className="object-cover w-full h-[412px] rounded-md"
          />
          <Image
            src={landingImg1}
            alt="Department of Computer Science"
            className="object-cover w-full h-[412px] rounded-md"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
