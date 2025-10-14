export type Product = {
  name: string;
  price: number;
  date: string;
  images: string[];
  category:
    | "Swim Wear"
    | "Intimates"
    | "Casual Wear"
    | "Active Wear"
    | "Lounge Wear";
  order: number;
};

// Base array before numbering
const baseProducts: Omit<Product, "order">[] = [
  // --- Swim Wear ---
  {
    name: "CLASSIC PU BRA",
    price: 1000,
    date: "October 2025",
    images: ["/images/products/CLASSIC PU BRA.jpg"],
    category: "Swim Wear",
  },
  {
    name: "CLASSIC STRING BIKINI",
    price: 1500,
    date: "October 2025",
    images: ["/images/products/CLASSIC STRING BIKINI.jpg"],
    category: "Swim Wear",
  },
  {
    name: "CLASSIC ONE PIECE SWIMSUITE",
    price: 1800,
    date: "October 2025",
    images: ["/images/products/CLASSIC ONE PIECE SWIMSUITE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "SIDE CUTOUT ONE PIECE",
    price: 1700,
    date: "October 2025",
    images: ["/images/products/SIDE CUTOUT ONE PIECE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "STRAPPED CUTOUT ONE PIECE",
    price: 2000,
    date: "October 2025",
    images: ["/images/products/STRAPPED CUTOUT ONE PIECE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "STRING CUTOUT ONE PIECE",
    price: 1900,
    date: "October 2025",
    images: ["/images/products/STRING CUTOUT ONE PIECE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "GIRLS 2PC BIKINI",
    price: 900,
    date: "October 2025",
    images: ["/images/products/GIRLS 2PC BIKINI.jpg"],
    category: "Swim Wear",
  },
  {
    name: "GIRLS SMOCKING BANDEAU",
    price: 1100,
    date: "October 2025",
    images: ["/images/products/GIRLS SMOCKING BANDEAU.jpg"],
    category: "Swim Wear",
  },
  {
    name: "GIRLS TWIST TOP",
    price: 950,
    date: "October 2025",
    images: ["/images/products/GIRLS TWIST TOP.jpg"],
    category: "Swim Wear",
  },
  {
    name: "CUTOUT RUFFLE ONE PIECE",
    price: 2000,
    date: "October 2025",
    images: ["/images/products/CUTOUT RUFFLE ONE PIECE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "RUFFLE STRAP CUTOUT ONE PIECE",
    price: 1900,
    date: "October 2025",
    images: ["/images/products/RUFFLE STRAP CUTOUT ONE PIECE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "V-NECK RUFFLE ONE PIECE",
    price: 1800,
    date: "October 2025",
    images: ["/images/products/V-NECK RUFFLE ONE PIECE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "2CUP WIRED BRA TOP",
    price: 1200,
    date: "October 2025",
    images: ["/images/products/2CUP WIRED BRA TOP.jpg"],
    category: "Swim Wear",
  },
  {
    name: "MATELASSE WIRED TOP",
    price: 1600,
    date: "October 2025",
    images: ["/images/products/MATELASSE WIRED TOP.jpg"],
    category: "Swim Wear",
  },
  {
    name: "SMOCKED UNDERWIRE BIKINI TOP",
    price: 1200,
    date: "October 2025",
    images: ["/images/products/SMOCKED UNDERWIRE BIKINI TOP.jpg"],
    category: "Swim Wear",
  },
  {
    name: "HIGH-LEG CHEEKY BIKINI BOTTOM",
    price: 1300,
    date: "October 2025",
    images: ["/images/products/HIGH-LEG CHEEKY BIKINI BOTTOM.jpg"],
    category: "Swim Wear",
  },
  {
    name: "LETTUCE EDGE FRILLED BANDEAU TOP",
    price: 1400,
    date: "October 2025",
    images: ["/images/products/LETTUCE EDGE FRILLED BANDEAU TOP.jpg"],
    category: "Swim Wear",
  },
  {
    name: "SMOCKING BRALETTE",
    price: 1100,
    date: "October 2025",
    images: ["/images/products/SMOCKING BRALETTE.jpg"],
    category: "Swim Wear",
  },
  {
    name: "STRAPPING CLASSIC BIKINI BOTTOM",
    price: 1300,
    date: "October 2025",
    images: ["/images/products/STRAPPING CLASSIC  BIKINI BOTTOM.jpg"],
    category: "Swim Wear",
  },
  {
    name: "STRAPPING HIGH WAIST",
    price: 1400,
    date: "October 2025",
    images: ["/images/products/STRAPPING HIGH WAIST.jpg"],
    category: "Swim Wear",
  },
  {
    name: "STRAPPING TOP",
    price: 1100,
    date: "October 2025",
    images: ["/images/products/STRAPPING TOP.jpg"],
    category: "Swim Wear",
  },

  // --- Casual Wear ---
  // ...Array.from({ length: 9 }, (_, i) => ({
  //   name: `CASUAL WEAR ${i + 1}`,
  //   price: 900 + i * 50,
  //   date: "October 2025",
  //   images: [`/images/products/Casual/${i + 1}.jpg`],
  //   category: "Casual Wear",
  // })),

  // --- Lounge Wear ---
  // ...Array.from({ length: 6 }, (_, i) => ({
  //   name: `SLEEP WEAR ${i + 1}`,
  //   price: 900 + i * 50,
  //   date: "October 2025",
  //   images: [`/images/products/Sleep wear/${i + 1}.jpg`],
  //   category: "Lounge Wear",
  // })),

  // --- Active Wear ---
  // ...Array.from({ length: 6 }, (_, i) => ({
  //   name: `ACTIVE WEAR ${i + 1}`,
  //   price: 900 + i * 50,
  //   date: "October 2025",
  //   images: [`/images/products/Active Wear/${i + 1}.jpeg`],
  //   category: "Active Wear",
  // })),
];

// Apply unique incremental order IDs
export const products: Product[] = baseProducts.map((p, i) => ({
  ...p,
  order: i + 1,
}));
