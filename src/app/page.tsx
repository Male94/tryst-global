import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Section from "@/app/components/Section";
import Products from "@/app/components/Products";
import Testimonials from "@/app/components/Testimonials";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import ClothingSection from "./components/ClothingSection";
import SearchField from "./components/SearchField";
import SolutionsOffered from "./components/SolutionsOffered";
import OurHandWritings from "./components/OurHandWritings";
import CustomerReviews from "./components/CustomerReviews";
import ConnectWithUs from "./components/ConnectWithUs";
import CustomerLogos from "./components/CustomerLogos";
import QualityApproach from "./components/QualityApproach";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      <ClothingSection />

      <SolutionsOffered />

      <OurHandWritings />

      <CustomerReviews />

      <CustomerLogos />

      <QualityApproach />
      {/* <ConnectWithUs /> */}
    </main>
  );
}
