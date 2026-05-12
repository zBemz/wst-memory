import BrainVisual from "./BrainVisual";

import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section
      className="hero section"
      id="hero"
    >
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <div className="eyebrow">
            AI-native decentralized memory
            protocol
          </div>

          <h1>
            Own Your <span>AI Memory</span>
          </h1>

          <p className="lead">
            WST-Memory enables users to
            store files, conversations,
            AI memories, and intelligent
            data on decentralized
            infrastructure powered by
            Walrus, secured by Sui, and
            connected through Tatum RPC.
          </p>

          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="#dashboard"
            >
              Connect Wallet
            </a>

            <a
              className="btn btn-secondary"
              href="#dashboard"
            >
              Upload Memory
            </a>

            <a
              className="btn btn-ghost"
              href="#architecture"
            >
              Launch App →
            </a>
          </div>

          <div
            className="hero-badges"
            aria-label="Built on"
          >
            <span>Walrus</span>
            <span>Sui</span>
            <span>Tatum</span>
            <span>MCP</span>
          </div>
        </Reveal>

        <Reveal>
          <BrainVisual />
        </Reveal>
      </div>
    </section>
  );
}