"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/app/components/Products/ProductCard";
import { Product } from "@/app/data/products"; // ✅ use Prisma’s Product type instead

export default function ProductsPage() {
  const categories = useMemo(
    () => [
      "All",
      "Swim Wear",
      "Intimates",
      "Casual Wear",
      "Active Wear",
      "Lounge Wear",
    ],
    []
  );

  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch products from Prisma API
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        console.error("❌ Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  // ✅ Detect ?category= param on page load
  useEffect(() => {
    const param = searchParams.get("category");
    if (param) {
      const match = categories.find(
        (cat) => cat.toLowerCase().replace(/\s+/g, "-") === param.toLowerCase()
      );
      if (match) setActiveCategory(match);
    }
  }, [searchParams, categories]);

  // ✅ Update URL when category changes
  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    router.replace(
      `/products${
        cat === "All"
          ? ""
          : `?category=${cat.toLowerCase().replace(/\s+/g, "-")}`
      }`
    );
  };

  // ✅ Sort products by `order`
  const sortedProducts = useMemo(
    () => [...products].sort((a, b) => a.order - b.order),
    [products]
  );

  // ✅ Filter by category
  const filteredProducts = useMemo(
    () =>
      activeCategory === "All"
        ? sortedProducts
        : sortedProducts.filter(
            (p) =>
              p.category.toLowerCase().trim() ===
              activeCategory.toLowerCase().trim()
          ),
    [activeCategory, sortedProducts]
  );

  if (loading) {
    return (
      <section className="max-w-full mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl italic text-gray-500">Loading products...</h2>
      </section>
    );
  }

  return (
    <section className="max-w-full mx-auto px-6 py-12">
      <h2 className="text-6xl italic font-serif mb-8 ramillas">Products</h2>

      {/* 🏷 Category Tabs */}
      <div className="flex gap-4 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-6 py-2 rounded-full transition font-bold ${
              activeCategory === cat
                ? "bg-[#f6f4f1] text-black"
                : "hover:bg-gray-200 text-gray-600"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 🛍 Product Grid */}
      <div className="transition-all duration-300">
        <h3 className="text-3xl font-semibold mb-6">{activeCategory}</h3>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-[#f6f4f1] p-5 rounded-2xl">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg italic">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
