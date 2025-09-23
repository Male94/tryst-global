import { Card, CardContent } from "@/app/components/Card";

export default function Testimonials() {
  const reviews = [
    { name: "Ryan Hobart" },
    { name: "Betsy Hall" },
    { name: "Krista Bacchioni" },
  ];

  return (
    <section id="reviews" className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Customer Reviews</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, idx) => (
          <Card key={idx}>
            <CardContent className="p-6">
              <p className="italic mb-4">
                "Boost your product and service's credibility by adding
                testimonials from your clients."
              </p>
              <h4 className="font-semibold">{review.name}</h4>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
