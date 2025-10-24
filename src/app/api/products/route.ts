import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Allowed categories for safety
const allowedCategories = [
  "Swim Wear",
  "Intimates",
  "Casual Wear",
  "Active Wear",
  "Lounge Wear",
] as const;

type Category = (typeof allowedCategories)[number];

/** Upload file to your HostHere PHP API */
async function uploadToHosthere(
  file: File,
  category: Category
): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("category", category);

  // 🔗 CHANGE THIS to your real domain & upload script path
  const endpoint = "https://yourdomain.com/api/upload.php";

  const res = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!data.success) {
    console.error("❌ Upload failed:", data.message);
    throw new Error(data.message || "Upload failed");
  }

  console.log("✅ Uploaded to HostHere:", data.url);
  return data.url;
}

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

    if (!allowedCategories.includes(category as Category)) {
      return NextResponse.json(
        { success: false, message: `Invalid category: ${category}` },
        { status: 400 }
      );
    }

    const savedFiles: string[] = [];

    for (const file of files) {
      const url = await uploadToHosthere(file, category as Category);
      savedFiles.push(url);
    }

    // Save to DB
    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        date: new Date(date),
        category: category as Category,
        order: Number(order),
        images: savedFiles,
      },
    });

    return NextResponse.json({ success: true, product });
  } catch (err: unknown) {
    console.error("❌ Product upload failed:", err);
    return NextResponse.json(
      { success: false, message: (err as Error).message || "Unexpected error" },
      { status: 500 }
    );
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
