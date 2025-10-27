"use client";

import Image from "next/image";

export default function CustomerLogos() {
  const logos = [
    {
      name: "Druzzy",
      subtitle: "Druzzy",
      image: "/images/logos/druzzy.jpeg",
    },
    {
      name: "Haggai",
      subtitle: "PREMIUM QUALITY",
      image: "/images/logos/haggai.jpeg",
    },
    {
      name: "Best Tailor",
      subtitle: "CUSTOM CLOTHING",
      image: "", // purposely missing
    },
    {
      name: "Best Sewing",
      subtitle: "HAND MADE",
      image: "", // purposely missing
    },
    {
      name: "Sewing Shop",
      subtitle: "TAILORED SERVICE",
      image: "", // intentionally missing
    },
  ];

  // SVG placeholders for missing logos
  const svgPlaceholders: string[] = [
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'>
      <rect width='100' height='100' rx='10' fill='#808080'/>
      <text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#e5e5e5'>Tailor</text>
    </svg>`,
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'>
      <circle cx='50' cy='50' r='48' fill='#808080'/>
      <text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#e5e5e5'>Sewing</text>
    </svg>`,
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'>
      <rect x='10' y='10' width='80' height='80' rx='10' fill='#808080' stroke='#a3a3a3'/>
      <text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#e5e5e5'>Custom</text>
    </svg>`,
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo, index) => {
            const hasImage = logo.image && logo.image.trim() !== "";
            const placeholderSvg = svgPlaceholders[index % svgPlaceholders.length];
            const encodedSvg = `data:image/svg+xml;base64,${Buffer.from(
              placeholderSvg
            ).toString("base64")}`;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <div
                  className={`relative w-32 h-32 lg:w-40 lg:h-40 mb-3 transition-all duration-300 ${
                    hasImage
                      ? ""
                      : "filter grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
                  }`}
                >
                  <Image
                    src={hasImage ? logo.image : encodedSvg}
                    alt={logo.name || "Customer logo"}
                    fill
                    className="object-contain"
                  />
                </div>
                {/* <p className="text-sm text-gray-700 font-light italic">
                  {logo.subtitle}
                </p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
