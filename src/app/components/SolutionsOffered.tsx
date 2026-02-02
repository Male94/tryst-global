"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

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
        "WE UTILIZE ADVANCED PATTERN TECHNOLOGY AND 3D DESIGN TO ENHANCE AND REVOLUTIONIZE OUR CREATIVE PROCESS.",
      href: "/services#design-and-development",
      number: "01",
    },
    {
      image: "/images/image2.jpg",
      title: "Sourcing",
      description:
        "WE COLLABORATE WITH GLOBAL SUPPLIERS FROM VIETNAM, INDIA AND CHINA TO SOURCE HIGH-QUALITY AND STYLISH MATERIALS.",
      href: "/services#global-sourcing",
      number: "02",
    },
    {
      image: "/images/image3.jpg",
      title: "Manufacturing",
      description:
        "WE ARE A DYNAMIC APPAREL PRODUCTION UNIT FLEXIBLE FOR SHORT-ORDER QUANTITIES WITH HIGH QUALITY AND SPEED.",
      href: "/services#manufacturing",
      number: "03",
    },
    {
      image: "/images/image1.jpg",
      title: "Private Labeling & Branding",
      description:
        "LAUNCH YOUR FASHION BRAND WITH OUR RAPID, SECURE, AND TECHNICAL PRODUCTION EXPERTISE.",
      href: "/services#private-labeling-and-branding",
      number: "04",
    },
    {
      image: "/images/image2.jpg",
      title: "Training & Development",
      description:
        "WE OFFER HANDS-ON APPAREL TRAINING FOR STUDENTS AND PROFESSIONALS IN PATTERN MAKING AND 3D SOFTWARE TOOLS.",
      href: "/services#training-and-development",
      number: "05",
    },
    {
      image: "/images/image3.jpg",
      title: "Textile Consulting",
      description:
        "WE EMPOWER FASHION BRANDS WITH EXPERT CONSULTING, STREAMLINING PRODUCTION THROUGH OPTIMIZED PROCESSES, COST, AND SYSTEMS.",
      href: "/services#textile-consulting",
      number: "06",
    },
  ];

  return (
    <section id="solutions" className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation variant="fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-light italic text-gray-900 mb-16 text-left ramillas">
            Solutions Offered
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <ScrollAnimation
              key={index}
              variant="fadeInUp"
              delay={index * 0.1}
            >
              <div
                className="flex flex-col ramillas relative group hover-lift cursor-pointer"
                onMouseEnter={() => !isMobile && handleInteraction(index, true)}
                onMouseLeave={() => !isMobile && handleInteraction(index, false)}
                onClick={() =>
                  isMobile && handleInteraction(index, activeIndex !== index)
                }
              >
                {/* Card Container */}
                <div className="relative w-full h-80 overflow-hidden rounded-sm shadow-md">
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="text-[#7c6537] font-bold text-lg ramillas">
                      {solution.number}
                    </span>
                  </div>

                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 w-full h-full">
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-[#4a4a3d]/90 backdrop-blur-sm"
                      initial={{ height: isMobile ? "25%" : "30%" }}
                      animate={{
                        height:
                          activeIndex === index
                            ? "75%"
                            : isMobile
                            ? "25%"
                            : "30%",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 h-full flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-4 uppercase">
                          {solution.title}
                        </h3>

                        <motion.div
                          className="flex flex-col gap-4 flex-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: activeIndex === index ? 1 : 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                        >
                          <p className="text-sm text-white uppercase tracking-wide leading-relaxed font-light flex-1">
                            {solution.description}
                          </p>

                          <Link
                            href={solution.href}
                            className="group/btn flex items-center gap-2 text-white border border-white px-6 py-2 w-fit hover:bg-white hover:text-[#4a4a3d] transition-all duration-300 self-end"
                          >
                            <span>See Detail</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
