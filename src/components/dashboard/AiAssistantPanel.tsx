export default function AiAssistantPanel() {
  return (
    <div className="glass p-8 rounded-3xl h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-6">AI Memory Assistant</h3>
      <div className="flex-1 bg-black/40 rounded-2xl p-6 space-y-4 overflow-auto text-sm">
        <div className="bg-white/10 p-4 rounded-2xl">How can I help you retrieve memories today?</div>
        <div className="bg-amber-500/10 p-4 rounded-2xl text-amber-400">Show me my latest uploads from last week.</div>
      </div>
      <div className="mt-6">
        <input type="text" placeholder="Ask about your memories..." className="w-full glass px-6 py-4 rounded-2xl" />
      </div>
    </div>
  );
}