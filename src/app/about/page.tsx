import AboutSection from "@/app/components/About/AboutSection";
import VisionMission from "@/app/components/About/VisionMission";
import CapacityInfo from "@/app/components/About/CapacityInfo";
import GarmentJourney from "@/app/components/About/GarmentJourney";
import OurTeam from "@/app/components/About/OurTeam";
import StartProject from "../components/About/StartProject";

export default function AboutPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <AboutSection />
      <VisionMission />
      <CapacityInfo />
      <GarmentJourney />
      <OurTeam />
      <StartProject />
    </main>
  );
}
