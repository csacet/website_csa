import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[]; // Prop type: Array of image URLs (strings)
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Handle going to the selected slide
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(slideInterval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full max-w-xl mx-auto px-16">
      {/* Carousel Images Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="flex-shrink-0 w-full" key={index}>
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-cover" // Further reduced height to 40
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation (Responsive with 3 full, 2 half, 1 smaller) */}
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer border-2 rounded-full overflow-hidden ${
              currentIndex === index ? "bg-slate-600" : "border-transparent"
            } w-5  bg-[#F4F4F4]`}
          >
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
