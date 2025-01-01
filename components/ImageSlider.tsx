"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
    images: string[];
}

export default function ImageSlider({ images } : ImageSliderProps) {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to show the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      <div className="relative h-[460px] mx-12 group">
        <Image
          src={images[currentIndex]}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
          unoptimized
          className="transition-all duration-500 ease-in-out rounded-lg"
        />
      </div>
      {
        images.length > 1 &&
        <>
          <button
            className="absolute h-auto left-0 top-1/2 transform rounded-full hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
            onClick={prevSlide}
          >
            <ChevronLeft className="text-gray-400 group-hover:text-white" />
          </button>
          <button
            className="absolute h-auto right-0 top-1/2 transform rounded-full hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
            onClick={nextSlide}
          >
            <ChevronRight className="text-gray-400 group-hover:text-white" />
          </button>
          <div className="flex justify-center mt-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-5 mx-1 ${index === currentIndex
                    ? "bg-[#ffffff] rounded-xl"
                    : "bg-[#ffffff76] rounded-xl"
                  } transition-all duration-500 ease-in-out`}
              ></div>
            ))}
          </div>
        </>
      }
    </div>
  );
}