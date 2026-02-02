"use client";

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";
import { motion } from "framer-motion";

export default function CustomerLogos() {
  const logos = [
    { name: "Druzzy", image: "/images/logos/druzzy.jpeg" },
    { name: "Haggai", image: "/images/logos/haggai.jpeg" },
    { name: "Best Tailor", image: "" },
    { name: "Best Sewing", image: "" },
    { name: "Sewing Shop", image: "" },
  ];

  const svgPlaceholders: string[] = [
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'>
      <rect width='100' height='100' rx='10' fill='#7c6537'/>
      <text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#ffffff'>Tailor</text>
    </svg>`,
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'>
      <circle cx='50' cy='50' r='48' fill='#7c6537'/>
      <text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#ffffff'>Sewing</text>
    </svg>`,
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'>
      <rect x='10' y='10' width='80' height='80' rx='10' fill='#7c6537' stroke='#a08556'/>
      <text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#ffffff'>Custom</text>
    </svg>`,
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 ramillas mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-gray-600 text-lg">
              Partnering with excellence across the globe
            </p>
          </div>
        </ScrollAnimation>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling Logos */}
          <div className="flex gap-12 animate-scroll">
            {duplicatedLogos.map((logo, index) => {
              const hasImage = logo.image && logo.image.trim() !== "";
              const placeholderSvg =
                svgPlaceholders[index % svgPlaceholders.length];
              const encodedSvg = `data:image/svg+xml;base64,${Buffer.from(
                placeholderSvg
              ).toString("base64")}`;

              return (
                <motion.div
                  key={`${logo.name}-${index}`}
                  className="group flex-shrink-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500">
                    <Image
                      src={hasImage ? logo.image : encodedSvg}
                      alt={logo.name || "Partner logo"}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Add CSS animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }

          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
