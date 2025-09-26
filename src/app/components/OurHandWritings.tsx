import Image from "next/image";

export default function OurHandWritings() {
  return (
    <section className=" bg-gray-50 h-full w-full">
      <div className="w-full h-full relative">
        <Image
          src="/images/OurHandWritingsIMG.png"
          alt="our hand writing img"
          fill
          className="object-cover"
          priority
        />
        {/* Section Title */}
        <h2 className="absolute top-0 left-[15%] text-5xl lg:text-6xl font-light italic text-gray-900  text-left ramillas">
          Our Hand Writings
        </h2>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 min-h-[600px]">
          <div className="max-sm:hidden md:col-span-4"></div>
          {/* Right Side - Categories with Overlay */}
          <div className="flex justify-center items-center md:col-span-8 relative p-20 m-1">
            <div className="relative w-full h-full max-h-[300px] rounded-2xl overflow-hidden">
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-white/70"></div>

              <div className="absolute inset-0">
                {/* Vertical line */}
                <div className="absolute top-0 bottom-0 left-1/2 border-l border-yellow-400"></div>
                {/* Horizontal line */}
                <div className="absolute left-0 right-0 top-1/2 border-t border-yellow-400"></div>
              </div>

              {/* Text Content Grid */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                {/* Top Left - Swim Wear & Intimates */}
                <div className="flex flex-col justify-center items-end p-10 text-end">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Wired & non wired bra,
                    <br />
                    Panties & shorts, Body suites,
                    <br />
                    cover-ups, Smoked bra.
                  </p>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 uppercase tracking-wide">
                    SWIM WEAR & INTIMATES
                  </h3>
                </div>

                {/* Top Right - Active Wear */}
                <div className="flex flex-col justify-center items-start p-10 text-start">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Sport bra,
                    <br />
                    Leggings
                  </p>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 uppercase tracking-wide">
                    ACTIVE WEAR
                  </h3>
                </div>

                {/* Bottom Left - Casual Wear */}
                <div className="flex flex-col justify-center items-end p-10 text-end">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Ladies Blouse
                    <br />
                    T-shirts and pants
                  </p>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 uppercase tracking-wide">
                    CASUAL WEAR
                  </h3>
                </div>

                {/* Bottom Right - Lounge Wear */}
                <div className="flex flex-col justify-center items-start p-10 text-start">
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    Satin sleep shirts, Cozy
                    <br />
                    jump suites & Tops,
                    <br />
                    Fleece hoodie
                  </p>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 uppercase tracking-wide">
                    LOUNGE WEAR
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
