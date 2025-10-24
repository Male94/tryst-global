"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      text: "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      author: "Ryan Hobart",
    },
    {
      text: "People love authentic stories. Real feedback creates trust, and trust drives sales. Keep it genuine and relatable.",
      author: "Betsy Hall",
    },
    {
      text: "Another happy customer with amazing feedback that boosts credibility instantly!",
      author: "Liam Carter",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => (prev + dir + reviews.length) % reviews.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
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
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <section className="relative bg-[url('/images/background_for_what_clients_say.jpg')] bg-cover bg-center bg-fixed overflow-hidden">
      <div className="grid md:grid-cols-2 items-start h-[1000px]">
        {/* LEFT: Fixed Image */}
        <div className="relative top-10 h-full">
          <Image
            src="/images/what_clients_says_image.png"
            alt="Model"
            fill
            className="object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-black/20"></div> */}
        </div>

        {/* RIGHT: Scrollable Content */}
        <div className="relative p-10 md:p-16 lg:p-24 bg-white/80 backdrop-blur-sm overflow-hidden h-full">
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-10 ramillas"
          >
            What Clients Say
          </motion.h3>

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
          <motion.div
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
          </motion.div>

          {/* Scroll-triggered Fade Sections */}
          {/* <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true }}
            className="mt-32 space-y-16 text-gray-600 leading-relaxed"
          >
            <p>
              "We were skeptical at first, but these testimonials absolutely
              boosted our brand’s credibility and conversions."
            </p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={0.4}
              viewport={{ once: true }}
            >
              "A simple yet powerful section. The animation makes it feel
              alive!"
            </motion.p>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              viewport={{ once: true }}
            >
              "Having one side static keeps the storytelling feel. Great modern
              UX move."
            </motion.p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
