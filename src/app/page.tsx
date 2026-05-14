"use client";

import BackgroundEffects from "@/components/layout/BackgroundEffects";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import TrustBar from "@/components/trust/TrustBar";
import HowItWorks from "@/components/features/HowItWorks";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="app-shell min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <HowItWorks />
      <FeaturesGrid />
      <Footer />
    </main>
  );
}