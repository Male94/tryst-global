"use client";

import ServiceCard from "@/app/components/Services/ServiceCard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  const navItems = [
    { title: "Design and Development", href: "#design-and-development" },
    { title: "Textile Consulting", href: "#textile-consulting" },
    { title: "Sourcing", href: "#global-sourcing" },
    { title: "Manufacturing", href: "#manufacturing" },
    { title: "Branding", href: "#private-labeling-and-branding" },
    { title: "Training & Development", href: "#training-and-development" },
    { title: "Tech Profile", href: "#tech-profile" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset so it activates earlier
      let current = "";

      document.querySelectorAll("section[id]").forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        const id = section.getAttribute("id") || "";

        if (scrollPos >= top && scrollPos < bottom) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Design and Development",
      description:
        "We translate your concept into a technical sketch, which serves as the blueprint for the sample. We deliver a fully illustrated PDF file including all technical details for your design.",
      points: [
        "Pattern Development",
        "Pattern Grading",
        "Pattern Adjustments",
        "3D Developments",
        "Marker Making",
        "Tech-pack Creations",
        "Pattern Plotting",
        "Sample Making",
      ],
      image: "/images/home/Copilot_20250929_101823.png",
      textBg: "bg-[#8b949d]",
      imageBg: "bg-[#b8bb91]",
    },
    {
      title: "Global Sourcing",
      description:
        "At Tryst Global, we believe that great fashion starts with exceptional materials. That’s why we collaborate with trusted suppliers from Vietnam, India, and China regions, renowned for their textile innovation and craftsmanship.",
      points: [
        "Fabric sourcing",
        "All kind of Trim developments",
        "Bra pad developments",
        "Bra wire developments",
      ],
      image: "/images/home/Copilot_20250929_120427.png",
      textBg: "bg-[#aba08f]",
      imageBg: "bg-[#b8bb91]",
    },
    {
      title: "Manufacturing",
      description:
        "We are a dynamic apparel production unit specializing in short-order quantities with high quality and speed.",
      points: [
        "Flexible on Short-Order Quantities.",
        "Maintain high-quality.",
        "Special Seams and stitches (Smocking | Crochet stitch | Pick stitch)",
      ],
      image: "/images/home/Copilot_20250929_120427.png",
      textBg: "bg-[#8b949d]",
      imageBg: "bg-[#ede2d7]",
    },
    {
      title: "Private Labeling & Branding",
      description:
        "Are you a designer or entrepreneur ready to launch your own fashion brand? Whether you're building your first collection or scaling up your label, our Sri Lanka-based manufacturing unit is here to bring your vision to life—with precision, speed, and sustainability.",
      points: [
        "Tech-Driven Development.",
        "Brand Protection: Your creative assets are safe with us",
      ],
      image: "/images/home/Copilot_20250929_120427.png",
      textBg: "bg-[#aba08f]",
      imageBg: "bg-[#ede2d7]",
    },
    {
      title: "Training & Development",
      description:
        "Our training center provides individual and group trainings for students and corporate employees to enhance their practical apparel knowledge.",
      points: [
        "Pattern Training (Gerber | Opti-tex | Lectra)",
        "3D Software Training (CLO | TUKA | Browswear)",
      ],
      image: "/images/home/Copilot_20250929_120427.png",
      textBg: "bg-[#8b949d]",
      imageBg: "bg-[#ede2d7]",
    },
    {
      title: "Textile Consulting",
      description:
        "At Tryst Global, we don’t just manufacture garments — we empower fashion businesses with expert textile consulting.",
      points: [
        "Process utilization",
        "Cost optimization",
        "System implementation",
      ],
      image: "/images/home/Copilot_20250929_120427.png",
      textBg: "bg-[#aba08f]",
      imageBg: "bg-[#ede2d7]",
    },
  ];

  return (
    <main className="w-full scroll-smooth">
      {/* Top Intro Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif italic mb-3 ramillas">
          Our Services
        </h1>
        <p className="max-w-full mx-auto text-lg text-gray-700 ramillas uppercase">
          We provide end-to-end fashion and textile solutions — from design
          sketches to final production.
        </p>
      </section>

      {/* Navigation Buttons */}
      <nav className="flex flex-wrap justify-center gap-4 py-10 sticky top-0 z-30 bg-white/70 backdrop-blur-sm">
        {navItems.map((item, idx) => {
          const isActive =
            active === item.href.replace("#", "") ||
            (active === "" && idx === 0); // first item default

          return (
            <Link
              key={idx}
              href={item.href}
              className={`ramillas px-6 py-2 rounded-full border border-[#735b2b] text-[#735b2b] text-sm uppercase tracking-wide font-medium transition-all
              hover:bg-[#c4a368] hover:text-white ${
                isActive ? "bg-[#c4a368] text-white border-[#c4a368]" : ""
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      {/* Service Sections */}
      {services.map((service, idx) => {
        const sectionId = service.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/&/g, "and");
        return (
          <section id={sectionId} key={idx}>
            <ServiceCard {...service} />
          </section>
        );
      })}
    </main>
  );
}
