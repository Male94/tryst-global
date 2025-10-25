"use client";

import Image from "next/image";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function SolutionsOffered() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dragRange, setDragRange] = useState({ left: 0, right: 0 });
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]); // Array of refs for each card

  useEffect(() => {
    setIsMobile("ontouchstart" in window);
    calculateDragRange();
    startAutoScroll();

    // Recalculate on resize
    window.addEventListener("resize", calculateDragRange);
    return () => window.removeEventListener("resize", calculateDragRange);
  }, []);

  const calculateDragRange = () => {
    if (carouselRef.current) {
      const totalWidth = carouselRef.current.scrollWidth;
      const visibleWidth = carouselRef.current.offsetWidth;
      setDragRange({ left: -(totalWidth - visibleWidth), right: 0 });
    }
  };

  const startAutoScroll = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const stopAutoScroll = () => controls.stop();

  const solutions = [
    {
      image: "/images/image1.jpg",
      title: "Design and Development",
      description:
        "WE UTILIZE ADVANCED PATTERN TECHNOLOGY AND 3D DESIGN TO ENHANCE AND REVOLUTIONIZE OUR CREATIVE PROCESS.",
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
        "WE ARE A DYNAMIC APPAREL PRODUCTION UNIT FLEXIBLE FOR SHORT-ORDER QUANTITIES WITH HIGH QUALITY AND SPEED.",
      href: "/services#manufacturing",
    },
    {
      image: "/images/image1.jpg",
      title: "Private Labeling & Branding",
      description:
        "LAUNCH YOUR FASHION BRAND WITH OUR RAPID, SECURE, AND TECHNICAL PRODUCTION EXPERTISE.",
      href: "/services#private-labeling-and-branding",
    },
    {
      image: "/images/image2.jpg",
      title: "Training & Development",
      description:
        "WE OFFER HANDS-ON APPAREL TRAINING FOR STUDENTS AND PROFESSIONALS IN PATTERN MAKING AND 3D SOFTWARE TOOLS.",
      href: "/services#training-and-development",
    },
    {
      image: "/images/image3.jpg",
      title: "Textile Consulting",
      description:
        "WE EMPOWER FASHION BRANDS WITH EXPERT CONSULTING, STREAMLINING PRODUCTION THROUGH OPTIMIZED PROCESSES, COST, AND SYSTEMS.",
      href: "/services#textile-consulting",
    },
  ];

  const handleHover = (index: number) => {
    if (!cardRefs.current[index] || !carouselRef.current) return;
    stopAutoScroll();
    setActiveIndex(index);

    const carousel = carouselRef.current;
    const cardRect = cardRefs.current[index]!.getBoundingClientRect();
    const carouselRect = carousel.getBoundingClientRect();

    const scrollLeft =
      carousel.scrollLeft +
      (cardRect.left +
        cardRect.width / 2 -
        carouselRect.left -
        carouselRect.width / 2);

    carousel.scrollTo({ left: scrollLeft, behavior: "smooth" });
  };

  const handleLeave = () => {
    setActiveIndex(null);
    startAutoScroll();
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <h2 className="text-5xl lg:text-6xl font-light italic text-gray-900 mb-16 text-left ramillas px-8">
        Solutions Offered
      </h2>

      <div ref={carouselRef} className="relative w-full overflow-hidden">
        <motion.div
          style={{ x }}
          animate={controls}
          drag="x"
          dragConstraints={dragRange}
          dragElastic={0.15}
          onDragStart={stopAutoScroll}
          onDragEnd={() => startAutoScroll()}
          className="flex w-[200%] cursor-grab active:cursor-grabbing select-none"
        >
          {[...solutions, ...solutions].map((solution, index) => {
            const isActive = activeIndex === index;

            // Initialize cardRefs array length if needed
            if (cardRefs.current.length <= index) {
              cardRefs.current.push(null);
            }

            return (
              <motion.div
                ref={(el) => {
                  cardRefs.current[index] = el; // Assign the ref
                }} // Assign ref dynamically
                key={index}
                className={`relative h-[60vh] flex-shrink-0 transition-all duration-700 ${
                  isActive ? "w-screen" : "w-[50vw] md:w-[33.33vw]"
                }`}
                onMouseEnter={() => !isMobile && handleHover(index)}
                onMouseLeave={() => !isMobile && handleLeave()}
                onClick={() =>
                  isMobile &&
                  (activeIndex === index ? handleLeave() : handleHover(index))
                }
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Title overlay (always visible when inactive) */}
                <div
                  className={`absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center transition-all duration-500 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    {solution.title}
                  </h3>
                </div>

                {/* Hover / Active content */}
                <motion.div
                  className={`absolute inset-0 flex flex-col items-start justify-center bg-black/50 transition-opacity duration-500 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-4xl text-white uppercase font-bold mb-4 text-center px-6">
                    {solution.title}
                  </h3>
                  <p className="text-white max-w-xl text-center text-sm mb-6 px-6">
                    {solution.description}
                  </p>
                  <Link
                    href={solution.href}
                    className="text-white border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    See Detail
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
