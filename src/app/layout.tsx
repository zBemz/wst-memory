import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "WST-Memory — Wave Synaptic Transfer",

  description:
    "AI-native decentralized memory protocol powered by Walrus, Sui, Tatum RPC, and AI retrieval.",

  keywords: [
    "WST-Memory",
    "Walrus",
    "Sui",
    "Tatum",
    "AI Memory",
    "Decentralized Storage",
    "Web3 AI",
  ],

  authors: [
    {
      name: "WST-Memory",
    },
  ],

  openGraph: {
    title:
      "WST-Memory — Wave Synaptic Transfer",

    description:
      "AI-native decentralized memory infrastructure built on Walrus and Sui.",

    url: "https://wst-memory.vercel.app",

    siteName: "WST-Memory",

    locale: "en_US",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}