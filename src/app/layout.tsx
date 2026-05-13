import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "WST-MEMORY — Wave Synaptic Transfer",
  description: "AI-native decentralized memory protocol powered by Walrus • Sui • Tatum",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-[#050816]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}