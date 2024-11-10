import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imagesPerView, setImagesPerView] = useState<number>(1);

  // Adjust imagesPerView based on screen width
  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth >= 1024) {
        setImagesPerView(3);
      } else if (window.innerWidth >= 768) {
        setImagesPerView(2);
      } else {
        setImagesPerView(1);
      }
    };

    updateImagesPerView();
    window.addEventListener("resize", updateImagesPerView);
    return () => window.removeEventListener("resize", updateImagesPerView);
  }, []);

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + imagesPerView) % images.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [images.length, imagesPerView]);

  // Handle going to the selected slide with circular logic
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Adjust for circular carousel by showing cloned items at the edges
  const displayedImages = [
    ...images.slice(-imagesPerView), // Clone last few items at the start
    ...images,
    ...images.slice(0, imagesPerView), // Clone first few items at the end
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      {/* Carousel Images Wrapper */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${((currentIndex + imagesPerView) / imagesPerView) * 100}%)`,
          }}
        >
          {displayedImages.map((image, index) => (
            <div
              className="flex-shrink-0 w-full"
              style={{ width: `${100 / imagesPerView}%` }}
              key={index}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="px-3 w-full object-cover"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center space-x-2 mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer border-2 rounded-full w-4 h-4 ${
              currentIndex === index ? "bg-slate-600 border-slate-600" : "bg-gray-300 border-transparent"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
