"use client";
import { ConnectButton } from "@mysten/dapp-kit";
import { Button } from "@/components/ui/button"; // shadcn hoặc custom

export function WalletConnect() {
  return (
    <ConnectButton
      connectText="Connect Slush Wallet"
      className="bg-amber-500 hover:bg-amber-600 text-black font-bold"
    />
  );
}

export default WalletConnect;
