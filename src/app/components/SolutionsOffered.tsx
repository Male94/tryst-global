import Image from "next/image";

export default function SolutionsOffered() {
  const solutions = [
    {
      image: "/images/image1.jpg",
      title: "Design and Development",
      description:
        "WE UTILIZE ADVANCED PATTERN TECHNOLOGY AND 5D DESIGN TO ENHANCE AND REVOLUTIONIZE OUR CREATIVE PROCESS",
    },
    {
      image: "/images/image2.jpg",
      title: "Sourcing",
      description:
        "WE COLLABORATE WITH GLOBAL SUPPLIERS FROM VIETNAM, INDIA AND CHINA TO SOURCE HIGH-QUALITY AND STYLISH MATERIALS.",
    },
    {
      image: "/images/image3.jpg",
      title: "Manufacturing",
      description:
        "WE ARE A DYNAMIC APPAREL PRODUCTION UNIT SPECIALIZING IN SHORT-ORDER QUANTITIES WITH HIGH QUALITY AND SPEED.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl lg:text-6xl font-light italic text-gray-900 mb-16 text-left ramillas">
          Solutions Offered
        </h2>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col ramillas">
              {/* Image */}
              <div className="relative w-full h-80 mb-6 overflow-hidden ">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 uppercase tracking-wide leading-relaxed mb-4 font-light">
                {solution.description}
              </p>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {solution.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
