"use client";
import Image from "next/image";
import { useState, useCallback } from "react";

type ProductCardProps = {
  name: string;
  price: number;
  date: string;
  images: string[]; // Array of image URLs
};

export default function ProductCard({
  name,
  price,
  date,
  images,
}: ProductCardProps) {
  // State to track the current main image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMainImage = images[currentIndex] || images[0] || "";

  // Memoized handlers for smoother state updates
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  return (
    <div className="flex flex-col">
      {/* Main Product Image with Navigation */}
      <div className="w-full h-64 relative overflow-hidden shadow-sm">
        <Image
          src={currentMainImage}
          alt={name}
          fill
          className="object-cover transition-opacity duration-500 ease-in-out"
          style={{ opacity: 1 }} // Initial opacity
          onLoadingComplete={(img) => {
            img.classList.add("opacity-100");
            img.classList.remove("opacity-0");
          }}
          onError={(e) => {
            const nextIndex = (currentIndex + 1) % images.length;
            setCurrentIndex(nextIndex);
          }}
        />
        {images.length > 1 && (
          <div className="absolute top-1/2 left-2 right-2 flex justify-between transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="bg-white bg-opacity-75 text-gray-800 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="bg-white bg-opacity-75 text-gray-800 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-200"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="mt-3 flex space-x-2 overflow-x-auto">
          {images.map((img, index) => (
            <div
              key={index}
              className={`w-16 h-16 relative overflow-hidden rounded-md cursor-pointer ${
                currentIndex === index ? "border-2 border-blue-500" : ""
              } transition-all duration-200`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
      {/* Product Info */}
      <div className="mt-3">
        <p className="text-xs text-gray-500 uppercase">{date}</p>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-800">₱{price}</p>
      </div>
    </div>
  );
}
