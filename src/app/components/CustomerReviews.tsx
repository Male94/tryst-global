"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomerReviews() {
  const reviews = [
    { text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.", author: "Ryan Hobart" },
    { text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.", author: "Betsy Hall" },
    { text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.", author: "Krista Bacchioni" },
    { text: "Another happy customer with amazing feedback that boosts credibility instantly!", author: "Liam Carter" },
    { text: "Another happy customer with amazing feedback that boosts credibility instantly!", author: "Liam Carter" },
    { text: "Another happy customer with amazing feedback that boosts credibility instantly!", author: "Liam Carter" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) =>
      (prev + dir * 2 + reviews.length) % reviews.length
    );
  };

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
      position: "absolute",
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
        <div className="relative w-full min-h-[200px] overflow-hidden">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) {
                  paginate(1); // swipe left → next
                } else if (info.offset.x > 100) {
                  paginate(-1); // swipe right → prev
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 cursor-grab active:cursor-grabbing"
            >
              {displayedReviews.map((review, index) => (
                <div key={index} className="flex flex-col p-6 rounded-xl bg-gray-700/40">
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
