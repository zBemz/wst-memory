"use client";
import { ConnectButton } from "@mysten/dapp-kit";
import { Network } from "lucide-react";

export function TopBar() {
  return (
    <header className="border-b border-white/10 bg-black/80 backdrop-blur-xl px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 text-sm text-amber-400">
        <Network className="w-4 h-4" />
        Sui Mainnet • Tatum RPC
      </div>

      <div className="flex items-center gap-4">
        <ConnectButton />
      </div>
    </header>
  );
}