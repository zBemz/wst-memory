import Reveal from "@/components/ui/Reveal";

const features = [
  {
    icon: "◈",
    title: "AI Memory Vault",
    description:
      "Persistent decentralized storage for AI memories, chats, and important data.",
  },

  {
    icon: "⟡",
    title: "Neural Storage Layer",
    description:
      "AI-native architecture powered by Walrus decentralized storage.",
  },

  {
    icon: "⬡",
    title: "Sui Ownership Protocol",
    description:
      "On-chain ownership and identity verification on Sui blockchain.",
  },

  {
    icon: "⌬",
    title: "Tatum RPC Infrastructure",
    description:
      "Enterprise-grade RPC for fast, reliable blockchain access.",
  },

  {
    icon: "⟐",
    title: "Encrypted Synaptic Uploads",
    description:
      "Secure, end-to-end encrypted storage for your private memories.",
  },

  {
    icon: "◌",
    title: "AI Retrieval Engine",
    description:
      "Search, summarize, and retrieve memories using advanced AI.",
  },
];

export default function FeaturesGrid() {
  return (
    <section
      className="section features"
      id="features"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div className="eyebrow">
            Core Features
          </div>

          <h2>
            Powerful Features for Your
            AI Memory
          </h2>
        </Reveal>

        <div className="feature-grid">
          {features.map((feature) => (
            <Reveal
              key={feature.title}
              className="feature-card"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}