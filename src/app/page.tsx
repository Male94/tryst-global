import Hero from "@/app/components/Hero";
import ClothingSection from "./components/ClothingSection";
import SolutionsOffered from "./components/SolutionsOffered";
import OurHandWritings from "./components/OurHandWritings";
import CustomerReviews from "./components/CustomerReviews";
import ConnectWithUs from "./components/ConnectWithUs";
import CustomerLogos from "./components/CustomerLogos";
import QualityApproach from "./components/QualityApproach";
import BackToTop from "./components/BackToTop";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="w-full h-full">
        <Hero />

        <ClothingSection />

        <SolutionsOffered />

        <OurHandWritings />

        <CustomerReviews />

        <CustomerLogos />

        <QualityApproach /> 
        <ConnectWithUs />
      </div>
      
      <BackToTop />
    </main>
  );
}
