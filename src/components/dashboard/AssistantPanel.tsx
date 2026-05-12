export default function AssistantPanel() {
  return (
    <article className="panel assistant-panel">
      <h3>AI Assistant</h3>

      <div className="assistant-chat">
        <p>
          Hello! I’m your WST AI
          memory assistant.
        </p>

        <p>
          How can I help you today?
        </p>

        <div className="chat-bubble user">
          Show my uploaded memories
        </div>

        <div className="chat-bubble ai">
          I found 24 memories stored
          on Walrus. Here are your
          recent ones:
        </div>

        <div className="chat-bubble ai">
          Ownership verified on Sui
          Mainnet.
        </div>

        <div className="chat-bubble ai">
          Your neural memory archive
          is synchronized.
        </div>
      </div>

      <div className="chat-input">
        Ask anything about your
        memories…
        <span>↗</span>
      </div>
    </article>
  );
}