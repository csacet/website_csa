import Navbar from "@/ui/navbar";
import Footer from "@/ui/Footer";
import "../app/globals.css";
import ImageCarousel from "@/ui/ImageCarousel";

// Import images
import nalasha from "../app/assets/images/nalaasha.jpg";
import ibm1 from "../app/assets/images/ibm1.jpg";
import ibm2 from "../app/assets/images/ibm2.jpg";
import cynlr from "../app/assets/images/cynlr.jpg";

// Images array
const placements_2025 = [nalasha, ibm1, ibm2, cynlr];

export default function Placements() {
    return (
    <div className="font-primary py-5 bg-[#413e3e] ">

        <Navbar />
        <div className="text-white pt-20 pb-7 flex flex-col text-lg items-center justify-center ">
        <h2  className="  text-lg md:text-xl  xl:text-2xl pt-3 rounded-lg">
            Visit <a href="https://infrequent-energy-671.notion.site/Seniors-Success-Stories-A-Journey-of-Inspiration-05e8903b1f2e4de085de04056c1ed58a" className="underline font-primary font-bold">Senior's stories </a> for more ...
        </h2>
         
        </div>

        <div className="w-full sm:px-4 lg:px-20 mb-7">
            <ImageCarousel images={placements_2025} />
        </div>
   
        <Footer />
    </div>
  );
}
