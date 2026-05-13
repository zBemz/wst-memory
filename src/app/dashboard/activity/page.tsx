import { ActivityTimeline } from "@/components/wst/activity-timeline"

const activityEvents = [
  {
    id: "1",
    type: "upload" as const,
    title: "Uploaded Event",
    description: "Neural Network Diagram.png uploaded",
    timestamp: "2m ago",
  },
  {
    id: "2",
    type: "store" as const,
    title: "Blob Stored",
    description: "Stored on Walrus [bufk....7x7ry]",
    timestamp: "5m ago",
  },
  {
    id: "3",
    type: "transaction" as const,
    title: "Transaction Signed",
    description: "Sui transaction confirmed",
    timestamp: "10m ago",
  },
  {
    id: "4",
    type: "ownership" as const,
    title: "Ownership Updated",
    description: "On-chain ownership recorded",
    timestamp: "15m ago",
  },
  {
    id: "5",
    type: "ai_access" as const,
    title: "AI Access",
    description: "AI analyzed your memory",
    timestamp: "30m ago",
  },
]

export default function ActivityPage() {
  return <ActivityTimeline events={activityEvents} />
}
