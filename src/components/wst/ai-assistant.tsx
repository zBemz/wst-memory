"use client"

import { cn } from "@/lib/utils"
import { Send, Sparkles, FileText, Image, MoreVertical } from "lucide-react"
import { useState } from "react"
import { WstLogo } from "./wst-logo"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  files?: {
    name: string
    type: string
    size: string
    uploaded: string
  }[]
}

interface AiAssistantProps {
  className?: string
  compact?: boolean
}

const suggestedQuestions = [
  "Show my recent memories",
  "Summarize my PDFs",
  "Find neural network files",
  "What did we discuss last week?",
  "Show my voice memos",
]

export function AiAssistant({ className, compact = false }: AiAssistantProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your WST AI memory assistant.\n\nHow can I help you today?",
    },
    {
      id: "2",
      role: "user",
      content: "Show me my recent research documents about neural networks",
    },
    {
      id: "3",
      role: "assistant",
      content: "Here are your recent research documents related to neural networks.",
      files: [
        { name: "Neural Network Research.pdf", type: "PDF", size: "2.3 MB", uploaded: "2m ago" },
        { name: "Deep Learning Notes.txt", type: "TXT", size: "1.5 KB", uploaded: "1d ago" },
        { name: "AI Model Architecture.png", type: "PNG", size: "2.4 MB", uploaded: "2d ago" },
      ],
    },
  ])

  const [isExpanded, setIsExpanded] = useState(true)

  if (compact) {
    return (
      <div className={cn("bg-card border border-border rounded-xl", className)}>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full p-4 border-b border-border"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-semibold text-foreground">AI Assistant</span>
          </div>
          <svg
            className={cn(
              "w-4 h-4 text-muted-foreground transition-transform",
              isExpanded && "rotate-180"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {isExpanded && (
          <div className="p-4 space-y-4">
            {/* Welcome Message */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex-shrink-0 overflow-hidden">
                <WstLogo size="sm" showText={false} />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-foreground">
                  Hello! I&apos;m your WST AI memory assistant.
                </p>
                <p className="text-sm text-muted-foreground">
                  How can I help you today?
                </p>
              </div>
            </div>

            {/* Quick Action */}
            <button className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Show my uploaded memories
            </button>

            {/* Sample Response */}
            <div className="space-y-2">
              <p className="text-sm text-foreground">
                I found 24 memories stored on Walrus. Here are your recent ones:
              </p>
              <div className="space-y-2">
                {[
                  { icon: FileText, name: "Neural Network Research.pdf", color: "text-red-500 bg-red-100" },
                  { icon: Image, name: "Synaptic Wave Pattern.png", color: "text-blue-500 bg-blue-100" },
                  { icon: FileText, name: "AI Conversation Log.txt", color: "text-slate-500 bg-slate-100" },
                ].map((file, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors">
                    <div className={cn("w-6 h-6 rounded flex items-center justify-center", file.color.split(" ")[1])}>
                      <file.icon className={cn("w-3.5 h-3.5", file.color.split(" ")[0])} />
                    </div>
                    <span className="text-sm text-foreground">{file.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
              <input
                type="text"
                placeholder="Ask anything about your memories..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="p-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col h-full bg-card border border-border rounded-xl", className)}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div key={message.id} className="space-y-3">
            {message.role === "assistant" ? (
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden">
                  <WstLogo size="sm" showText={false} />
                </div>
                <div className="space-y-3 flex-1">
                  <p className="text-foreground whitespace-pre-line">{message.content}</p>
                  {message.files && (
                    <div className="space-y-2 bg-muted/50 p-4 rounded-lg">
                      {message.files.map((file, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-card rounded-lg border border-border"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                "w-10 h-10 rounded-lg flex items-center justify-center",
                                file.type === "PDF" && "bg-red-100",
                                file.type === "TXT" && "bg-slate-100",
                                file.type === "PNG" && "bg-blue-100"
                              )}
                            >
                              {file.type === "PNG" ? (
                                <Image className={cn("w-5 h-5", "text-blue-500")} />
                              ) : (
                                <FileText
                                  className={cn(
                                    "w-5 h-5",
                                    file.type === "PDF" && "text-red-500",
                                    file.type === "TXT" && "text-slate-500"
                                  )}
                                />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">{file.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {file.type} • {file.size} • {file.uploaded}
                              </p>
                            </div>
                          </div>
                          <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                            <MoreVertical className="w-4 h-4 text-muted-foreground" />
                          </button>
                        </div>
                      ))}
                      <button className="px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                        View all {message.files.length} documents
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="flex justify-end">
                <div className="bg-primary/10 text-foreground px-4 py-3 rounded-2xl rounded-br-md max-w-[80%]">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Suggested Questions (on full page) */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.slice(0, 3).map((q) => (
            <button
              key={q}
              onClick={() => setInput(q)}
              className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-full hover:bg-muted/80 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about your memories..."
            className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button className="p-2.5 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Stats sidebar for AI Assistant page
export function AiAssistantStats({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Suggested Questions */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Suggested Questions</h3>
        <div className="space-y-2">
          {suggestedQuestions.map((q) => (
            <button
              key={q}
              className="w-full text-left px-4 py-3 bg-muted/50 hover:bg-muted rounded-lg text-sm text-foreground transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Your Stats */}
      <div className="bg-card border border-border rounded-xl p-5">
        <h3 className="font-semibold text-foreground mb-4">Your Stats</h3>
        <div className="space-y-3">
          {[
            { label: "Total Conversations", value: "24" },
            { label: "Questions Asked", value: "89" },
            { label: "Memories Analyzed", value: "156" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              <span className="text-sm font-semibold text-foreground">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
