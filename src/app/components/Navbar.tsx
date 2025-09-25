"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#sourcing", label: "Global Sourcing" },
    { href: "#development", label: "Development Center" },
    { href: "#training", label: "Training Center" },
    { href: "#contact", label: "Contact Us" },
    { href: "#about", label: "About Us" },
  ];

  return (
    <div>
      {/* Sidebar toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar (Animated) */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 flex flex-col"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <Link href="/" className="text-2xl font-bold text-blue-700">
            Tryst Global
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-4 mt-6 px-6 font-medium text-gray-700 ramillas uppercase">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // closes when clicked
              className="hover:text-blue-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </motion.aside>

      {/* Overlay (click to close) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 backdrop-blur-xs z-30"
        />
      )}
    </div>
  );
}
