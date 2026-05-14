"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";

const queryClient = new QueryClient();

const networks = {
  mainnet: { url: "https://sui-mainnet.gateway.tatum.io" },
  testnet: { url: "https://sui-testnet.gateway.tatum.io" },
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networks} defaultNetwork="mainnet">
        <WalletProvider autoConnect>
          {children}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}