import { MemoryList, type MemoryItem } from "@/components/wst/memory-list";

const demoMemories: MemoryItem[] = [
  {
    id: "1",
    name: "Quarterly_Research_Report.pdf",
    type: "pdf",
    size: "12.4 MB",
    blobId: "blob_7a2f...9e1c",
    uploaded: "2026-05-13",
    status: "success",
  },
  {
    id: "2",
    name: "Design_Notes.txt",
    type: "txt",
    size: "118 KB",
    blobId: "blob_0bd3...54ff",
    uploaded: "2026-05-12",
    status: "pending",
  },
];

export default function VaultPage() {
  return (
    <main className="page-screen p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <h1 className="text-2xl font-semibold">Vault</h1>
        <MemoryList memories={demoMemories} />
      </div>
    </main>
  );
}
