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
    <section className="py-12 px-6 md:px-12 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src="/images/home/Copilot_20250929_004516.png" // put your screenshot image here
            alt="Our approach to textiles"
            fill
            className="object-cover shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-0 items-start h-[400px] md:h-[500px] w-full">
          <h2 className="text-3xl md:text-7xl font-light text-[#884438] mb-4 ramillas">
            Our Approach to Quality Textiles
          </h2>

          <ul className="space-y-5">
            {steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start text-lg md:text-4xl text-[#59493b] font-light fraunces"
              >
                <span className="text-brown-700 font-semibold mr-4 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ml-5">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
