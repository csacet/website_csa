import Navbar from "../ui/navbar";
import "../app/globals.css";
import Image from "next/image";



import { useState, useEffect } from "react";

import Footer from "../ui/Footer";


export default function Events() {
  

//   useEffect(() => {
//     // Fetch JSON data from the public folder
//     fetch("/webContent.json")
//       .then((response) => response.json())
//       .then((jsonData) => setData(jsonData.landing))
//       .catch((error) => console.error("Error fetching JSON:", error));
//   }, []);

  return (
   
      <div className="font-primary">
      <Navbar />
      <div className="font-primary  md:mx-[2.03125rem] mt-[1.875rem] flex flex-col px-1  md:px-[4.875rem] md:py-[3.3125rem] rounded-[1.25rem] items-center pt-20 lg:pt-28 xl:pt-32 ">
      <h2  className=" text-2xl sm:text-4xl  pb-5 font-secondary">Events </h2>
      <div className="border-b-2 border-black w-60 mb-16"></div>
  <h2  className=" text-xl sm:text-3xl  pb-5 font-secondary">D-Solve </h2>
  <h2  className=" text-xl sm:text-3xl  pb-5 font-secondary">Orientation</h2>
  <h2  className=" text-xl sm:text-3xl font-secondary  pb-5 ">Onam</h2>
</div>


      <Footer />
    </div>
  );
}
