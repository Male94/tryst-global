"use client";

import Image from "next/image";

export default function QualityApproach() {
  const steps = [
    "Understanding Your Vision",
    "Sourcing the Finest Materials",
    "Custom Design & Development",
    "Crafting with Precision",
    "Quality Control & Testing",
  ];

  return (
    <section className="relative min-h-screen bg-[url('/images/background_for_our_approach.jpg')] bg-cover bg-center bg-fixed flex justify-start items-center">
      {/* Content overlay */}
      <div className="relative z-50 w-full h-full flex justify-center md:justify-end items-center">
        <div className="w-full md:w-1/2 p-20 md:pr-20 md:pl-30">
          <div className="bg-white/40 rounded-[50px] p-20 md:p-10">
            <h1 className="text-[#2D1810] text-3xl md:text-5xl font-bold mb-10 text-end leading-8 md:leading-16 open-sans">
              OUR APPROACH TO
              <br />
              QUALITY TEXTILES
            </h1>
            <div className="space-y-6 text-end">
              {steps.map((step, i) => (
                <p
                  key={i}
                  className="text-[#2D1810] text-xl md:text-2xl font-extralight tracking-wide open-sans"
                >
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
