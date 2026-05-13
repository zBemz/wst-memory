"use client";

import { useMemo, useState } from "react";

import {
  Search,
  Plus,
  LayoutGrid,
  LayoutList,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";

import { cn } from "@/lib/utils";

import MemoryList, {
  type MemoryItem,
} from "@/components/dashboard/MemoryList";

import MemoryGrid from "@/components/dashboard/MemoryGrid";

import MemoryStats from "@/components/dashboard/MemoryStats";

const memories: MemoryItem[] = [
  {
    id: "1",
    name: "Neural_Architecture_v2.png",
    type: "image",
    size: "2.4 MB",
    blobId: "bafkrei12axxx",
    uploaded: "2 hours ago",
    status: "success",
    thumbnail:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
  },
  {
    id: "2",
    name: "Project_Roadmap_Q3.pdf",
    type: "pdf",
    size: "1.1 MB",
    blobId: "bafkreixxxxx2",
    uploaded: "Yesterday",
    status: "success",
  },
  {
    id: "3",
    name: "AI Voice Memory.m4a",
    type: "audio",
    size: "5.7 MB",
    blobId: "bafkreixxxxx3",
    uploaded: "3 days ago",
    status: "success",
  },
  {
    id: "4",
    name: "Conversation_Context.txt",
    type: "text",
    size: "82 KB",
    blobId: "bafkreixxxxx4",
    uploaded: "1 week ago",
    status: "success",
  },
  {
    id: "5",
    name: "Research_Document.pdf",
    type: "pdf",
    size: "12.2 MB",
    blobId: "bafkreixxxxx5",
    uploaded: "2 weeks ago",
    status: "success",
  },
  {
    id: "6",
    name: "Memory_Snapshot.png",
    type: "image",
    size: "3.8 MB",
    blobId: "bafkreixxxxx6",
    uploaded: "1 month ago",
    status: "success",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
  },
];

export default function MemoriesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const filteredMemories = useMemo(() => {
    return memories.filter((memory) =>
      memory.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            My Memories
          </h1>

          <p className="text-muted-foreground mt-3 text-lg max-w-2xl">
            Browse, search, and manage all your decentralized
            AI memories stored on Walrus + Sui.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-4 text-black font-bold shadow-xl transition hover:scale-[1.02] glow-primary w-fit">
          <Plus className="w-5 h-5" />
          Upload New Memory
        </button>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Filters */}
          <div className="glass rounded-[28px] border border-border p-5 lg:p-6">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Search memories..."
                  className="w-full rounded-2xl border border-border bg-background/70 pl-12 pr-4 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                />
              </div>

              {/* Type Filter */}
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-4 font-medium transition hover:bg-muted">
                  <Filter className="w-4 h-4" />
                  Filters
                </button>

                <select className="rounded-2xl border border-border bg-card px-5 py-4 outline-none transition focus:border-primary">
                  <option>All Types</option>
                  <option>Images</option>
                  <option>Documents</option>
                  <option>Audio</option>
                  <option>Video</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex overflow-hidden rounded-2xl border border-border bg-card">
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-4 transition-all",
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  <LayoutList className="w-5 h-5" />
                </button>

                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-4 transition-all",
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            {viewMode === "grid" ? (
              <MemoryGrid memories={filteredMemories} />
            ) : (
              <MemoryList memories={filteredMemories} />
            )}
          </div>

          {/* Pagination */}
          <div className="glass rounded-[24px] border border-border px-5 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Showing 1 to 6 of 128 memories
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setCurrentPage(Math.max(1, currentPage - 1))
                }
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center hover:bg-muted transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-10 h-10 rounded-xl text-sm font-semibold transition",
                    currentPage === page
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "border border-border bg-card hover:bg-muted"
                  )}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center hover:bg-muted transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden xl:block">
          <MemoryStats />
        </aside>
      </div>
    </div>
  );
}