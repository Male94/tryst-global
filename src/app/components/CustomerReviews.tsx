"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function WhatClientsSay() {
  const reviews = [
    {
      text: "The team exceeded our expectations with outstanding quality and speed.",
      author: "Lina Rodriguez",
    },
    {
      text: "Working with them was an absolute pleasure. Their expertise shines through every step.",
      author: "Michael Grant",
    },
    {
      text: "Professionalism at its best. They turned our vision into reality flawlessly.",
      author: "Samantha Lee",
    },
  ];

  const [[currentIndex, direction], setCurrentIndex] = useState<
    [number, number]
  >([0, 0]);

  const paginate = (newDirection: number) => {
    setCurrentIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + reviews.length) % reviews.length;
      return [newIndex, newDirection];
    });
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-[url('/images/background_for_our_approach.jpg')] bg-cover bg-center bg-fixed min-h-[500px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] relative w-full">
        {/* Left Side - Empty space */}
        <div className="hidden md:block"></div>

        {/* Right Side - Content with Apple-like UI */}
        <div className="relative bg-white/50 backdrop-blur-lg shadow-lg min-h-[500px] w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          {/* Header + Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <h3 className="text-4xl font-bold text-gray-900 ramillas">
              What Clients Say
            </h3>

            <div className="flex items-center gap-6">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous review"
                className="group p-1 transition-transform duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-gray-700 group-hover:text-gray-900" />
              </button>

              <button
                onClick={() => paginate(1)}
                aria-label="Next review"
                className="group p-1 transition-transform duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-gray-700 group-hover:text-gray-900" />
              </button>
            </div>
          </motion.div>

          {/* Animated Testimonials */}
          <div className="relative min-h-[200px]">
            <AnimatePresence custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
                className="absolute"
              >
                <p className=" text-2xl leading-relaxed mb-6 ramillas">
                  “{reviews[currentIndex].text}”
                </p>
                <p className=" font-xl ramillas">
                  — {reviews[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {/* <motion.div
            className="flex items-center gap-4 mt-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true }}
          >
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous review"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-white shadow-md hover:bg-blue-100 hover:border-blue-400 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => paginate(1)}
              aria-label="Next review"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 bg-white shadow-md hover:bg-blue-100 hover:border-blue-400 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
