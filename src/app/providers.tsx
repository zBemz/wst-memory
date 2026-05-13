"use client";

import "@mysten/dapp-kit/dist/index.css";

import {
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

/* TATUM ENTERPRISE RPC */
const networks = {
  mainnet: {
    url: "https://sui-mainnet.gateway.tatum.io",
  },

  testnet: {
    url: "https://sui-testnet.gateway.tatum.io",
  },

  devnet: {
    url: "https://sui-devnet.gateway.tatum.io",
  },
};

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>

      <SuiClientProvider
        networks={networks}
        defaultNetwork="mainnet"
      >

        <WalletProvider autoConnect>
          {children}
        </WalletProvider>

      </SuiClientProvider>

    </QueryClientProvider>
  );
}