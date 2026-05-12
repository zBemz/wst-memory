"use client";

import Reveal from "@/components/ui/Reveal";

export default function AIAgentTerminal() {
  return (
    <section className="section ai-agent" id="ai-agent">
      <div className="container ai-agent-grid">
        <Reveal>
          <div>
            <div className="eyebrow">
              AI Agent Interface
            </div>

            <h2>
              Cinematic Conversational
              Memory Retrieval
            </h2>

            <p>
              A holographic AI terminal
              that can retrieve memories,
              search uploads,
              summarize content,
              and interact with
              blockchain records.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="terminal">
            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="prompt">
                  WST&gt;
                </span>{" "}
                retrieve last upload
              </p>

              <p className="muted">
                “I found 24 memories stored on Walrus.”
              </p>

              <p className="muted">
                “Ownership verified on Sui Mainnet.”
              </p>

              <p className="muted">
                “Your neural memory archive is synchronized.”
              </p>

              <p>
                <span className="prompt">
                  WST&gt;
                </span>{" "}
                summarize project notes
              </p>

              <p className="cursor">
                AI is typing...
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}