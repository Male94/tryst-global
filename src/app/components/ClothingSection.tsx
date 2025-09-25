import Image from "next/image";

export default function ClothingSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center md:p-8 lg:p-16">
        <div className="h-[500px] w-full  md:w-full md:h-full relative">
          <Image
            src="/images/Swim (1).png"
            alt="Modern chair with clothing"
            fill
            className="w-full h-[500px] md:h-auto object-cover"
            priority
          />
          <h1 className="relative md:relative top-5 left-5 ramillas text-4xl lg:text-6xl font-light text-gray-900 leading-tight mb-8 lg:mb-16">
            {`"Clothing that fits your life"`}
          </h1>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 bg-amber-900 flex flex-col justify-center items-center p-8 lg:p-16">
        <div className="max-w-lg w-full">
          <p className="text-xl lg:text-4xl ramillas text-white font-light leading-relaxed text-center">
            We are a dynamic apparel solution provider focused on short-order
            quantities, where creativity meets agility. By joining forces with a
            handpicked network of industry professionals
          </p>
        </div>
      </div>
    </section>
  );
}
