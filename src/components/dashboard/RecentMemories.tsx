const memories = [
  {
    title:
      "Neural Network Pattern.png",
    type: "PNG • 2.1 MB",
    className: "",
  },

  {
    title:
      "Synaptic Wave Pattern.jpg",
    type: "JPG • 5.4 MB",
    className: "alt",
  },

  {
    title:
      "AI Conversation Log.txt",
    type: "TXT • 18 KB",
    className: "warm",
  },
];

export default function RecentMemories() {
  return (
    <article className="panel memories-panel">
      <h3>Recent Memories</h3>

      {memories.map((memory) => (
        <div
          key={memory.title}
          className="memory-item"
        >
          <span
            className={`thumb ${memory.className}`}
          ></span>

          <div>
            <strong>{memory.title}</strong>

            <p>{memory.type}</p>
          </div>
        </div>
      ))}
    </article>
  );
}