"use client";

import BackgroundEffects from "@/components/layout/BackgroundEffects";

import Navbar from "@/components/navbar/Navbar";

import DashboardPreview from "@/components/dashboard/DashboardPreview";

import AIAgentTerminal from "@/components/ai/AIAgentTerminal";

import ArchitectureFlow from "@/components/architecture/ArchitectureFlow";

import FutureSection from "@/components/future/FutureSection";

import Footer from "@/components/footer/Footer";

export default function DashboardPage() {
  return (
    <main className="app-shell">

      {/* Background */}
      <BackgroundEffects />

      {/* Navbar */}
      <Navbar />

      {/* Dashboard */}
      <DashboardPreview />

      {/* AI Assistant */}
      <AIAgentTerminal />

      {/* Architecture */}
      <ArchitectureFlow />

      {/* Future */}
      <FutureSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}