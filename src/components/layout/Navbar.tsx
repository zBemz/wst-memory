'use client';
import { useState } from 'react';
import { ConnectButton } from '@mysten/dapp-kit';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <a href="#hero" className="brand">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 4L45 12V28L32 36L19 28V12L32 4Z" stroke="currentColor" strokeWidth="2.5"/>
              <path d="M32 36V60" stroke="currentColor" strokeWidth="2.5"/>
              <path d="M19 28L32 36L45 28" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5"/>
            </svg>
          </span>
          <span>
            <strong>WST-MEMORY</strong>
            <small>WAVE SYNAPTIC TRANSFER</small>
          </span>
        </a>

        <nav className="nav hidden md:flex gap-8">
          <a href="#how-it-works">How It Works</a>
          <a href="#features">Features</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#architecture">Architecture</a>
          <a href="#future">Future</a>
        </nav>

        <div className="flex items-center gap-4">
          <ConnectButton className="btn btn-primary header-cta" />
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="mobile-nav md:hidden bg-black/95 p-6 flex flex-col gap-4">
          <a href="#how-it-works" className="py-3">How It Works</a>
          <a href="#features" className="py-3">Features</a>
          <a href="#dashboard" className="py-3">Dashboard</a>
          <a href="#architecture" className="py-3">Architecture</a>
          <a href="#future" className="py-3">Future</a>
        </nav>
      )}
    </header>
  );
}