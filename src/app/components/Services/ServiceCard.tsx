"use client";

import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  points: string[];
  image: string;
  reverse?: boolean;
  textBg?: string;
  imageBg?: string;
}

export default function ServiceCard({
  title,
  description,
  points,
  image,
  reverse = false,
  textBg = "bg-gray-600",
  imageBg = "bg-gray-200",
}: ServiceCardProps) {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } w-full min-h-[600px]`}
    >
      {/* Text Section */}
      <div
        className={`flex-1 ${textBg} text-white p-10 flex flex-col justify-start`}
      >
        <h2 className="text-lg md:text-xl font-semibold uppercase mb-4 border-b border-white/40 pb-2 ramillas">
          {title}
        </h2>
        <p className="text-base leading-relaxed mb-6 fraunces">{description}</p>
        <ul className="list-disc list-inside space-y-2 text-sm fraunces mb-10">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>

        {/* Submit Inquiry Button */}
        <div>
          <button
            className="px-8 py-2 border border-white text-white rounded-full font-semibold text-sm tracking-wider
              bg-transparent hover:bg-white hover:text-[#7a6a4b] transition-all duration-300 uppercase"
          >
            Submit Inquiry
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className={`flex-1 relative ${imageBg} m-10`}>
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
    </section>
  );
}
