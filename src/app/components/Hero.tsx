"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // each child appears 0.3s after the previous
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen bg-gradient-to-r from-blue-900 to-blue-600 text-white flex flex-col justify-center items-center text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-full max-h-full absolute top-[30%] px-4 flex flex-col justify-end"
      >
        <motion.h1
          variants={item}
          className="text-9xl font-extralight mb-4 ramillas text-black"
        >
          Tryst
          <br />
          <span className="inline-block ml-64">Global</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-2xl mb-6 fraunces italic font-thin"
        >
          The Apparel Solution Provider
        </motion.p>

        {/* <motion.div variants={item}>
          <Button size="lg" className="bg-white text-blue-800 ">
            Learn More
          </Button>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
