import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const servicesLinks = [
    { href: "/services#global-sourcing", label: "Global Sourcing" },
    {
      href: "/services#design-and-development",
      label: "Design and Development",
    },
    { href: "/services#manufacturing", label: "Manufacturing" },
    {
      href: "/services#training-and-development",
      label: "Training & Development",
    },
    { href: "/services#textile-consulting", label: "Textile Consulting" },
    {
      href: "/services#private-labeling-and-branding",
      label: "Private Labeling & Branding",
    },
  ];

  return (
    <footer className="bg-[#7c6537] text-white py-10 px-6">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo */}
        <div className="col-span-12 md:col-span-2 flex-shrink-0">
          <h2 className="text-4xl font-light leading-tight">
            <div className="flex flex-col ramillas w-[130px] text-black">
              <span className="self-start">Tryst</span>
              <span className="self-end -mt-2">Global</span>
            </div>
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-1 md:w-[400px]">
          {/* Left Column */}
          <div className="flex flex-col space-y-2">
            <Link href="/" className="text-sm hover:text-amber-200">
              HOME
            </Link>
            <Link href="/products" className="text-sm hover:text-amber-200">
              PRODUCTS
            </Link>

            {/* Services with sub-links */}
            <div>
              <Link href="/services" className="text-sm hover:text-amber-200">
                SERVICES
              </Link>
              {/* <span className="text-sm font-semibold">SERVICES</span>
              <div className="flex flex-col ml-4 mt-2 space-y-1">
                {servicesLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="text-sm hover:text-amber-200"
                  >
                    {s.label}
                  </Link>
                ))}
              </div> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-2">
            <Link href="/about" className="text-sm hover:text-amber-200">
              ABOUT US
            </Link>
            <Link href="/contact" className="text-sm hover:text-amber-200">
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-end items-end w-full space-y-3 text-sm tracking-wide col-span-12 md:col-span-4">
          <div className="flex items-center space-x-2">
            <MapPin className="w-6 h-6 opacity-80" />
            <span>No 121 St.Joseph’s road, kanuwana, Jaela.</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 opacity-80" />
            <span>MarketingSL@trystglobal.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 opacity-80" />
            <span>+94779737096</span>
          </div>
        </div>

        <div className="bg-[#7c6537] text-white text-center text-md grid col-span-12 fraunces font-light">
          <p>
            Registered under the Companies Act No. 7 of 2025 Sri Lanka - Reg.
            No. PV123456 <br />
            <a href="#" className="text-white underline">
              T&C
            </a>{" "}
            |
            <a href="#" className="text-white underline">
              Privacy Policy
            </a>{" "}
            | Designed by Tryst Design team®
          </p>
          <div className="text-end space-y-1">
            <a href="#" aria-label="Facebook" className="mr-2.5 inline-block">
              <Facebook className="w-5 h-5 text-white align-middle" />
            </a>
            <a href="#" aria-label="LinkedIn" className="mr-2.5 inline-block">
              <Linkedin className="w-5 h-5 text-white align-middle" />
            </a>
            <a href="#" aria-label="Instagram" className="inline-block">
              <Instagram className="w-5 h-5 text-white align-middle" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-3 md:mb-0">
          2025 © All Rights Reserved | Developed by{" "}
          <Link
            href="https://www.facebook.com/ITservices.webiz?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-amber-200"
          >
            TechnoWebiz.com
          </Link>
        </p>

        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Google">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Pinterest">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
