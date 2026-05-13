import Navbar from "@/components/layout/Navbar";
import BackgroundEffects from "@/components/layout/BackgroundEffects";

import HeroSection from "@/components/hero/HeroSection";
import TrustBar from "@/components/trust/TrustBar";

import HowItWorks from "@/components/features/HowItWorks";
import FeaturesGrid from "@/components/features/FeaturesGrid";

import DashboardPreview from "@/components/dashboard/DashboardPreview";
import AIAgentTerminal from "@/components/ai/AIAgentTerminal";

import ArchitectureFlow from "@/components/architecture/ArchitectureFlow";
import FutureSection from "@/components/future/FutureSection";

import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
      <BackgroundEffects />

      <Navbar />

      <main id="main">
        <HeroSection />
        <TrustBar />

        <HowItWorks />
        <FeaturesGrid />

        <DashboardPreview />
        <AIAgentTerminal />

        <ArchitectureFlow />
        <FutureSection />
      </main>

      <Footer />
    </>
  );
}