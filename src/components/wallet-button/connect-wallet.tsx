"use client";

import {
  ConnectButton,
} from "@mysten/dapp-kit";

export default function ConnectWallet() {
  return (
    <div className="wallet-wrap">
      <ConnectButton />
    </div>
  );
}