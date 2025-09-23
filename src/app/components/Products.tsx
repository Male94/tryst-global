import { Card, CardContent } from "@/app/components/Card";

export default function Products() {
  const items = [
    {
      title: "Swimwear & Intimates",
      desc: "Wired & non-wired bra, panties, shorts, bodysuits, cover-ups, smoked bra.",
    },
    { title: "Casual Wear", desc: "T-shirts and pants, ladies blouses." },
    {
      title: "Active Wear",
      desc: "Sport bras, leggings, performance outfits.",
    },
    {
      title: "Lounge Wear",
      desc: "Satin sleep shirts, jumpsuits, fleece hoodies.",
    },
  ];

  return (
    <section id="products" className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid md:grid-cols-2 gap-6 text-center">
        {items.map((item, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
