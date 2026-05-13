"use client";

import BackgroundEffects from "@/components/layout/BackgroundEffects";

import Navbar from "@/components/navbar/Navbar";

import HeroSection from "@/components/hero/HeroSection";

import TrustBar from "@/components/trust/TrustBar";

import HowItWorks from "@/components/features/HowItWorks";

import FeaturesGrid from "@/components/features/FeaturesGrid";

import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="app-shell">

      {/* Background */}
      <BackgroundEffects />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Trust */}
      <TrustBar />

      {/* Workflow */}
      <HowItWorks />

      {/* Features */}
      <FeaturesGrid />

      {/* Footer */}
      <Footer />

    </main>
  );
}