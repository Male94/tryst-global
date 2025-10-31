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
    <section className="relative bg-gray-50 h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/OurHandWritingsIMG.png"
          alt="our hand writing img"
          fill
          className="object-fill"
          priority
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/50" />
      </div>

      {/* Content */}
      <div className="relative w-full h-full">
        {/* Section Title */}
        {/* <h2 className="relative text-center md:absolute md:top-6 sm:left-[10%] text-5xl lg:text-6xl font-light italic text-gray-900 ramillas z-10">
          Our Works.
        </h2> */}

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 min-h-[600px] relative z-10">
          <h2 className="relative text-center md:absolute top-12 md:top-15 sm:left-[58%] text-5xl lg:text-6xl font-light italic text-gray-900 ramillas z-10">
            Our Works.
          </h2>
          <div className="max-sm:hidden md:col-span-4"></div>

          {/* Categories */}
          <div className="flex justify-center items-center col-span-1 md:col-span-8 relative p-5 md:p-20">
            <div className="relative w-full h-full max-h-[500px] md:max-h-[350px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white/70"></div>

              {/* Divider lines */}
              <div className="absolute inset-0 hidden sm:block">
                <div className="absolute top-0 bottom-0 left-1/2 border-l border-yellow-400"></div>
                <div className="absolute left-0 right-0 top-1/2 border-t border-yellow-400"></div>
              </div>

              {/* Categories Grid */}
              {/* Mobile Layout (Cards) */}
              <div className="grid grid-cols-1 gap-4 sm:hidden">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={`/products?category=${cat.slug}`}
                    className="flex flex-col p-6 bg-white shadow-md rounded-lg group transition"
                  >
                    <p className="text-sm text-black mb-4 leading-relaxed group-hover:text-gray-900 transition">
                      {cat.desc}
                    </p>
                    <h3 className="text-sm md:text-lg font-bold text-gray-900 uppercase tracking-wide relative">
                      {cat.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </h3>
                  </Link>
                ))}
              </div>

              {/* Tablet & Desktop Layout (2x2 Grid) */}
              <div className="hidden sm:grid absolute inset-0 grid-cols-2 grid-rows-2">
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={`/products?category=${cat.slug}`}
                    className={`flex flex-col justify-center ${cat.align} p-10 group transition`}
                  >
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed min-h-[4.5rem] group-hover:text-gray-900 transition">
                      {cat.desc}
                    </p>
                    <h3 className="text-sm md:text-lg font-bold text-gray-900 uppercase tracking-wide relative">
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
