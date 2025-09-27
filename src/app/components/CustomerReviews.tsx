"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomerReviews() {
  const reviews = [
    {
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Ryan Hobart",
    },
    {
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Betsy Hall",
    },
    {
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Krista Bacchioni",
    },
    {
      text: "Another happy customer with amazing feedback that boosts credibility instantly!",
      author: "Liam Carter",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 2) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  // Slice reviews into chunks of 2
  const currentReviews = reviews.slice(currentIndex, currentIndex + 2);
  const displayedReviews =
    currentReviews.length < 2
      ? [...currentReviews, reviews[0]]
      : currentReviews;

  // Motion variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute", // stay layered
      top: 0,
      left: 0,
      right: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    }),
  };

  return (
    <section className="py-5 px-4 md:px-8 bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-5xl lg:text-6xl font-light italic text-white mb-16 text-left fraunces">
          Customer Reviews
        </h2>

        {/* Container must be relative with fixed height */}
        <div className="relative w-full min-h-[400px]">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {displayedReviews.map((review, index) => (
                <div key={index} className="flex flex-col p-6 rounded-xl">
                  <blockquote className="text-white text-lg leading-relaxed mb-6 font-light ramillas">
                    {`"${review.text}"`}
                  </blockquote>
                  <cite className="text-gray-300 text-base font-normal not-italic ramillas">
                    - {review.author}
                  </cite>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
