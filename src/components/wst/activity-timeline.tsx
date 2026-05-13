"use client"

import { cn } from "@/lib/utils"
import {
  CheckCircle2,
  Database,
  FileSignature,
  Shield,
  Sparkles,
} from "lucide-react"

interface ActivityEvent {
  id: string
  type: "upload" | "store" | "transaction" | "ownership" | "ai_access"
  title: string
  description: string
  timestamp: string
}

interface ActivityTimelineProps {
  events: ActivityEvent[]
  className?: string
}

const eventConfig: Record<string, { icon: React.ReactNode; color: string }> = {
  upload: {
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "bg-success text-success-foreground",
  },
  store: {
    icon: <Database className="w-5 h-5" />,
    color: "bg-primary text-primary-foreground",
  },
  transaction: {
    icon: <FileSignature className="w-5 h-5" />,
    color: "bg-chart-1 text-white",
  },
  ownership: {
    icon: <Shield className="w-5 h-5" />,
    color: "bg-chart-1 text-white",
  },
  ai_access: {
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-chart-5 text-white",
  },
}

export function ActivityTimeline({ events, className }: ActivityTimelineProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Activity Timeline</h1>
        <p className="text-muted-foreground mt-1">
          Track all your interactions and system activities.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Timeline */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            {/* Events */}
            <div className="space-y-6">
              {events.map((event, index) => {
                const config = eventConfig[event.type] || eventConfig.upload
                return (
                  <div key={event.id} className="relative flex gap-4">
                    {/* Icon */}
                    <div
                      className={cn(
                        "relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        config.color
                      )}
                    >
                      {config.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <p className="font-semibold text-foreground">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>

                    {/* Timestamp */}
                    <span className="text-xs text-muted-foreground whitespace-nowrap pt-1">
                      {event.timestamp}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-card border border-border rounded-xl p-5 h-fit">
          <h3 className="font-semibold text-foreground mb-4">Activity Summary</h3>

          <div className="space-y-6">
            {/* Today */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Today</p>
              <div className="space-y-2">
                {[
                  { label: "Uploads", value: "8" },
                  { label: "Transactions", value: "12" },
                  { label: "AI Interactions", value: "15" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* This Week */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">This Week</p>
              <div className="space-y-2">
                {[
                  { label: "Uploads", value: "68" },
                  { label: "Transactions", value: "112" },
                  { label: "AI Interactions", value: "156" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div>
              <p className="text-sm font-medium text-foreground mb-3">Total</p>
              <div className="space-y-2">
                {[
                  { label: "Uploads", value: "1,248" },
                  { label: "Transactions", value: "2,450" },
                  { label: "AI Interactions", value: "3,210" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
