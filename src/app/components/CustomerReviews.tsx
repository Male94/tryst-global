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
    <section className="relative bg-[url('/images/background_for_what_clients_say.jpg')] bg-cover bg-center bg-fixed overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start h-[500px] md:h-[500px] relative w-full">
        {/* LEFT: Model Image overlapping top */}
        {/* <div className="hidden md:block absolute  w-full md:w-1/2  h-full md:h-[550px] z-50 pointer-events-none">
          <Image
            src="/images/what_clients_says_image.png"
            alt="Model"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div> */}

        {/* RIGHT: Scrollable / Animated Content */}
        <div className="absolute left-0 md:left-1/2 z-[2] p-10 md:p-16 lg:p-24 overflow-hidden h-full md:ml-auto md:w-1/2">
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

            <div className="flex items-center gap-4">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous review"
                className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12   hover:border-gray-400 backdrop-blur-sm transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800 transform group-hover:-translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => paginate(1)}
                aria-label="Next review"
                className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12   hover:border-gray-400 backdrop-blur-sm transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-gray-800 transform group-hover:translate-x-1 transition-transform duration-300" />
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
                <p className="text-gray-700 text-2xl leading-relaxed mb-6 ramillas">
                  “{reviews[currentIndex].text}”
                </p>
                <p className="text-gray-500 font-xl ramillas">
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
