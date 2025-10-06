import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
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
        <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-1 md:w-[400px]">
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
        <div className="col-span-12 md:col-span-2 flex flex-col space-y-3 mt-6 md:mt-0">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {`No 121 St.Joseph's road, Kanuwana, Jaela.`}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span className="text-sm">MarketingSL@trystglobal.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+94 77 973 7096</span>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white/20 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
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
