"use client"

import { cn } from "@/lib/utils"

interface WstLogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function WstLogo({ size = "md", showText = true, className }: WstLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        {/* Outer sun rays */}
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Sun rays */}
          <g fill="#F5A623">
            {[...Array(12)].map((_, i) => (
              <polygon
                key={i}
                points="50,8 47,18 53,18"
                transform={`rotate(${i * 30} 50 50)`}
              />
            ))}
          </g>
          {/* Outer circle */}
          <circle cx="50" cy="50" r="32" fill="#F5A623" />
          {/* Inner circle with W */}
          <circle cx="50" cy="50" r="24" fill="#FFF8E7" />
          {/* W letter */}
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fontSize="28"
            fontWeight="700"
            fill="#F5A623"
            fontFamily="system-ui, sans-serif"
          >
            W
          </text>
        </svg>
      </div>
      {showText && (
        <span className={cn("font-bold text-foreground tracking-tight", textSizeClasses[size])}>
          WST-MEMORY
        </span>
      )}
    </div>
  )
}
