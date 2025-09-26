"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('/images/hero_img.png')] bg-fill md:bg-cover bg-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl px-4 flex flex-col justify-center items-center text-center"
      >
        <motion.h1
          variants={item}
          className="text-8xl md:text-9xl font-extralight ramillas text-black leading-tight"
        >
          <div className="flex flex-col gap-0">
            <span className="">Tryst</span>
            <span className="block relative left:20 md:left-30 -mt-5 md:-mt-10">
              Global
            </span>
          </div>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-3xl mb-6 fraunces italic font-thin"
        >
          The Apparel Solution Provider
        </motion.p>
      </motion.div>
    </section>
  );
}
