"use client";

import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";

export default function ClothingSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row bg-white p-6 md:p-10">
      {/* Left Panel - Image with Quote */}
      <ScrollAnimation variant="fadeInLeft" className="flex-1 m-3">
        <div className="relative bg-[url('/images/Swim.png')] bg-cover bg-center h-full min-h-[400px] md:min-h-[600px] flex items-center justify-center p-8 md:p-16">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
          
          {/* Quote */}
          <div className="absolute top-4 left-4 right-4 z-10">
            <h1 className="ramillas text-2xl md:text-4xl lg:text-6xl font-light text-gray-900 leading-tight text-center">
              <span className="block text-left">&quot;Clothing that</span>
              <span className="block text-right mt-2">fits your life&quot;</span>
            </h1>
          </div>
        </div>
      </ScrollAnimation>

      {/* Right Panel - Content */}
      <ScrollAnimation variant="fadeInRight" delay={0.2} className="flex-1 m-3">
        <div className="bg-[#7c6537] h-full flex flex-col justify-center items-center p-8 lg:p-16 min-h-[400px] md:min-h-[600px] relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-white/20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-white/20"></div>
          
          <div className="max-w-lg w-full relative z-10">
            <p className="text-xl lg:text-2xl ramillas text-white font-light leading-relaxed text-center mb-6">
              We combine flexible production, expert sourcing, and highly skilled
              operators with end-to-end support and reliable delivery. Whether
              you&apos;re testing a new line or scaling up,
            </p>
            <p className="text-xl lg:text-2xl ramillas text-white font-light leading-relaxed text-center mb-8">
              we tailor every step to your brand&apos;s needs, ensuring quality,
              transparency, and agility throughout.
            </p>

            <div className="flex justify-center">
              <Link
                href="/about"
                className="group relative px-8 py-3 border-2 border-white text-white font-light uppercase tracking-wide rounded-full hover:bg-white hover:text-[#7c6537] transition-all duration-300 ramillas overflow-hidden"
              >
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
}
