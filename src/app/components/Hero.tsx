"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09, // letters animate one after another
      delayChildren: 0.3,
    },
  },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 50, filter: "brightness(0.8)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "brightness(1.3) drop-shadow(0px 5px 10px rgba(0,0,0,0.2))",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      duration: 0.8,
    },
  },
};

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <motion.span
    variants={container}
    initial="hidden"
    animate="show"
    className={className}
  >
    {text.split("").map((char, i) => (
      <motion.span key={i} variants={letter} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </motion.span>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero_video.mp4" type="video/mp4" />
        {/* optional: fallback message */}
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark overlay for contrast */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* 🔹 Foreground content */}
      {/* <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl px-4 flex flex-col justify-center items-center text-center md:text-left"
      >
        <h1 className="text-7xl md:text-9xl font-light ramillas text-white leading-tight">
          <div className="flex flex-col gap-0 items-center md:items-start w-[250px] md:w-[450px]">
            <AnimatedText text="Tryst" className="self-start" />
            <AnimatedText text="Global" className="self-end -mt-4 md:-mt-8" />
          </div>
        </h1>

        <AnimatedText
          text="The Apparel Solution Provider"
          className="text-2xl md:text-3xl fraunces italic font-thin text-white mt-4"
        />
      </motion.div> */}
    </section>
  );
}
