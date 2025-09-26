import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function ConnectWithUs() {
  return (
    <section className="py-16 px-4 bg-gray-100 relative overflow-hidden bg-[url('/images/OurHandWritingsIMG.png')] bg-fill md:bg-cover bg-center">
      <div className="max-w-7xl mx-auto relative">
        {/* Background clothing rack image */}
        {/* <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/OurHandWritingsIMG.png"
              alt="Clothing rack background"
              fill
              className="object-fill"
            />
          </div>
        </div> */}

        {/* Main heading */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl lg:text-6xl font-light ramillas">
            Connect with us!
          </h2>
        </div>

        {/* Contact information grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-72 relative z-10">
          {/* Sri Lanka Office */}
          <div className="text-center p-4 bg-white/60 rounded-2xl flex flex-col justify-center">
            <h3 className="text-4xl lg:text-5xl font-light text-white mb-8 uppercase tracking-wide ramillas">
              SRI LANKA
            </h3>

            <div className="space-y-8">
              {/* <div className="bg-white/50 rounded-xl p-6"> */}
              <h4 className="text-xl font-semibold  mb-2 uppercase tracking-wide ramillas">
                EMAIL
              </h4>
              <p className="text-lg text-gray-700 fraunces">
                MarketingSL@trystglobal.com
              </p>
              {/* </div> */}

              {/* <div className="bg-white/50 rounded-xl p-6"> */}
              <h4 className="text-xl font-semibold mb-2 uppercase tracking-wide ramillas">
                PHONE
              </h4>
              <p className="text-lg text-gray-700 fraunces">(02) 456-7890</p>
              {/* </div> */}
            </div>
          </div>

          {/* Vietnam Office */}
          <div className="text-center p-4 bg-white/60 rounded-2xl flex flex-col justify-center">
            <h3 className="text-4xl lg:text-5xl font-light text-white mb-8 uppercase tracking-wide ramillas">
              VIETNAM
            </h3>

            <div className="space-y-8">
              {/* <div className="bg-white/50 rounded-xl p-6"> */}
              <h4 className="text-xl font-semibold  mb-2 uppercase tracking-wide ramillas">
                EMAIL
              </h4>
              <p className="text-lg text-gray-700 fraunces">
                Marketingvn@trystglobal.com
              </p>
              {/* </div> */}

              {/* <div className="bg-white/50 rounded-xl p-6"> */}
              <h4 className="text-xl font-semibold mb-2 uppercase tracking-wide ramillas">
                PHONE
              </h4>
              <p className="text-lg text-gray-700 fraunces">(02) 456-7890</p>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-16 relative z-10">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
            <Facebook className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
            <Linkedin className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
            <Instagram className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
