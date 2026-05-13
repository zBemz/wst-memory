"use client";

import { ConnectButton } from "@mysten/dapp-kit";

export default function HeroSection() {
  return (
    <section className="hero">

      <div className="container hero-grid">

        <div className="hero-copy">

          <div className="eyebrow">
            AI-NATIVE DECENTRALIZED MEMORY PROTOCOL
          </div>

          <h1>
            Own Your <br />
            <span>AI Memory</span>
          </h1>

          <p className="lead">
            WST-Memory enables users to store,
            retrieve, and interact with AI memories,
            files, and conversations through Walrus,
            Sui, and Tatum infrastructure.
          </p>

          <div className="hero-actions">

            {/* REAL WALLET CONNECT */}
            <div className="hero-wallet-btn">
              <ConnectButton />
            </div>

            {/* UPLOAD PAGE */}
            <a
              href="/upload"
              className="secondary-btn"
            >
              Upload Memory
            </a>

            {/* DASHBOARD PAGE */}
            <a
              href="/dashboard"
              className="ghost-btn"
            >
              Launch App →
            </a>

          </div>

          <div className="hero-badges">
            <span>Walrus</span>
            <span>Sui</span>
            <span>Tatum</span>
            <span>MCP</span>
          </div>

        </div>

        <div className="hero-visual">

          <div className="brain-stage">

            <div className="brain-shell brain-shell-1" />
            <div className="brain-shell brain-shell-2" />
            <div className="brain-shell brain-shell-3" />

            <div className="brain-core" />

            <div className="wst-core">
              WST
            </div>

            <div className="card-float card-float-a">
              Walrus Storage
            </div>

            <div className="card-float card-float-b">
              Sui Network
            </div>

            <div className="card-float card-float-c">
              Tatum RPC
            </div>

            <div className="card-float card-float-d">
              AI Agent
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}