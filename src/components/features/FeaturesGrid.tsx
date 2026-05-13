import Reveal from "@/components/ui/Reveal";

const features = [
  { icon: "🧠", title: "AI Memory Vault", desc: "Persistent decentralized storage for AI memories, chats, and important data." },
  { icon: "📦", title: "Neural Storage Layer", desc: "AI-native architecture powered by Walrus decentralized storage." },
  { icon: "🔐", title: "Sui Ownership Protocol", desc: "On-chain ownership and identity verification on Sui blockchain." },
  { icon: "⚡", title: "Tatum RPC Infrastructure", desc: "Enterprise-grade RPC for fast, reliable blockchain access." },
  { icon: "🔒", title: "Encrypted Synaptic Uploads", desc: "Secure, end-to-end encrypted storage for your private memories." },
  { icon: "🔍", title: "AI Retrieval Engine", desc: "Search, summarize, and retrieve memories using advanced AI." },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="eyebrow">CORE FEATURES</div>
          <h2 className="text-5xl font-bold mt-4">Powerful Features for Your AI Memory</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Reveal key={i} className="feature-card p-8 hover:scale-105 transition-all">
              <div className="text-5xl mb-6">{f.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}