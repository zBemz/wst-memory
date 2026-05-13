"use client"

import { cn } from "@/lib/utils"
import { WalletConnect } from "./wallet-connect"

interface TopBarProps {
  className?: string
}

export function TopBar({ className }: TopBarProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-end gap-4 h-16 px-6 bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-30",
        className
      )}
    >
      <WalletConnect />
    </header>
  )
}
