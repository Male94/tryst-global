import AboutSection from "@/app/components/About/AboutSection";
import VisionMission from "@/app/components/About/VisionMission";
import CapacityInfo from "../components/About/CapacityInfo";
import GarmentJourney from "../components/About/GarmentJourney";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <AboutSection />
      <VisionMission />
      <CapacityInfo />
      <GarmentJourney />
    </main>
  );
}
