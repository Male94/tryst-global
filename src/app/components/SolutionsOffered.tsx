"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useMemo } from "react";

type Solution = {
  image: string;
  title: string;
  description: string;
  href: string;
};

const solutions: Solution[] = [
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

export default function SolutionsOffered() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredSolution, setHoveredSolution] = useState<Solution | null>(null);
  const [autoIndex, setAutoIndex] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const rows = useMemo(
    () => [solutions.slice(0, 3), solutions.slice(3, 6)],
    []
  );

  // 🕒 Auto-play slideshow on idle
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setHoveredRow(autoIndex % rows.length);
  //     setHoveredSolution(
  //       rows[autoIndex % rows.length][Math.floor(Math.random() * 3)]
  //     );
  //     setAutoIndex((prev) => prev + 1);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [autoIndex, rows]);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl lg:text-6xl font-light italic text-gray-900 mb-16 text-center ramillas">
          Solutions Offered
        </h2>

        {rows.map((rowSolutions, rowIndex) => (
          <div
            key={rowIndex}
            className="relative h-[500px] overflow-hidden group"
            onMouseLeave={() => {
              setHoveredRow(null);
              setHoveredSolution(null);
            }}
          >
            {/* Default row (3 images) */}
            <AnimatePresence>
              {hoveredRow !== rowIndex && (
                <motion.div
                  key={`row-${rowIndex}-default`}
                  className="grid grid-cols-3 h-full"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {rowSolutions.map((solution, i) => (
                    <div
                      key={i}
                      className="relative w-full h-full cursor-pointer"
                      onMouseEnter={(e) => {
                        setHoveredRow(rowIndex);
                        setHoveredSolution(solution);
                        x.set(0);
                        y.set(0);
                      }}
                    >
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-30 transition-opacity"></div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hovered row full image */}
            <AnimatePresence>
              {hoveredRow === rowIndex && hoveredSolution && (
                <motion.div
                  key={`row-${rowIndex}-hover`}
                  className="absolute inset-0 perspective-1000"
                  style={{ rotateX, rotateY }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const offsetX = e.clientX - rect.left - rect.width / 2;
                    const offsetY = e.clientY - rect.top - rect.height / 2;
                    x.set(offsetX);
                    y.set(offsetY);
                  }}
                  onMouseLeave={() => {
                    x.set(0);
                    y.set(0);
                  }}
                  initial={{
                    x: rowIndex % 2 === 0 ? -200 : 200,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  exit={{
                    x: rowIndex % 2 === 0 ? -200 : 200,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                >
                  <Image
                    src={hoveredSolution.image}
                    alt={hoveredSolution.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl text-white font-semibold mb-4 uppercase tracking-wide"
                    >
                      {hoveredSolution.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-gray-200 max-w-3xl leading-relaxed mb-6"
                    >
                      {hoveredSolution.description}
                    </motion.p>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        href={hoveredSolution.href}
                        className="inline-block px-6 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
                      >
                        → READ MORE
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
