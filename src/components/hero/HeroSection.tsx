"use client";
import { ConnectButton } from "@mysten/dapp-kit";
import BrainVisual from "./BrainVisual";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-amber-400/30 rounded-full text-amber-400 text-sm">
              AI-NATIVE DECENTRALIZED MEMORY PROTOCOL
            </div>

            <h1 className="text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              Own Your <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">AI Memory</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-lg">
              Store, own, and interact with your memories, files, and digital identity on decentralized infrastructure powered by Walrus, secured by Sui, and connected through Tatum RPC.
            </p>

            <div className="flex flex-wrap gap-4">
              <ConnectButton />
              <a href="/dashboard" className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-amber-400 transition">
                Launch Dashboard →
              </a>
            </div>

            <div className="flex items-center gap-8 text-sm pt-6 border-t border-white/10">
              <div>Built on</div>
              <div className="flex gap-6 text-amber-400">
                <span>Walrus</span>
                <span>Sui</span>
                <span>Tatum</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center">
            <BrainVisual />
          </div>
        </div>
      </div>
    </section>
  );
}