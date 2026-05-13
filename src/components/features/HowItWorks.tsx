const steps = [
  {
    id: "01",
    title: "Capture Memory",
    desc: "Upload files, conversations, and AI interactions."
  },
  {
    id: "02",
    title: "Store on Walrus",
    desc: "Decentralized storage infrastructure."
  },
  {
    id: "03",
    title: "Verify on Sui",
    desc: "Ownership secured on-chain."
  },
  {
    id: "04",
    title: "Access Through AI",
    desc: "Retrieve memories using AI agents."
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section"
      id="workflow"
    >
      <div className="container">

        <div className="section-box">

          <div className="section-heading">

            <div className="eyebrow">
              HOW WST WORKS
            </div>

            <h2>
              The Future of Memory
            </h2>

            <p>
              Fully decentralized AI memory pipeline.
            </p>

          </div>

          <div className="workflow">

            {steps.map((step) => (
              <article key={step.id}>

                <div className="step-icon">
                  {step.id}
                </div>

                <h3>{step.title}</h3>

                <p>{step.desc}</p>

              </article>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}