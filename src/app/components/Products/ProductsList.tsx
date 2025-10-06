"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/app/components/Products/ProductCard";

type Product = {
  name: string;
  price: number;
  date: string;
  images: string[];
  category: string;
  order: number;
};

export default function ProductsPage() {
  const categories = useMemo(
    () => [
      "Swim Wear",
      "Intimates",
      "Casual Wear",
      "Active Wear",
      "Lounge Wear",
    ],
    []
  );

  const products = [
    {
      name: "CLASSIC PU BRA",
      price: 1000,
      date: "October 2025",
      images: ["/images/products/CLASSIC PU BRA.jpg"],
      category: "Swim Wear",
      order: 1,
    },
    {
      name: "CLASSIC STRING BIKINI",
      price: 1500,
      date: "October 2025",
      images: ["/images/products/CLASSIC STRING BIKINI.jpg"],
      category: "Swim Wear",
      order: 2,
    },
    {
      name: "CLASSIC ONE PIECE SWIMSUITE",
      price: 1800,
      date: "October 2025",
      images: ["/images/products/CLASSIC ONE PIECE SWIMSUITE.jpg"],
      category: "Swim Wear",
      order: 3,
    },
    {
      name: "SIDE CUTOUT ONE PIECE",
      price: 1700,
      date: "October 2025",
      images: ["/images/products/SIDE CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear",
      order: 4,
    },
    {
      name: "STRAPPED CUTOUT ONE PIECE",
      price: 2000,
      date: "October 2025",
      images: ["/images/products/STRAPPED CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear",
      order: 5,
    },
    {
      name: "STRING CUTOUT ONE PIECE",
      price: 1900,
      date: "October 2025",
      images: ["/images/products/STRING CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear",
      order: 6,
    },
    {
      name: "GIRLS 2PC BIKINI",
      price: 900,
      date: "October 2025",
      images: ["/images/products/GIRLS 2PC BIKINI.jpg"],
      category: "Swim Wear",
      order: 7,
    },
    {
      name: "GIRLS SMOCKING BANDEAU",
      price: 1100,
      date: "October 2025",
      images: ["/images/products/GIRLS SMOCKING BANDEAU.jpg"],
      category: "Swim Wear",
      order: 8,
    },
    {
      name: "GIRLS TWIST TOP",
      price: 950,
      date: "October 2025",
      images: ["/images/products/GIRLS TWIST TOP.jpg"],
      category: "Swim Wear",
      order: 9,
    },
    {
      name: "CUTOUT RUFFLE ONE PIECE",
      price: 2000,
      date: "October 2025",
      images: ["/images/products/CUTOUT RUFFLE ONE PIECE.jpg"],
      category: "Swim Wear",
      order: 10,
    },
    {
      name: "RUFFLE STRAP CUTOUT ONE PIECE",
      price: 1900,
      date: "October 2025",
      images: ["/images/products/RUFFLE STRAP CUTOUT ONE PIECE.jpg"],
      category: "Swim Wear",
      order: 11,
    },
    {
      name: "V-NECK RUFFLE ONE PIECE",
      price: 1800,
      date: "October 2025",
      images: ["/images/products/V-NECK RUFFLE ONE PIECE.jpg"],
      category: "Swim Wear",
      order: 12,
    },
    {
      name: "2CUP WIRED BRA TOP",
      price: 1200,
      date: "October 2025",
      images: ["/images/products/2CUP WIRED BRA TOP.jpg"],
      category: "Swim Wear",
      order: 13,
    },
    {
      name: "MATELASSE WIRED TOP",
      price: 1600,
      date: "October 2025",
      images: ["/images/products/MATELASSE WIRED TOP.jpg"],
      category: "Swim Wear",
      order: 14,
    },
    {
      name: "SMOCKED UNDERWIRE BIKINI TOP",
      price: 1200,
      date: "October 2025",
      images: ["/images/products/SMOCKED UNDERWIRE BIKINI TOP.jpg"],
      category: "Swim Wear",
      order: 15,
    },
    {
      name: "HIGH-LEG CHEEKY BIKINI BOTTOM",
      price: 1300,
      date: "October 2025",
      images: ["/images/products/HIGH-LEG CHEEKY BIKINI BOTTOM.jpg"],
      category: "Swim Wear",
      order: 16,
    },
    {
      name: "LETTUCE EDGE FRILLED BANDEAU TOP",
      price: 1400,
      date: "October 2025",
      images: ["/images/products/LETTUCE EDGE FRILLED BANDEAU TOP.jpg"],
      category: "Swim Wear",
      order: 17,
    },
    {
      name: "SMOCKING BRALETTE",
      price: 1100,
      date: "October 2025",
      images: ["/images/products/SMOCKING BRALETTE.jpg"],
      category: "Swim Wear",
      order: 18,
    },
    {
      name: "STRAPPING CLASSIC BIKINI BOTTOM",
      price: 1300,
      date: "October 2025",
      images: ["/images/products/STRAPPING CLASSIC  BIKINI BOTTOM.jpg"],
      category: "Swim Wear",
      order: 19,
    },
    {
      name: "STRAPPING HIGH WAIST",
      price: 1400,
      date: "October 2025",
      images: ["/images/products/STRAPPING HIGH WAIST.jpg"],
      category: "Swim Wear",
      order: 20,
    },
    {
      name: "STRAPPING TOP",
      price: 1100,
      date: "October 2025",
      images: ["/images/products/STRAPPING TOP.jpg"],
      category: "Swim Wear",
      order: 21,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const searchParams = useSearchParams();
  const router = useRouter();

  // Detect ?category= parameter on first load
  useEffect(() => {
    const param = searchParams.get("category");
    if (param) {
      const match = categories.find(
        (cat) => cat.toLowerCase().replace(/\s+/g, "-") === param.toLowerCase()
      );
      if (match) {
        setActiveCategory(match);
        setTimeout(() => {
          categoryRefs.current[match]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 200);
      }
    }
  }, [searchParams, categories]);

  // Handle tab clicks
  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    router.replace(
      `/products${
        cat === "All"
          ? ""
          : `?category=${cat.toLowerCase().replace(/\s+/g, "-")}`
      }`
    );
    setTimeout(() => {
      if (cat !== "All") {
        categoryRefs.current[cat]?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  };

  // Sort products by order
  const sortByOrder = (arr: Product[]) =>
    [...arr].sort((a, b) => a.order - b.order);

  return (
    <section className="max-w-full mx-auto px-6 py-12 scroll-smooth">
      <h2 className="text-6xl italic font-serif mb-8 ramillas">Products</h2>

      {/* Tabs */}
      <div className="flex gap-4 flex-wrap mb-10">
        <button
          onClick={() => handleCategoryClick("All")}
          className={`px-6 py-2 rounded-full transition font-bold ${
            activeCategory === "All" ? "bg-[#f6f4f1]" : "hover:bg-gray-200"
          }`}
        >
          ALL
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-6 py-2 rounded-full transition font-bold ${
              activeCategory === cat ? "bg-[#f6f4f1]" : "hover:bg-gray-200"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Category Sections */}
      {categories.map((cat) => (
        <div
          key={cat}
          ref={(el) => {
            categoryRefs.current[cat] = el;
          }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold mb-6">{cat}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-[#f6f4f1] p-5 rounded-2xl">
            {sortByOrder(products.filter((p) => p.category === cat)).map(
              (p) => (
                <ProductCard key={p.order} {...p} />
              )
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
