"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
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
  const scrollToContent = () => {
    const nextSection = document.querySelector("section:nth-of-type(2)");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero_video1.mp4" type="video/mp4" />
      </video>

      {/* Dynamic overlay with gradient */}
      {/* Dynamic overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>

      {/* Foreground content */}
      <motion.div
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-6xl px-4 flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-7xl md:text-9xl font-light ramillas text-white leading-tight mb-8">
          <div className="flex flex-col gap-0 items-center w-[250px] md:w-[450px]">
            <AnimatedText text="Tryst" className="self-start" />
            <AnimatedText text="Global" className="self-end -mt-4 md:-mt-8" />
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <AnimatedText
            text="The Apparel Solution Provider"
            className="text-2xl md:text-3xl fraunces italic font-thin text-white"
          />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="#solutions"
              className="btn-primary ramillas flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base"
            >
              Explore Solutions
            </Link>
            <Link
              href="#connect"
              className="btn-outline ramillas flex items-center justify-center gap-2 px-8 py-4 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white cursor-pointer group"
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-wider ramillas opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.button>
    </section>
  );
}
