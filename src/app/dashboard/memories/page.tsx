import MemoryCard from "@/components/dashboard/MemoryCard";

const mockMemories = [
  { id: 1, name: "Neural_Architecture_v2.png", size: "2.4 MB", type: "image", date: "2 hours ago" },
  { id: 2, name: "Project_Roadmap_Q3.pdf", size: "1.1 MB", type: "pdf", date: "Yesterday" },
];

export default function MemoriesPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">My Memories</h1>
        <input type="text" placeholder="Search memories..." className="glass px-6 py-3 rounded-2xl w-96" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMemories.map(m => <MemoryCard key={m.id} memory={m} />)}
      </div>
    </div>
  );
}