const features = [
  {
    title: "AI Memory Vault",
    desc: "Persistent AI-native memory storage."
  },
  {
    title: "Neural Storage Layer",
    desc: "Walrus decentralized infrastructure."
  },
  {
    title: "Sui Ownership",
    desc: "Blockchain verification system."
  },
  {
    title: "Tatum RPC",
    desc: "Enterprise-grade RPC access."
  },
  {
    title: "Encrypted Uploads",
    desc: "Secure end-to-end encryption."
  },
  {
    title: "AI Retrieval Engine",
    desc: "Search and summarize memories."
  },
];

export default function FeaturesGrid() {
  return (
    <section
      className="section"
      id="features"
    >
      <div className="container">

        <div className="section-box">

          <div className="section-heading">

            <div className="eyebrow">
              CORE FEATURES
            </div>

            <h2>
              Powerful Features
            </h2>

          </div>

          <div className="feature-grid">

            {features.map((item) => (
              <div
                className="feature-card"
                key={item.title}
              >

                <div className="feature-icon">
                  ✦
                </div>

                <h3>{item.title}</h3>

                <p>{item.desc}</p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}