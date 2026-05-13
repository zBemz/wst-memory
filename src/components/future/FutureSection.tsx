const future = [
  "Decentralized AI Identities",
  "AI Memory Cloud",
  "Neural Knowledge Vaults",
  "Autonomous AI Agents",
  "Persistent Cognitive Layer",
];

export default function FutureSection() {
  return (
    <section
      className="section"
      id="future"
    >
      <div className="container">

        <div className="section-box">

          <div className="section-heading">

            <div className="eyebrow">
              THE FUTURE
            </div>

            <h2>
              The Future of AI Memory
            </h2>

          </div>

          <div className="feature-grid">

            {future.map((item) => (
              <div
                className="feature-card"
                key={item}
              >

                <div className="feature-icon">
                  ✦
                </div>

                <h3>{item}</h3>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}