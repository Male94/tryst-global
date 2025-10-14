import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { Product } from "@/app/data/products";

// ✅ Next.js app router doesn’t use `api.bodyParser` anymore
//    This config only works in the pages directory, so you can remove it safely.
//    FormData is already supported natively in the app router.

// If you're using the /app/api route (not /pages/api), you don’t need this:
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const date = formData.get("date") as string;
    const category = formData.get("category") as string;
    const order = formData.get("order") as string;
    const files = formData.getAll("images") as File[];

    if (!files.length) {
      return NextResponse.json(
        { success: false, message: "No images provided" },
        { status: 400 }
      );
    }

    // 🗂️ Define valid categories to avoid literal type errors
    const allowedCategories = [
      "Swim Wear",
      "Intimates",
      "Casual Wear",
      "Active Wear",
      "Lounge Wear",
    ] as const;

    type Category = (typeof allowedCategories)[number];

    if (!allowedCategories.includes(category as Category)) {
      return NextResponse.json(
        { success: false, message: `Invalid category: ${category}` },
        { status: 400 }
      );
    }

    const categoryTyped = category as Category;

    // 🏗️ Create upload directory path
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "images",
      "products",
      categoryTyped
    );

    // Create directory if it doesn’t exist
    fs.mkdirSync(uploadDir, { recursive: true });

    // 💾 Save uploaded images
    const savedFiles: string[] = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);

      savedFiles.push(`/images/products/${categoryTyped}/${fileName}`);
    }

    // 🧱 Construct new product
    const newProduct: Product = {
      name,
      price: parseFloat(price),
      date,
      category: categoryTyped,
      order: Number(order),
      images: savedFiles,
    };

    console.log("✅ Product saved:", newProduct);

    // 🗃️ Database file path
    const dbPath = path.join(process.cwd(), "public", "data", "products.json");

    fs.mkdirSync(path.dirname(dbPath), { recursive: true });

    let products: Product[] = [];
    if (fs.existsSync(dbPath)) {
      const raw = fs.readFileSync(dbPath, "utf-8");
      products = raw ? JSON.parse(raw) : [];
    }

    products.push(newProduct);
    fs.writeFileSync(dbPath, JSON.stringify(products, null, 2));

    return NextResponse.json({ success: true, product: newProduct });
  } catch (err: unknown) {
    console.error("❌ Upload error:", err);

    const message =
      err instanceof Error ? err.message : "An unexpected error occurred";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
