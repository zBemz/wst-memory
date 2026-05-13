export default function MemoryCard({ memory }: any) {
  return (
    <div className="glass rounded-3xl p-6 card-hover">
      <div className="h-48 bg-gradient-to-br from-amber-900/50 to-black rounded-2xl mb-4 flex items-center justify-center text-6xl">
        📄
      </div>
      <h3 className="font-semibold">{memory.name}</h3>
      <p className="text-sm text-gray-400">{memory.size} • {memory.date}</p>
      <div className="mt-4 flex gap-3">
        <button className="flex-1 py-3 text-sm bg-white/10 hover:bg-white/20 rounded-2xl">Open</button>
        <button className="flex-1 py-3 text-sm bg-amber-500 text-black font-medium rounded-2xl">Download</button>
      </div>
    </div>
  );
}