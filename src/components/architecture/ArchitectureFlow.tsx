const items = [
  "Frontend",
  "Walrus",
  "Sui",
  "Tatum",
  "AI Agent",
];

export default function ArchitectureFlow() {
  return (
    <section
      className="section"
      id="architecture"
    >
      <div className="container">

        <div className="section-box">

          <div className="section-heading">

            <div className="eyebrow">
              ARCHITECTURE
            </div>

            <h2>
              Decentralized Infrastructure
            </h2>

          </div>

          <div className="workflow">

            {items.map((item) => (
              <article key={item}>

                <div className="step-icon">
                  ✦
                </div>

                <h3>{item}</h3>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}