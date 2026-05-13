"use client"

import { AiAssistant, AiAssistantStats } from "@/components/wst/ai-assistant"

export default function AssistantPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">AI Assistant</h1>
        <p className="text-muted-foreground mt-1">
          Ask questions about your memories and get intelligent insights.
        </p>
      </div>

      <div className="grid xl:grid-cols-[1fr_320px] gap-6">
        {/* Chat Interface */}
        <div className="h-[calc(100vh-220px)] min-h-[500px]">
          <AiAssistant />
        </div>

        {/* Stats Sidebar */}
        <div className="hidden xl:block">
          <AiAssistantStats />
        </div>
      </div>
    </div>
  )
}
