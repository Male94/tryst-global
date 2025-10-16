"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const categories = [
  "Swim Wear",
  "Intimates",
  "Casual Wear",
  "Active Wear",
  "Lounge Wear",
];

export default function ProductUploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // 🧠 Optional: Protect route (only admins can upload)
  useEffect(() => {
    // if (status === "unauthenticated") {
    //   router.push("/admin/login");
    // } else if (status === "authenticated" && !session?.user?.isAdmin) {
    //   router.push("/not-authorized");
    // }
  }, [status, session, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok && data.success) {
        alert("✅ Product uploaded successfully!");
        e.currentTarget.reset();
        setPreviewImages([]);
      } else {
        alert(`❌ Upload failed: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("❌ Upload error:", err);
      alert("⚠️ Something went wrong while uploading!");
      setLoading(false);
    }
  }

  if (status === "loading") return <p>Loading...</p>;
  // if (!session?.user?.isAdmin) return null;

  return (
    <div className="max-w-2xl mx-auto p-10 m-20 bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Upload Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name */}
        <input
          name="name"
          placeholder="Product Name"
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Price */}
        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Price (e.g. 49.99)"
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Date */}
        <input
          name="date"
          type="date"
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Category Dropdown */}
        <select
          name="category"
          required
          className="w-full border border-gray-300 p-3 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          defaultValue=""
        >
          <option value="" disabled>
            Select Category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Display Order */}
        <input
          name="order"
          type="number"
          placeholder="Display Order (e.g. 1, 2, 3)"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Image Upload */}
        <div>
          <input
            name="images"
            type="file"
            multiple
            accept="image/*"
            required
            className="w-full"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setPreviewImages(files.map((f) => URL.createObjectURL(f)));
            }}
          />

          {previewImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {previewImages.map((src, i) => (
                <div
                  key={i}
                  className="relative w-24 h-24 border rounded overflow-hidden shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`Preview ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-white rounded-lg transition-all ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
  );
}
