import Image from "next/image";
import Link from "next/link";

export default function OurHandWritings() {
  const categories = [
    {
      name: "Custom Tailoring",
      slug: "custom-tailoring",
      desc: "Providing personalized tailoring services to create garments tailored to individual measurements and preferences.",
      icon: "🧵",
    },
    {
      name: "Textile Sourcing",
      slug: "textile-sourcing",
      desc: "Assisting clients in sourcing high-quality fabrics and textiles for their garment needs to ensure a perfect fit.",
      icon: "🧶",
    },
    {
      name: "Virtual Fitting Rooms",
      slug: "virtual-fitting-rooms",
      desc: "Incorporating virtual fitting room technology to enhance the online shopping experience, showcase new collections and trends.",
      icon: "🏬",
    },
    {
      name: "Swim Wear & Intimates",
      slug: "swim-intimates",
      desc: "Wired & non-wired bra, Panties & shorts, Body suites, Cover-ups, Smoked bra",
      icon: "👙",
    },
  ];

  return (
    <section className="relative bg-gray-50 w-full overflow-hidden py-12">
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
      <div className="relative w-full">
        {/* Section Title */}
        <h2 className="text-center text-5xl md:text-6xl font-light italic text-gray-900 mb-12 ramillas">
          Our Works.
        </h2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={`/products?category=${cat.slug}`}
              className="flex flex-col p-6 bg-white/80 border border-gray-200 rounded-lg group relative transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg hover:bg-white/90"
            >
              <div className="mb-4">
                <span className="text-3xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">
                {cat.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {cat.desc}
              </p>
              <span className="text-yellow-500 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                → READ MORE
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
