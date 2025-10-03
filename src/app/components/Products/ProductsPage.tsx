"use client";

import { useState } from "react";
import ProductCard from "@/app/components/Products/ProductCard";

export default function ProductsPage() {
  const categories = [
    "Swim Wear & Intimates",
    "Casual Wear",
    "Active Wear",
    "Lounge Wear",
  ];

  const products = [
    {
      name: "Thalia Chair",
      price: 1500,
      date: "October 2025",
      images: [
        "/images/products/chair1.jpg",
        "/images/products/chair1 alt1.jpg",
        "/images/products/chair1 alt2.jpg",
      ],
      category: "Casual Wear",
    },
    {
      name: "Calypso Chair",
      price: 5000,
      date: "September 2025",
      images: [
        "/images/products/chair2.jpg",
        "/images/products/chair2 alt1.jpg",
        "/images/products/chair2 alt2.jpg",
      ],
      category: "Active Wear",
    },
    {
      name: "Bianca Chair",
      price: 2500,
      date: "August 2025",
      images: [
        "/images/products/chair3.jpg",
        "/images/products/chair3 alt1.jpg",
        "/images/products/chair3 alt2.jpg",
      ],
      category: "Lounge Wear",
    },
    {
      name: "2CUP WIRED BRA TOP",
      price: 1200,
      date: "October 2025",
      images: ["/images/products/2CUP WIRED BRA TOP.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "CLASSIC ONE PIECE SWIMSUITE",
      price: 1800,
      date: "October 2025",
      images: ["/images/products/CLASSIC ONE PIECE SWIMSUITE.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "CLASSIC PU BRA",
      price: 1000,
      date: "October 2025",
      images: ["/images/products/CLASSIC PU BRA.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "CLASSIC STRING BIKINI",
      price: 1500,
      date: "October 2025",
      images: ["/images/products/CLASSIC STRING BIKINI.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "CUTOUT RUFFLE ONE PIECE",
      price: 2000,
      date: "October 2025",
      images: ["/images/products/CUTOUT RUFFLE ONE PIECE.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "GIRLS 2PC BIKINI",
      price: 900,
      date: "October 2025",
      images: ["/images/products/GIRLS 2PC BIKINI.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "GIRLS SMOCKING BANDEAU",
      price: 1100,
      date: "October 2025",
      images: ["/images/products/GIRLS SMOCKING BANDEAU.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "GIRLS TWIST TOP",
      price: 950,
      date: "October 2025",
      images: ["/images/products/GIRLS TWIST TOP.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "HIGH-LEG CHEEKY BIKINI BOTTOM",
      price: 1300,
      date: "October 2025",
      images: ["/images/products/HIGH-LEG CHEEKY BIKINI BOTTOM.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "LETTUCE EDGE FRILLED BANDEAU TOP",
      price: 1400,
      date: "October 2025",
      images: ["/images/products/LETTUCE EDGE FRILLED BANDEAU TOP.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "MATELASSE WIRED TOP",
      price: 1600,
      date: "October 2025",
      images: ["/images/products/MATELASSE WIRED TOP.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "RUFFLE STRAP CUTOUT ONE PIECE",
      price: 1900,
      date: "October 2025",
      images: ["/images/products/RUFFLE STRAP CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "SIDE CUTOUT ONE PIECE",
      price: 1700,
      date: "October 2025",
      images: ["/images/products/SIDE CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "SMOCKED UNDERWIRE BIKINI TOP",
      price: 1200,
      date: "October 2025",
      images: ["/images/products/SMOCKED UNDERWIRE BIKINI TOP.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "SMOCKING BRALETTE",
      price: 1100,
      date: "October 2025",
      images: ["/images/products/SMOCKING BRALETTE.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "STRAPPED CUTOUT ONE PIECE",
      price: 2000,
      date: "October 2025",
      images: ["/images/products/STRAPPED CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "STRAPPING CLASSIC BIKINI BOTTOM",
      price: 1300,
      date: "October 2025",
      images: ["/images/products/STRAPPING CLASSIC  BIKINI BOTTOM.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "STRAPPING HIGH WAIST",
      price: 1400,
      date: "October 2025",
      images: ["/images/products/STRAPPING HIGH WAIST.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "STRAPPING TOP",
      price: 1100,
      date: "October 2025",
      images: ["/images/products/STRAPPING TOP.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "STRING CUTOUT ONE PIECE",
      price: 1900,
      date: "October 2025",
      images: ["/images/products/STRING CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear & Intimates",
    },
    {
      name: "V-NECK RUFFLE ONE PIECE",
      price: 1800,
      date: "October 2025",
      images: ["/images/products/V-NECK RUFFLE ONE PIECE.jpg"],
      category: "Swim Wear & Intimates",
    },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="max-w-full mx-auto px-6 py-12">
      <h2 className="text-6xl italic font-serif mb-8 ramillas">Products</h2>

      {/* Tabs */}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-6 py-2 rounded-full transition font-bold ${
            activeCategory === "All" ? "bg-[#f6f4f1]" : " hover:bg-gray-200"
          }`}
        >
          ALL
        </button>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full transition font-bold ${
              activeCategory === cat ? "bg-[#f6f4f1]" : " hover:bg-gray-200"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-[#f6f4f1] p-5 rounded-2xl">
        {filteredProducts.map((p, idx) => (
          <ProductCard key={idx} {...p} />
        ))}
      </div>
    </section>
  );
}
