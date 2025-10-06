import Image from "next/image";
import Link from "next/link";

export default function ClothingSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="relative bg-[url('/images/Swim.png')] bg-cover bg-center flex-1 md:p-4 lg:p-8 h-[600px] md:h-[800px] w-full">
        <h1 className="absolute md:relative top-3 left-3 ramillas text-4xl lg:text-6xl font-light text-gray-900 leading-tight mb-8 lg:mb-16">
          {`“Clothing that fits your life”`}
        </h1>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-amber-900 flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="max-w-lg w-full">
          <p className="text-xl lg:text-4xl ramillas text-white font-light leading-relaxed text-center">
            We are a dynamic apparel solution provider focused on short-order
            quantities, where creativity meets agility. By joining forces with a
            handpicked network of industry professionals
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="px-8 py-3 border-2 border-white text-white font-light uppercase tracking-wide rounded-full hover:bg-white hover:text-amber-900 transition-colors duration-300 ramillas"
            >
              ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
