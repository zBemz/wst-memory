import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <section
      className="section how"
      id="how-it-works"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div className="eyebrow">
            How WST Works
          </div>

          <h2>
            The Future of Memory is
            Decentralized
          </h2>

          <p>
            From capture to AI retrieval —
            fully decentralized, verified,
            and secured.
          </p>
        </Reveal>

        <Reveal className="workflow">
          <article>
            <div className="step-icon">
              01
            </div>

            <h3>Capture Memory</h3>

            <p>
              Upload files, conversations,
              images, or any data to your
              memory vault.
            </p>
          </article>

          <div className="workflow-line"></div>

          <article>
            <div className="step-icon">
              02
            </div>

            <h3>Store on Walrus</h3>

            <p>
              Your data is stored on
              Walrus, a decentralized
              storage protocol.
            </p>
          </article>

          <div className="workflow-line"></div>

          <article>
            <div className="step-icon">
              03
            </div>

            <h3>Verify on Sui</h3>

            <p>
              Ownership is recorded on
              Sui blockchain through
              smart contracts.
            </p>
          </article>

          <div className="workflow-line"></div>

          <article>
            <div className="step-icon">
              04
            </div>

            <h3>Access Through AI</h3>

            <p>
              Retrieve, search, and
              interact with your memories
              using AI-powered interfaces.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}