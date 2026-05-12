import Reveal from "@/components/ui/Reveal";

const architectureLayers = [
  "Frontend App",
  "Walrus Storage Layer",
  "Sui Smart Contracts",
  "Tatum RPC Gateway",
  "WST AI Agent System",
];

export default function ArchitectureFlow() {
  return (
    <section
      className="section architecture"
      id="architecture"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div className="eyebrow">
            Architecture
          </div>

          <h2>
            Built on Decentralized
            Infrastructure
          </h2>
        </Reveal>

        <Reveal className="architecture-flow">
          {architectureLayers.map(
            (layer, index) => (
              <>
                <div
                  key={layer}
                  className={`arch-node ${
                    index ===
                    architectureLayers.length -
                      1
                      ? "accent"
                      : ""
                  }`}
                >
                  {layer}
                </div>

                {index !==
                  architectureLayers.length -
                    1 && (
                  <div className="arch-arrow">
                    →
                  </div>
                )}
              </>
            )
          )}
        </Reveal>
      </div>
    </section>
  );
}