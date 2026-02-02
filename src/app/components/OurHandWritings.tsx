"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "./ScrollAnimation";
import { ArrowUpRight } from "lucide-react";

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
    <section className="relative bg-gray-50 min-h-screen w-full overflow-hidden py-24 flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/OurHandWritingsIMG.png"
          alt="Our Works Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        {/* Advanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-transparent mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 z-10">
        <ScrollAnimation variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-light italic text-[#2D1810] ramillas mb-4 drop-shadow-sm">
            Our Works.
          </h2>
          <p className="text-xl text-[#7c6537] ramillas font-light max-w-2xl mx-auto">
            Explore our diverse range of premium apparel categories, crafted with precision and passion.
          </p>
        </ScrollAnimation>

        <div className="flex justify-center">
          <ScrollAnimation variant="scaleIn" delay={0.2} className="w-full max-w-5xl">
            <div className="relative bg-white/40 backdrop-blur-md rounded-[2rem] border border-white/50 shadow-2xl overflow-hidden group/container">
               {/* Central Divider Cross for Desktop */}
               <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                  <div className="absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-[#7c6537]/30 to-transparent"></div>
                  <div className="absolute top-1/2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#7c6537]/30 to-transparent"></div>
               </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">
                {categories.map((cat, idx) => {
                   // Calculate borders for grid items to create refined separation without double borders
                   let borderClasses = "";
                   if (idx === 0) borderClasses = "lg:border-r lg:border-b border-[#7c6537]/10";
                   else if (idx === 1) borderClasses = "lg:border-b border-[#7c6537]/10";
                   else if (idx === 2) borderClasses = "lg:border-r border-[#7c6537]/10";
                   else borderClasses = "border-[#7c6537]/10"; // last item

                  return (
                    <Link
                      key={idx}
                      href={`/products?category=${cat.slug}`}
                      className={`relative flex flex-col justify-center p-8 md:p-12 lg:p-16 transition-all duration-500 hover:bg-white/60 group overflow-hidden ${cat.align} ${borderClasses}`}
                    >
                      {/* Hover Abstract Shape */}
                      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#7c6537]/5 rounded-full blur-3xl group-hover:bg-[#7c6537]/20 transition-all duration-700 opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-150" />

                      <div className="relative z-10 flex flex-col h-full gap-4">
                        <div className="flex items-center gap-2 group/title">
                            <h3 className={`text-2xl md:text-3xl font-bold text-[#2D1810] uppercase tracking-wide ramillas transition-colors duration-300 group-hover:text-[#7c6537] ${cat.align.includes('end') ? 'order-last' : ''}`}>
                            {cat.name}
                            </h3>
                            <ArrowUpRight className={`w-6 h-6 text-[#7c6537] opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-500 ease-out hidden lg:block ${cat.align.includes('end') ? 'order-first' : ''}`} />
                         </div>

                        <p className={`text-base md:text-lg text-gray-700 font-light leading-relaxed max-w-sm transition-opacity duration-300 group-hover:opacity-100 opacity-80 ${cat.align.includes('text-end') ? 'ml-auto' : 'mr-auto'}`}>
                          {cat.desc}
                        </p>
                        
                         {/* Mobile Arrow */}
                         <div className={`mt-4 lg:hidden flex ${cat.align.includes('items-end') ? 'justify-end' : 'justify-start'}`}>
                              <span className="flex items-center gap-2 text-[#7c6537] text-sm font-semibold uppercase tracking-wider">
                                View Collection <ArrowUpRight className="w-4 h-4" />
                              </span>
                         </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
