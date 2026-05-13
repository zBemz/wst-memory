"use client"

import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"
import type { ReactNode } from "react"

interface StatsCardProps {
  title: string
  value: string | number
  change?: number
  changeLabel?: string
  icon?: ReactNode
  variant?: "default" | "success" | "warning" | "info"
  className?: string
}

export function StatsCard({
  title,
  value,
  change,
  changeLabel,
  icon,
  variant = "default",
  className,
}: StatsCardProps) {
  const variantColors = {
    default: "text-foreground",
    success: "text-success",
    warning: "text-primary",
    info: "text-chart-1",
  }

  const isPositive = change !== undefined && change >= 0

  return (
    <div
      className={cn(
        "bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-all duration-300",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className={cn("text-3xl font-bold", variantColors[variant])}>
              {value}
            </span>
            {change !== undefined && (
              <span
                className={cn(
                  "flex items-center gap-0.5 text-sm font-medium",
                  isPositive ? "text-success" : "text-destructive"
                )}
              >
                {isPositive ? (
                  <TrendingUp className="w-3.5 h-3.5" />
                ) : (
                  <TrendingDown className="w-3.5 h-3.5" />
                )}
                {isPositive ? "+" : ""}
                {change}%
              </span>
            )}
          </div>
          {changeLabel && (
            <p className="text-xs text-muted-foreground">{changeLabel}</p>
          )}
        </div>
        {icon && (
          <div className="p-2 bg-muted rounded-lg text-muted-foreground">
            {icon}
          </div>
        )}
      </div>
    </div>
  )
}
