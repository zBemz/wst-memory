"use client"

import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import { useState } from "react"

interface WalletConnectProps {
  className?: string
}

export function WalletConnect({ className }: WalletConnectProps) {
  const [isConnected, setIsConnected] = useState(true)
  
  // Mock wallet data
  const walletAddress = "0xb7a3...7e28"
  const balance = "12,450"
  const network = "Sui Mainnet"

  if (!isConnected) {
    return (
      <button
        onClick={() => setIsConnected(true)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm",
          "hover:opacity-90 transition-opacity",
          className
        )}
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
        </svg>
        Connect Wallet
      </button>
    )
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Network Badge */}
      <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg">
        <svg className="w-4 h-4 text-[#4DA2FF]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
        <span className="text-sm font-medium text-foreground">{network}</span>
      </div>

      {/* Wallet Info */}
      <button
        onClick={() => setIsConnected(false)}
        className="flex items-center gap-3 px-3 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors group"
      >
        {/* Wallet Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-600" />
        </div>
        
        <div className="text-left">
          <p className="text-sm font-medium text-foreground">{walletAddress}</p>
          <p className="text-xs text-muted-foreground">{balance} Sui</p>
        </div>
        
        <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  )
}
