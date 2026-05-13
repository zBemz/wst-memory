"use client"

import { cn } from "@/lib/utils"
import { 
  CheckCircle2, 
  Database, 
  FileSignature, 
  Shield, 
  Sparkles,
  MoreHorizontal
} from "lucide-react"

export interface Transaction {
  id: string
  type: "upload" | "store" | "permission" | "share" | "delete" | "ai_access"
  title: string
  description: string
  hash: string
  status: "success" | "pending" | "failed"
  timestamp: string
}

interface TransactionListProps {
  transactions: Transaction[]
  className?: string
  showViewAll?: boolean
}

const typeConfig: Record<string, { icon: React.ReactNode; color: string }> = {
  upload: {
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "bg-success text-success-foreground",
  },
  store: {
    icon: <Database className="w-5 h-5" />,
    color: "bg-primary text-primary-foreground",
  },
  permission: {
    icon: <Shield className="w-5 h-5" />,
    color: "bg-chart-1 text-white",
  },
  share: {
    icon: <FileSignature className="w-5 h-5" />,
    color: "bg-chart-3 text-white",
  },
  delete: {
    icon: <MoreHorizontal className="w-5 h-5" />,
    color: "bg-destructive text-destructive-foreground",
  },
  ai_access: {
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-chart-5 text-white",
  },
}

export function TransactionList({ transactions, className, showViewAll = true }: TransactionListProps) {
  return (
    <div className={cn("bg-card border border-border rounded-xl", className)}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Recent Transactions</h3>
        <button className="p-1.5 rounded-md hover:bg-muted transition-colors">
          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="divide-y divide-border">
        {transactions.map((tx) => {
          const config = typeConfig[tx.type] || typeConfig.upload
          return (
            <div
              key={tx.id}
              className="flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors"
            >
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", config.color)}>
                {config.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{tx.title}</p>
                <p className="text-xs text-muted-foreground truncate">{tx.hash}</p>
              </div>
              <div className="text-right">
                <span
                  className={cn(
                    "text-xs font-medium",
                    tx.status === "success" && "text-success",
                    tx.status === "pending" && "text-primary",
                    tx.status === "failed" && "text-destructive"
                  )}
                >
                  {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                </span>
                <p className="text-xs text-muted-foreground">{tx.timestamp}</p>
              </div>
            </div>
          )
        })}
      </div>

      {showViewAll && (
        <div className="p-4 border-t border-border">
          <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            View All
          </button>
        </div>
      )}
    </div>
  )
}
