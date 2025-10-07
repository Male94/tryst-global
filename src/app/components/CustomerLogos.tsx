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
      name: "Tailor Shop",
      subtitle: "PREMIUM QUALITY",
      image: "", // Missing or broken
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
      // image intentionally missing
    },
  ];

  // simple default SVG placeholders
  const svgPlaceholders: string[] = [
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'><rect width='100' height='100' rx='10' fill='#f1f1f1'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#999'>Tailor</text></svg>`,
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'><circle cx='50' cy='50' r='48' fill='#e8e8e8'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#666'>Sewing</text></svg>`,
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 100 100'><rect x='10' y='10' width='80' height='80' rx='10' fill='#fafafa' stroke='#ccc'/><text x='50%' y='50%' text-anchor='middle' dy='.3em' font-size='12' fill='#888'>Custom</text></svg>`,
  ];

  const defaultSvg = `data:image/svg+xml;base64,${Buffer.from(
    svgPlaceholders[0]
  ).toString("base64")}`;

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo, index) => {
            const hasImage = logo.image && logo.image.trim() !== "";
            const placeholder = svgPlaceholders[index % svgPlaceholders.length];
            const encodedSvg = `data:image/svg+xml;base64,${Buffer.from(
              placeholder
            ).toString("base64")}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 mb-3">
                  {hasImage ? (
                    <Image
                      src={logo.image}
                      alt={logo.name || "Customer logo"}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <Image
                      src={encodedSvg}
                      alt={`${logo.name} placeholder`}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
