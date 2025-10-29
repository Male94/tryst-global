import Image from "next/image";
import Link from "next/link";

export default function OurHandWritings() {
  const categories = [
    {
      name: "Swim Wear & Intimates",
      slug: "swim-intimates",
      desc: "Wired & non wired bra, Panties & shorts, Body suites, Cover-ups, Smoked bra",
      align: "items-end text-end",
    },
    {
      name: "Active Wear",
      slug: "active-wear",
      desc: "Sport bra, Leggings",
      align: "items-start text-start",
    },
    {
      name: "Casual Wear",
      slug: "casual-wear",
      desc: "Ladies Blouse, T-shirts and pants",
      align: "items-end text-end",
    },
    {
      name: "Lounge Wear",
      slug: "lounge-wear",
      desc: "Satin sleep shirts, Cozy jump suites & Tops, Fleece hoodie",
      align: "items-start text-start",
    },
  ];

  return (
    <section className="relative bg-gray-50 h-full md:h-[750px] w-full overflow-hidden z-1">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/OurHandWritingsIMG.png"
          alt="our hand writing img"
          fill
          className="object-cover"
          priority
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full">
        {/* Section Title */}

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row justify-between min-h-[500px] w-full relative z-10">
          {/* Categories with title - Right side on desktop */}
          <div className="flex flex-col justify-center items-center lg:items-end relative p-4 md:p-12 lg:ml-auto lg:w-2/3">
            <div className="relative w-full lg:w-4/5 min-h-[400px] md:min-h-[500px] rounded-2xl bg-white/70 p-3">
              <h2 className="relative z-50 text-4xl lg:text-5xl font-light italic text-gray-900 ramillas z-10 mb-3 text-center">
                Our Works.
              </h2>
              {/* Divider lines */}
              <div className="absolute inset-1 hidden sm:block">
                <div className="absolute top-0 bottom-0 left-1/2 border-l border-yellow-400"></div>
                <div className="absolute left-0 right-0 top-1/2 border-t border-yellow-400"></div>
              </div>

              {/* Categories Grid */}
              {/* Mobile Layout (Cards) */}
              <div className="relative z-20 grid grid-cols-1 gap-4 sm:hidden">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={`/products?category=${cat.slug}`}
                    className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg group transition"
                  >
                    <p className="text-sm text-black mb-2 leading-relaxed group-hover:text-gray-900 transition">
                      {cat.desc}
                    </p>
                    <h3 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide relative">
                      {cat.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                  </Link>
                ))}
              </div>

              {/* Tablet & Desktop Layout (2x2 Grid) */}
              <div className="hidden sm:grid relative z-20 h-full grid-cols-2 grid-rows-2">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={`/products?category=${cat.slug}`}
                    className="flex flex-col justify-center items-center text-center p-6  group transition"
                  >
                    <p className="text-sm text-gray-700 mb-3 leading-relaxed min-h-[3.5rem] group-hover:text-gray-900 transition">
                      {cat.desc}
                    </p>
                    <h3 className="text-sm md:text-xl font-bold text-gray-900 uppercase tracking-wide relative">
                      {cat.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
