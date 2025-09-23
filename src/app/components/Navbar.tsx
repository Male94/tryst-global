"use client";

import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#vision", label: "Vision" },
    { href: "#mission", label: "Mission" },
    { href: "#development", label: "Development Center" },
    { href: "#products", label: "Products" },
    { href: "#sourcing", label: "Global Sourcing" },
    { href: "#manufacturing", label: "Manufacturing" },
    { href: "#training", label: "Training Center" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          Tryst Global
        </Link>
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-700">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
