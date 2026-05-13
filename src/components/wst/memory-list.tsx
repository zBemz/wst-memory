"use client"

import { cn } from "@/lib/utils"
import { FileText, Image, MessageSquare, MoreVertical, Music } from "lucide-react"

export interface MemoryItem {
  id: string
  name: string
  type: "pdf" | "png" | "jpg" | "txt" | "m4a" | "mp3" | "other"
  size: string
  blobId: string
  uploaded: string
  status: "success" | "pending" | "failed"
  thumbnail?: string
}

interface MemoryListProps {
  memories: MemoryItem[]
  className?: string
}

const typeIcons: Record<string, React.ReactNode> = {
  pdf: (
    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
      <FileText className="w-5 h-5 text-red-500" />
    </div>
  ),
  png: (
    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
      <Image className="w-5 h-5 text-blue-500" />
    </div>
  ),
  jpg: (
    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
      <Image className="w-5 h-5 text-blue-500" />
    </div>
  ),
  txt: (
    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
      <FileText className="w-5 h-5 text-slate-500" />
    </div>
  ),
  m4a: (
    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
      <Music className="w-5 h-5 text-amber-500" />
    </div>
  ),
  mp3: (
    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
      <Music className="w-5 h-5 text-amber-500" />
    </div>
  ),
  other: (
    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
      <FileText className="w-5 h-5 text-gray-500" />
    </div>
  ),
}

export function MemoryList({ memories, className }: MemoryListProps) {
  return (
    <div className={cn("bg-card border border-border rounded-xl overflow-hidden", className)}>
      {/* Table Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_80px_40px] gap-4 px-6 py-3 bg-muted/50 border-b border-border text-sm font-medium text-muted-foreground">
        <span>File Name</span>
        <span>Walrus Blob ID</span>
        <span>Size</span>
        <span>Uploaded</span>
        <span>Status</span>
        <span></span>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-border">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="grid grid-cols-[2fr_1fr_1fr_1fr_80px_40px] gap-4 px-6 py-4 items-center hover:bg-muted/30 transition-colors group"
          >
            {/* File Name */}
            <div className="flex items-center gap-3">
              {memory.thumbnail ? (
                <img
                  src={memory.thumbnail}
                  alt={memory.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
              ) : (
                typeIcons[memory.type] || typeIcons.other
              )}
              <div>
                <p className="font-medium text-foreground truncate max-w-[200px]">
                  {memory.name}
                </p>
                <p className="text-xs text-muted-foreground uppercase">
                  {memory.type} • {memory.size}
                </p>
              </div>
            </div>

            {/* Blob ID */}
            <span className="text-sm text-muted-foreground font-mono truncate">
              {memory.blobId}
            </span>

            {/* Size */}
            <span className="text-sm text-foreground">{memory.size}</span>

            {/* Uploaded */}
            <span className="text-sm text-muted-foreground">{memory.uploaded}</span>

            {/* Status */}
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium w-fit",
                memory.status === "success" && "bg-success/10 text-success",
                memory.status === "pending" && "bg-primary/10 text-primary",
                memory.status === "failed" && "bg-destructive/10 text-destructive"
              )}
            >
              {memory.status.charAt(0).toUpperCase() + memory.status.slice(1)}
            </span>

            {/* Actions */}
            <button className="p-2 rounded-lg hover:bg-muted transition-colors opacity-0 group-hover:opacity-100">
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// Compact memory card for sidebar/dashboard
interface MemoryCardProps {
  memory: MemoryItem
  className?: string
}

export function MemoryCard({ memory, className }: MemoryCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer",
        className
      )}
    >
      {memory.thumbnail ? (
        <img
          src={memory.thumbnail}
          alt={memory.name}
          className="w-12 h-12 rounded-lg object-cover"
        />
      ) : (
        typeIcons[memory.type] || typeIcons.other
      )}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground text-sm truncate">{memory.name}</p>
        <p className="text-xs text-muted-foreground">
          {memory.type.toUpperCase()} • {memory.size}
        </p>
        <p className="text-xs text-muted-foreground">{memory.uploaded}</p>
      </div>
    </div>
  )
}
