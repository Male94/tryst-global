"use client";
import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";

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
  // State to track the current main image index, loading state, zoom state, and cursor position
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const currentMainImage = images[currentIndex] || images[0] || "";

  // Ref to the image container for positioning
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Memoized handlers for smoother state updates
  const handleNext = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setIsLoading(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Autoplay logic
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        setIsLoading(true);
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 5000); // 5-second interval

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  // Reset loading state after image loads
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Handle zoom on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed && imageContainerRef.current) {
      const rect = imageContainerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setCursorPosition({ x, y });
    }
  };

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsZoomed(false); // Reset zoom when leaving
      }}
    >
      {/* Main Product Image with Navigation and Zoom */}
      <div
        ref={imageContainerRef}
        className="w-64 h-64 relative overflow-hidden shadow-sm"
        onMouseMove={handleMouseMove}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        <div
          className="w-full h-full relative"
          style={{
            transformOrigin: `${cursorPosition.x}% ${cursorPosition.y}%`,
            transition: "transform 0.3s ease",
            transform: isZoomed ? "scale(2)" : "scale(1)",
          }}
        >
          <Image
            src={currentMainImage}
            alt={name}
            fill
            className={`object-fill transition-opacity duration-500 ease-in-out ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={(img) => {
              setIsLoading(false);
            }}
            onError={(e) => {
              const nextIndex = (currentIndex + 1) % images.length;
              setCurrentIndex(nextIndex);
            }}
          />
        </div>
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
              onClick={() => {
                setIsLoading(true);
                setCurrentIndex(index);
              }}
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
        {/* <p className="text-gray-800">₱{price}</p> */}
      </div>
    </div>
  );
}
