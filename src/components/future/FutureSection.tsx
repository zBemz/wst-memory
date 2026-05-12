import Reveal from "@/components/ui/Reveal";

const futureCards = [
  {
    title:
      "Decentralized AI Identities",

    description:
      "Own your AI identity and memory across every platform.",
  },

  {
    title: "AI Memory Cloud",

    description:
      "Infinite storage for your memories and knowledge.",
  },

  {
    title:
      "Neural Knowledge Vaults",

    description:
      "Organize knowledge with AI-powered connections.",
  },

  {
    title:
      "Autonomous AI Agents",

    description:
      "AI agents that understand your history and help you grow.",
  },

  {
    title:
      "Persistent Cognitive Layer",

    description:
      "Building the foundation for long-term AI memory systems.",
  },
];

export default function FutureSection() {
  return (
    <section
      className="section future"
      id="future"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div className="eyebrow">
            The Future
          </div>

          <h2>
            The Future of AI Memory
          </h2>
        </Reveal>

        <div className="future-grid">
          {futureCards.map((card) => (
            <Reveal
              key={card.title}
              className="future-card"
            >
              <h3>{card.title}</h3>

              <p>
                {card.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}