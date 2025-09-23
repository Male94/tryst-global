import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Section from "@/app/components/Section";
import Products from "@/app/components/Products";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />

      <Section id="vision" title="Our Vision">
        A placeholder for your company vision statement.
      </Section>

      <Section id="mission" title="Our Mission" bg="bg-gray-50">
        A placeholder for your mission statement.
      </Section>

      <Section id="development" title="Development Center">
        We utilize advanced pattern technology and 3D design to enhance our
        creative process.
      </Section>

      <Products />

      <Section id="sourcing" title="Global Sourcing" bg="bg-gray-50">
        We collaborate with suppliers from Vietnam, India and China to source
        stylish materials.
      </Section>

      <Section id="manufacturing" title="Manufacturing">
        A dynamic apparel production unit specializing in short-order
        quantities.
      </Section>

      <Section id="training" title="Training Center" bg="bg-gray-50">
        Placeholder for training initiatives to empower talent.
      </Section>

      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
