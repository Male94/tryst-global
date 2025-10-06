"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SolutionsOffered() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window);
  }, []);

  const handleInteraction = (index: number, isEntering: boolean) => {
    setActiveIndex(isEntering ? index : null);
  };

  const solutions = [
    {
      image: "/images/image1.jpg",
      title: "Design and Development",
      description:
        "WE UTILIZE ADVANCED PATTERN TECHNOLOGY AND 5D DESIGN TO ENHANCE AND REVOLUTIONIZE OUR CREATIVE PROCESS",
      href: "/services#design-and-development",
    },
    {
      image: "/images/image2.jpg",
      title: "Sourcing",
      description:
        "WE COLLABORATE WITH GLOBAL SUPPLIERS FROM VIETNAM, INDIA AND CHINA TO SOURCE HIGH-QUALITY AND STYLISH MATERIALS.",
      href: "/services#global-sourcing",
    },
    {
      image: "/images/image3.jpg",
      title: "Manufacturing",
      description:
        "WE ARE A DYNAMIC APPAREL PRODUCTION UNIT SPECIALIZING IN SHORT-ORDER QUANTITIES WITH HIGH QUALITY AND SPEED.",
      href: "/services#manufacturing",
    },
    {
      image: "/images/image1.jpg",
      title: "Private Labeling & Branding",
      description:
        "WE UTILIZE ADVANCED PATTERN TECHNOLOGY AND 5D DESIGN TO ENHANCE AND REVOLUTIONIZE OUR CREATIVE PROCESS",
      href: "/services#private-labeling-and-branding",
    },
    {
      image: "/images/image2.jpg",
      title: "TRAINING & DEVELOPMENT",
      description:
        "WE COLLABORATE WITH GLOBAL SUPPLIERS FROM VIETNAM, INDIA AND CHINA TO SOURCE HIGH-QUALITY AND STYLISH MATERIALS.",
      href: "/services#training-and-development",
    },
    {
      image: "/images/image3.jpg",
      title: "Textile Consulting",
      description:
        "WE ARE A DYNAMIC APPAREL PRODUCTION UNIT SPECIALIZING IN SHORT-ORDER QUANTITIES WITH HIGH QUALITY AND SPEED.",
      href: "/services#textile-consulting",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-light italic text-gray-900 mb-16 text-left ramillas">
          Solutions Offered
        </h2>

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
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 w-full h-full">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-[#4a4a3d]/70 bg-opacity-90"
                    initial={{ height: isMobile ? "20%" : "25%" }}
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
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-4 uppercase">
                        {solution.title}
                      </h3>

                      <motion.div
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        <p className="text-sm text-white uppercase tracking-wide leading-relaxed font-light">
                          {solution.description}
                        </p>

                        <Link
                          href={solution.href}
                          className="text-white border border-white px-6 py-2 w-fit hover:bg-white hover:text-[#4a4a3d] transition-colors duration-300"
                        >
                          See Detail
                        </Link>
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
