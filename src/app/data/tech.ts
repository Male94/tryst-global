export type Tech = {
  name: string;
  price: number;
  date: string;
  images: string[];
  category: string;
  order: number;
};

// Base array before numbering
const baseTechs: Omit<Tech, "order">[] = [
  // --- Swim Wear ---
  {
    name: "Slide 1",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide1.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 2",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide2.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 3",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide3.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 4",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide4.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 5",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide5.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 6",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide6.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 7",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide7.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 8",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Seams & Stitches/Slide8.JPG"],
    category: "Seams & Stitches",
  },
  {
    name: "Slide 1",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Software/Slide1.JPG"],
    category: "Software",
  },
  {
    name: "Slide 2",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Software/Slide2.JPG"],
    category: "Software",
  },
  {
    name: "Slide 3",
    price: 1000,
    date: "October 2025",
    images: ["/images/tech_profile/Software/Slide3.JPG"],
    category: "Software",
  },
];

// Apply unique incremental order IDs
export const techs: Tech[] = baseTechs.map((p, i) => ({
  ...p,
  order: i + 1,
}));
