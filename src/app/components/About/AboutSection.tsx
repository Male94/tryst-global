"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function AboutSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    }),
  };

  return (
    <main className="bg-white text-[#5a4c3c] overflow-hidden">
      {/* Section 1 - About Intro */}
      <section
        className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-20 max-w-7xl mx-auto"
        id="story"
      >
        {/* Left: Image / Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg"
        >
          {!isPlaying ? (
            <>
              <Image
                src="/images/about-placeholder.jpg"
                alt="About Us Visual"
                width={800}
                height={600}
                className="object-cover w-full h-auto rounded-2xl"
                priority
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
              >
                <Play size={70} className="text-white drop-shadow-lg" />
              </button>
            </>
          ) : (
            <video
              className="w-full h-auto rounded-2xl"
              src="/videos/about.mp4"
              autoPlay
              controls
            />
          )}
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-5xl font-serif italic text-[#4b3b2a] mb-6">
            ABOUT US
          </h2>
          <p className="text-lg leading-relaxed">
            We are a dynamic apparel solution provider focused on short-order
            quantities — where creativity meets agility. By joining forces with
            a handpicked network of industry professionals, we deliver quality
            and precision with a personal touch.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - Key Highlights */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "1. SHORT ORDER QUANTITIES",
              text: "We are flexible for short-order quantity manufacturing for fashion brands that value agility without compromising quality.",
            },
            {
              title: "2. EXPERT CRAFTSMANSHIP",
              text: "Our strength lies in the hands of our highly skilled operators — seasoned professionals who bring precision and speed to every garment.",
            },
            {
              title: "3. END TO END SUPPORT",
              text: "From tech pack creation to FOB delivery, we ensure seamless execution, expert guidance, and reliable service every step of the way.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-xl font-bold mb-2 text-[#4b3b2a]">
                {item.title}
              </h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
