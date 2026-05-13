"use client";

import Link from "next/link";

import ConnectWallet from "@/components/wallet-button/connect-wallet";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-inner">

        <Link
          href="/"
          className="logo-wrap"
        >
          <div className="logo-glow" />

          <div>
            <h2>WST-MEMORY</h2>

            <p>
              WAVE SYNAPTIC TRANSFER
            </p>
          </div>
        </Link>

        <nav className="nav-links">

          <Link href="/">
            Home
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/assistant">
            AI Assistant
          </Link>

          <Link href="/upload">
            Upload
          </Link>

          <Link href="/vault">
            Vault
          </Link>

        </nav>

        <ConnectWallet />

      </div>

    </header>
  );
}