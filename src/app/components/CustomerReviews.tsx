"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function CustomerReviews() {
  const reviews = [
    {
      text: "The team exceeded our expectations with outstanding quality and speed.",
      author: "Lina Rodriguez",
      role: "Fashion Designer",
      rating: 5,
    },
    {
      text: "Working with them was an absolute pleasure. Their expertise shines through every step.",
      author: "Michael Grant",
      role: "Brand Manager",
      rating: 5,
    },
    {
      text: "Professionalism at its best. They turned our vision into reality flawlessly.",
      author: "Samantha Lee",
      role: "CEO, StyleCo",
      rating: 5,
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

  return (
    <section className="relative overflow-hidden bg-[url('/images/background_for_our_approach.jpg')] bg-cover bg-center bg-fixed min-h-[500px]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] relative w-full">
        {/* Left Side - Empty space */}
        <div className="hidden md:block"></div>

        {/* Right Side - Content with Premium UI */}
        <ScrollAnimation variant="fadeInRight" delay={0.2}>
          <div className="relative glass-white shadow-2xl min-h-[500px] w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            {/* Header + Navigation */}
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-4xl font-bold text-gray-900 ramillas">
                What Clients Say
              </h3>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => paginate(-1)}
                  aria-label="Previous review"
                  className="group p-2 rounded-full bg-white/80 hover:bg-[#7c6537] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-white" />
                </button>

                <button
                  onClick={() => paginate(1)}
                  aria-label="Next review"
                  className="group p-2 rounded-full bg-white/80 hover:bg-[#7c6537] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Animated Testimonials */}
            <div className="relative min-h-[240px]">
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
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#7c6537] text-[#7c6537]"
                      />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="text-6xl text-[#7c6537]/30 leading-none mb-4">
                    &quot;
                  </div>

                  <p className="text-2xl leading-relaxed mb-6 ramillas text-gray-800">
                    {reviews[currentIndex].text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Avatar Circle with Initials */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7c6537] to-[#a08556] flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-lg ramillas">
                        {reviews[currentIndex].author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900 ramillas text-lg">
                        {reviews[currentIndex].author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {reviews[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-[#7c6537]"
                      : "w-2 bg-gray-400 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
