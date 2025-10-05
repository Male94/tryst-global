import ServiceCard from "@/app/components/Services/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      title: "Design and Development",
      description:
        "We translate your concept into a technical sketch, which serves as the blueprint for the sample. We deliver a fully illustrated PDF file including all technical details for your design.",
      points: [
        "Pattern Development",
        "Pattern Grading",
        "Pattern Adjustments",
        "3D Developments",
        "Marker Making",
        "Tech-pack Creations",
        "Pattern Plotting",
        "Sample Making",
      ],
      image: "/images/home/Copilot_20250929_101823.png",
      textBg: "bg-[#8b949d]", // matches your screenshot
      imageBg: "bg-[#b8bb91]", // matches your screenshot
    },
    {
      title: "Sourcing",
      description:
        "At Tryst Global, we believe that great fashion starts with exceptional materials. That’s why we collaborate with trusted suppliers from Vietnam, India, and China regions, renowned for their textile innovation and craftsmanship.",
      points: [
        "Fabric sourcing",
        "All kind of Trim developments",
        "Bra pad developments",
        "Bra wire developments",
      ],
      image: "/images/home/Copilot_20250929_120427.png", // replace with your uploaded image
      textBg: "bg-[#aba08f]", // matches your screenshot
      imageBg: "bg-[#b8bb91]", // matches your screenshot
    },
    {
      title: "MANUFACTURING",
      description: `We are a dynamic apparel production unit
specializing in short-order quantities
with high quality and speed.
`,
      points: [
        "Flexible on Short-Order Quantities.",
        "Maintain high-quality.",
        `Special Seams and stitches
(Smocking | Crochet stitch | Pick stitch)`,
      ],
      image: "/images/home/Copilot_20250929_120427.png", // replace with your uploaded image
      textBg: "bg-[#8b949d]", // matches your screenshot
      imageBg: "bg-[#ede2d7]", // matches your screenshot
    },
    {
      title: "PRIVATE LABELING & BRANDING",
      description: `Are you a designer or entrepreneur ready to
launch your own fashion brand? Whether
you're building your first collection or
scaling up your label, our Sri Lanka-based
manufacturing unit is here to bring your
vision to life—with precision, speed, and
sustainability.
`,
      points: [
        "Tech-Driven Development.",
        `Brand Protection: Your creative assets
are safe with us
`,
      ],
      image: "/images/home/Copilot_20250929_120427.png", // replace with your uploaded image
      textBg: "bg-[#aba08f]", // matches your screenshot
      imageBg: "bg-[#ede2d7]", // matches your screenshot
    },
    {
      title: "TRAINING & DEVELOPMENT",
      description: `Our training center provides individual
and group trainings for students and
corporate employees to enhance their
practical apparel knowledge
`,
      points: [
        `Pattern Training
Gerber | Opti-tex | Lectra`,
        `3D Software Training
CLO | TUKA | Browswear
`,
      ],
      image: "/images/home/Copilot_20250929_120427.png", // replace with your uploaded image
      textBg: "bg-[#8b949d]", // matches your screenshot
      imageBg: "bg-[#ede2d7]", // matches your screenshot
    },
    {
      title: "TEXTILE CONSULTING",
      description: `At Tryst Global, we don’t just manufacture
garments, we empower fashion businesses
with expert textile consulting. With decades
of hands-on experience and a deep network
of trusted suppliers, we guide you from
concept to creation with ensuring your
production is streamlined and cost-effective
`,
      points: [
        `Process utilization`,
        `Cost optimization`,
        `System implementation`,
      ],
      image: "/images/home/Copilot_20250929_120427.png", // replace with your uploaded image
      textBg: "bg-[#aba08f]", // matches your screenshot
      imageBg: "bg-[#ede2d7]", // matches your screenshot
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif italic mb-6">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We provide end-to-end fashion and textile solutions — from design
          sketches to final production.
        </p>
      </section>

      {/* Service Cards */}
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </main>
  );
}
