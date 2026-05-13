"use client";

import Navbar from "@/components/navbar/Navbar";
import BackgroundEffects from "@/components/layout/BackgroundEffects";

import { UploadForm } from "@/components/upload/upload-form";

export default function UploadPage() {
  return (
    <main className="app-shell min-h-screen">

      {/* Background */}
      <BackgroundEffects />

      {/* Navbar */}
      <Navbar />

      {/* Upload Content */}
      <section className="relative z-10 pt-40 pb-24">

        <div className="container max-w-5xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-14">

            <div className="eyebrow mb-5">
              WALRUS DECENTRALIZED STORAGE
            </div>

            <h1 className="text-6xl font-black tracking-tight text-[#0f172a] leading-none">
              Upload Your
              <span className="block bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                AI Memory
              </span>
            </h1>

            <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Store files permanently on Walrus using Sui blockchain infrastructure
              powered by Tatum enterprise RPC.
            </p>

          </div>

          {/* Upload Form */}
          <UploadForm />

        </div>

      </section>

    </main>
  );
}