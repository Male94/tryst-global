import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { PrismaClient } from "@prisma/client";
import { Product } from "@/app/data/products";

const prisma = new PrismaClient();

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

    const allowedCategories = [
      "Swim Wear",
      "Intimates",
      "Casual Wear",
      "Active Wear",
      "Lounge Wear",
    ] as const;

    if (!allowedCategories.includes(category as Product["category"])) {
      return NextResponse.json(
        { success: false, message: `Invalid category: ${category}` },
        { status: 400 }
      );
    }

    const uploadDir = path.join(
      process.cwd(),
      "public",
      "images",
      "products",
      category
    );

    fs.mkdirSync(uploadDir, { recursive: true });

    const savedFiles: string[] = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "_")}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);
      savedFiles.push(`/images/products/${category}/${fileName}`);
    }

    // ✅ Save to database using Prisma
    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        date: new Date(date),
        category,
        order: Number(order),
        images: savedFiles, // JSON field in Prisma
      },
    });

    console.log("✅ Product saved to DB:", product);

    return NextResponse.json({ success: true, product });
  } catch (err: unknown) {
    console.error("❌ Upload error:", err);
    const message =
      err instanceof Error ? err.message : "An unexpected error occurred";

    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { order: "asc" },
    });
    return NextResponse.json({ success: true, products });
  } catch (err) {
    console.error("❌ Failed to fetch products:", err);
    return NextResponse.json(
      { success: false, message: "Failed to load products" },
      { status: 500 }
    );
  }
}
