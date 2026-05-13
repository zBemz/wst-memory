"use client"

import { MemoryList, type MemoryItem } from "@/components/wst/memory-list"
import { MemoryStats } from "@/components/wst/memory-stats"
import { Search, Plus, LayoutGrid, LayoutList, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

// Mock data
const memories: MemoryItem[] = [
  {
    id: "1",
    name: "Neural Network Research.pdf",
    type: "pdf",
    size: "2.3 MB",
    blobId: "bafk...7x7fy",
    uploaded: "2m ago",
    status: "success",
  },
  {
    id: "2",
    name: "Deep Learning Notes.txt",
    type: "txt",
    size: "1.5 KB",
    blobId: "bafk...3npgn",
    uploaded: "10m ago",
    status: "success",
  },
  {
    id: "3",
    name: "AI Conversation Log.txt",
    type: "txt",
    size: "1.8 KB",
    blobId: "bafk...6u3jp",
    uploaded: "1h ago",
    status: "success",
  },
  {
    id: "4",
    name: "Project Brainstorm.pdf",
    type: "pdf",
    size: "5.4 MB",
    blobId: "bafk...9e1e",
    uploaded: "2h ago",
    status: "success",
  },
  {
    id: "5",
    name: "Design Inspiration.jpg",
    type: "jpg",
    size: "1.2 MB",
    blobId: "bafk...2j1fr",
    uploaded: "3h ago",
    status: "success",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "6",
    name: "Voice Memo: Idea for AI Agent.m4a",
    type: "m4a",
    size: "3.1 MB",
    blobId: "bafk...5yp0c",
    uploaded: "5h ago",
    status: "success",
  },
]

export default function MemoriesPage() {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Your Memories</h1>
          <p className="text-muted-foreground mt-1">
            Browse, search, and manage all your stored memories.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:opacity-90 transition-opacity w-fit">
          <Plus className="w-4 h-4" />
          New Memory
        </button>
      </div>

      <div className="grid xl:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search memories..."
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Type Filter */}
            <select className="px-4 py-2.5 bg-card border border-border rounded-lg text-foreground outline-none focus:ring-2 focus:ring-primary/20">
              <option>All Types</option>
              <option>Images</option>
              <option>Documents</option>
              <option>Audio</option>
              <option>Video</option>
            </select>

            {/* Sort */}
            <select className="px-4 py-2.5 bg-card border border-border rounded-lg text-foreground outline-none focus:ring-2 focus:ring-primary/20">
              <option>Sort: Newest</option>
              <option>Sort: Oldest</option>
              <option>Sort: Name</option>
              <option>Sort: Size</option>
            </select>

            {/* View Toggle */}
            <div className="flex border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode("list")}
                className={cn(
                  "p-2.5 transition-colors",
                  viewMode === "list" ? "bg-muted" : "bg-card hover:bg-muted/50"
                )}
              >
                <LayoutList className="w-4 h-4 text-foreground" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-2.5 transition-colors",
                  viewMode === "grid" ? "bg-muted" : "bg-card hover:bg-muted/50"
                )}
              >
                <LayoutGrid className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>

          {/* Memory List */}
          <MemoryList memories={memories} />

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing 1 to 6 of 128 results
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                className="p-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-9 h-9 rounded-lg text-sm font-medium transition-colors",
                    currentPage === page
                      ? "bg-primary/10 text-primary border border-primary"
                      : "bg-card border border-border hover:bg-muted text-foreground"
                  )}
                >
                  {page}
                </button>
              ))}
              <span className="text-muted-foreground">...</span>
              <button
                onClick={() => setCurrentPage(22)}
                className={cn(
                  "w-9 h-9 rounded-lg text-sm font-medium transition-colors",
                  currentPage === 22
                    ? "bg-primary/10 text-primary border border-primary"
                    : "bg-card border border-border hover:bg-muted text-foreground"
                )}
              >
                22
              </button>
              <button
                onClick={() => setCurrentPage(Math.min(22, currentPage + 1))}
                className="p-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden xl:block">
          <MemoryStats />
        </div>
      </div>
    </div>
  )
}
