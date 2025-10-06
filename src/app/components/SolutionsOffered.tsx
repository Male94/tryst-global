"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function SolutionsOffered() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on component mount
  useEffect(() => {
    setIsMobile("ontouchstart" in window);
  }, []);

  const handleInteraction = (index: number, isEntering: boolean) => {
    if (isMobile) {
      // On mobile, toggle the active state when tapped
      setActiveIndex(isEntering ? index : null);
    } else {
      // On desktop, follow hover state
      setActiveIndex(isEntering ? index : null);
    }
  };

  const solutions = [
    {
      image: "/images/image1.jpg",
      title: "Design and Development",
      description:
        "WE UTILIZE ADVANCED PATTERN TECHNOLOGY AND 5D DESIGN TO ENHANCE AND REVOLUTIONIZE OUR CREATIVE PROCESS",
    },
    {
      image: "/images/image2.jpg",
      title: "Sourcing",
      description:
        "WE COLLABORATE WITH GLOBAL SUPPLIERS FROM VIETNAM, INDIA AND CHINA TO SOURCE HIGH-QUALITY AND STYLISH MATERIALS.",
    },
    {
      image: "/images/image3.jpg",
      title: "Manufacturing",
      description:
        "WE ARE A DYNAMIC APPAREL PRODUCTION UNIT SPECIALIZING IN SHORT-ORDER QUANTITIES WITH HIGH QUALITY AND SPEED.",
    },
    {
      image: "/images/image1.jpg",
      title: "Design and Development",
      description:
        "WE UTILIZE ADVANCED PATTERN TECHNOLOGY AND 5D DESIGN TO ENHANCE AND REVOLUTIONIZE OUR CREATIVE PROCESS",
    },
    {
      image: "/images/image2.jpg",
      title: "Sourcing",
      description:
        "WE COLLABORATE WITH GLOBAL SUPPLIERS FROM VIETNAM, INDIA AND CHINA TO SOURCE HIGH-QUALITY AND STYLISH MATERIALS.",
    },
    {
      image: "/images/image3.jpg",
      title: "Manufacturing",
      description:
        "WE ARE A DYNAMIC APPAREL PRODUCTION UNIT SPECIALIZING IN SHORT-ORDER QUANTITIES WITH HIGH QUALITY AND SPEED.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-light italic text-gray-900 mb-16 text-left ramillas">
          Solutions Offered
        </h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col ramillas relative"
              onMouseEnter={() => !isMobile && handleInteraction(index, true)}
              onMouseLeave={() => !isMobile && handleInteraction(index, false)}
              onClick={() =>
                isMobile && handleInteraction(index, activeIndex !== index)
              }
            >
              {/* Image Container with Overlay */}
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 w-full h-full">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-[#4a4a3d]/70 bg-opacity-90"
                    initial={{
                      height: isMobile ? "20%" : "25%", // collapsed height
                    }}
                    animate={{
                      height:
                        activeIndex === index
                          ? "70%"
                          : isMobile
                          ? "20%"
                          : "25%",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Content Container */}
                    <div className="p-6">
                      {/* Title - Always visible */}
                      <h3 className="text-xl lg:text-3xl font-bold text-white mb-4">
                        {solution.title}
                      </h3>

                      {/* Description and Button - Only visible when active */}
                      <motion.div
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        <p className="text-sm text-white uppercase tracking-wide leading-relaxed font-light">
                          {solution.description}
                        </p>

                        <button className="text-white border border-white px-6 py-2 w-fit hover:bg-white hover:text-[#4a4a3d] transition-colors duration-300">
                          See Detail
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
