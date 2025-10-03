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
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
      ],
      category: "Casual Wear",
    },
    {
      name: "Calypso Chair",
      price: 5000,
      date: "September 2025",
      images: [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
      ],
      category: "Active Wear",
    },
    {
      name: "Bianca Chair",
      price: 2500,
      date: "August 2025",
      images: [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
      ],
      category: "Lounge Wear",
    },
    {
      name: "Thalia Chair",
      price: 1500,
      date: "October 2025",
      images: [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg",
      ],
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
