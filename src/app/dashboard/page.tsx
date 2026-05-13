"use client"

import { StatsCard } from "@/components/wst/stats-card"
import { MemoryCard } from "@/components/wst/memory-list"
import { StorageChart } from "@/components/wst/storage-chart"
import { TransactionList } from "@/components/wst/transaction-list"
import { AiAssistant } from "@/components/wst/ai-assistant"
import { Database, HardDrive, FileStack, Activity } from "lucide-react"

// Mock data
const recentMemories = [
  {
    id: "1",
    name: "Neural Network Pattern.png",
    type: "png" as const,
    size: "2.1 MB",
    blobId: "bafk...7x7fy",
    uploaded: "2m ago",
    status: "success" as const,
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    name: "Synaptic Wave Pattern.jpg",
    type: "jpg" as const,
    size: "5.4 MB",
    blobId: "bafk...3pgw",
    uploaded: "10m ago",
    status: "success" as const,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    name: "AI Conversation Log.txt",
    type: "txt" as const,
    size: "1.8 KB",
    blobId: "bafk...6u3jp",
    uploaded: "1h ago",
    status: "success" as const,
  },
  {
    id: "4",
    name: "Project Brainstorm.pdf",
    type: "pdf" as const,
    size: "3.2 MB",
    blobId: "bafk...9c1e",
    uploaded: "2h ago",
    status: "success" as const,
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=100&h=100&fit=crop",
  },
]

const storageData = [
  { name: "Images", value: 1.12, color: "#4A90D9" },
  { name: "Documents", value: 0.87, color: "#F5A623" },
  { name: "Conversations", value: 0.31, color: "#7B68EE" },
  { name: "Other", value: 0.15, color: "#E67E22" },
]

const recentTransactions = [
  {
    id: "1",
    type: "store" as const,
    title: "Store Memory",
    description: "Neural Network Diagram.png",
    hash: "0xdaf...7e6c",
    status: "success" as const,
    timestamp: "1m ago",
  },
  {
    id: "2",
    type: "permission" as const,
    title: "Update Permission",
    description: "Access control updated",
    hash: "0xbcf...7b9e",
    status: "success" as const,
    timestamp: "10m ago",
  },
  {
    id: "3",
    type: "share" as const,
    title: "Share Memory",
    description: "Shared with team",
    hash: "0xdf0...f7ee",
    status: "success" as const,
    timestamp: "1h ago",
  },
  {
    id: "4",
    type: "delete" as const,
    title: "Delete Memory",
    description: "Removed from storage",
    hash: "0xff1e...dcf0",
    status: "success" as const,
    timestamp: "1h ago",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
      </div>

      <div className="grid xl:grid-cols-[1fr_320px] gap-6">
        <div className="space-y-6">
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Memories"
              value="128"
              change={21.5}
              variant="default"
              icon={<FileStack className="w-5 h-5" />}
            />
            <StatsCard
              title="Storage Used"
              value="2.45 GB"
              change={8.2}
              variant="warning"
              icon={<HardDrive className="w-5 h-5" />}
            />
            <StatsCard
              title="Walrus Blobs"
              value="342"
              variant="default"
              icon={<Database className="w-5 h-5" />}
            />
            <StatsCard
              title="Transactions"
              value="276"
              change={15.3}
              variant="default"
              icon={<Activity className="w-5 h-5" />}
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Memories */}
            <div className="bg-card border border-border rounded-xl">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-semibold text-foreground">Recent Memories</h3>
                <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
                  <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="6" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="18" r="2" />
                  </svg>
                </button>
              </div>
              <div className="divide-y divide-border">
                {recentMemories.map((memory) => (
                  <MemoryCard key={memory.id} memory={memory} />
                ))}
              </div>
              <div className="p-4 border-t border-border">
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  View All
                </button>
              </div>
            </div>

            {/* Storage Analytics */}
            <StorageChart data={storageData} total="2.45 GB" />
          </div>

          {/* Transactions */}
          <TransactionList transactions={recentTransactions} />
        </div>

        {/* AI Assistant Panel */}
        <div className="hidden xl:block">
          <AiAssistant compact />
        </div>
      </div>
    </div>
  )
}
