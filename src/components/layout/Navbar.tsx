'use client';
import { useState } from 'react';
import { WalletConnect } from '@/components/wallet/ConnectButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Nội dung header từ index.html của bạn, thay <a class="btn-primary">Connect Wallet</a> bằng <ConnectButton /> */}
      <div className="container header-inner">
        {/* Brand */}
        <a className="brand" href="#hero">
          {/* SVG logo của bạn */}
        </a>

        <nav className="nav hidden md:flex">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#architecture">Architecture</a>
          <a href="#future">Future</a>
        </nav>

        <div className="header-cta">
          <WalletConnect />
        </div>

        {/* Mobile menu toggle + logic từ script.js */}
      </div>
    </header>
  );
}
