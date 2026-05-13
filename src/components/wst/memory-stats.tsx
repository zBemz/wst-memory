"use client"

import { cn } from "@/lib/utils"

interface MemoryStatsProps {
  className?: string
}

export function MemoryStats({ className }: MemoryStatsProps) {
  const stats = {
    totalMemories: 128,
    totalSize: "2.45 GB",
    breakdown: [
      { label: "Images", count: 68, color: "bg-chart-1" },
      { label: "Documents", count: 32, color: "bg-chart-2" },
      { label: "Conversations", count: 18, color: "bg-primary" },
      { label: "Other", count: 10, color: "bg-chart-4" },
    ],
    storage: {
      redundancy: "12x",
      availability: "99.99%",
    },
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Memory Stats */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Memory Stats</h3>
        
        <div className="flex gap-6 mb-6">
          <div>
            <p className="text-xs text-muted-foreground">Total Memories</p>
            <p className="text-3xl font-bold text-foreground">{stats.totalMemories}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Size</p>
            <p className="text-3xl font-bold text-foreground">{stats.totalSize}</p>
          </div>
        </div>

        <div className="space-y-3">
          {stats.breakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={cn("w-2.5 h-2.5 rounded-full", item.color)} />
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </div>
              <span className="text-sm font-medium text-foreground">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Storage Info */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Storage Info</h3>
        <div className="flex gap-6">
          <div>
            <p className="text-xs text-muted-foreground">Redundancy</p>
            <p className="text-2xl font-bold text-foreground">{stats.storage.redundancy}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Availability</p>
            <p className="text-2xl font-bold text-success">{stats.storage.availability}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <button className="flex items-center gap-3 w-full px-4 py-3 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Upload Memory
          </button>
          <button className="flex items-center gap-3 w-full px-4 py-3 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-muted transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            AI Assistant
          </button>
        </div>
      </div>
    </div>
  )
}
