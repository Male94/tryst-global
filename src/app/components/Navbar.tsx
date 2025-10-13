"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "products", label: "Products" },
    {
      label: "Services",
      children: [
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
      ],
    },
    {
      label: "About Us",
      children: [
        { href: "/about#story", label: "Our Story" },
        { href: "/about#team", label: "Our Team" },
      ],
    },
    { href: "/about#contact", label: "Contact Us" },
    { href: "/tech-profile", label: "Tech Profile" },
  ];

  return (
    <div>
      {/* Sidebar toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#d8ccb5]/70"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.4 }}
        className="fixed top-0 left-0 h-screen w-72 h-auto -              
+             bg-gradient-to-b from-[#d8ccb5]/80 to-[#e7dfcf]/80 
              shadow-lg z-40 flex flex-col 
              rounded-r-2xl backdrop-blur-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold ramillas tracking-wide">
            Tryst Global
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-white/20"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-3 mt-4 px-6 text-gray-800 ramillas text-sm uppercase">
          {links.map((link, idx) =>
            link.children ? (
              <div key={idx} className="flex flex-col gap-2">
                <span className="font-semibold">{link.label}</span>
                <div className="flex flex-col gap-2 ml-4 text-gray-700">
                  {link.children.map((sublink) => (
                    <Link
                      key={sublink.href}
                      href={sublink.href}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-black transition-colors"
                      id={sublink.label}
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </motion.aside>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-30"
        />
      )}
    </div>
  );
}
