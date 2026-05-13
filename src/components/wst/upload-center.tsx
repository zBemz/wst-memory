"use client"

import { cn } from "@/lib/utils"
import { Upload, Cloud, FileText, Image, Music, Video } from "lucide-react"
import { useState, useCallback } from "react"

interface UploadCenterProps {
  className?: string
}

const supportedFormats = [
  {
    icon: Image,
    label: "Image",
    formats: "PNG, JPG, JPEG, GIF, WEBP",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: Music,
    label: "Audio",
    formats: "MP3, M4A, WAV, OGG",
    color: "bg-amber-100 text-amber-500",
  },
  {
    icon: Video,
    label: "Video",
    formats: "MP4, MOV, AVI, WEBM",
    color: "bg-purple-100 text-purple-500",
  },
  {
    icon: FileText,
    label: "Document",
    formats: "PDF, TXT, MD, DOCX",
    color: "bg-emerald-100 text-emerald-500",
  },
]

const uploadTips = [
  "Files are stored permanently on Walrus",
  "Secured by Sui blockchain",
  "Powered by Tatum enterprise RPC",
  "Your data is private and encrypted",
]

export function UploadCenter({ className }: UploadCenterProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    // Handle file drop
  }, [])

  return (
    <div className={cn("space-y-6", className)}>
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Upload Memory</h1>
        <p className="text-muted-foreground mt-1">
          Upload your files, conversations, or any data to decentralized storage.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-6">
          {/* Upload Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300",
              isDragging
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50 hover:bg-muted/30"
            )}
          >
            <input
              type="file"
              multiple
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Cloud className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">
                  Drag & drop your files here
                </p>
                <p className="text-muted-foreground">
                  or <span className="text-primary font-medium cursor-pointer">click to browse</span>
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Supports: Images, PDFs, Text, Audio, Videos and more</p>
                <p>Max file size: 100MB</p>
              </div>
            </div>
          </div>

          {/* Upload History */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Upload History</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                      File Name
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                      Type
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                      Size
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-muted-foreground">
                      Uploaded
                    </th>
                    <th className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Image className="w-5 h-5 text-blue-500" />
                        </div>
                        <span className="font-medium text-foreground">Neural Network Diagram.png</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">PNG</td>
                    <td className="px-6 py-4 text-muted-foreground">2.1 MB</td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                        Success
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">2m ago</td>
                    <td className="px-6 py-4">
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="6" r="2" />
                          <circle cx="12" cy="12" r="2" />
                          <circle cx="12" cy="18" r="2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upload Tips */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Upload Tips</h3>
            <ul className="space-y-3">
              {uploadTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Supported Formats */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground mb-4">Supported Formats</h3>
            <div className="space-y-3">
              {supportedFormats.map((format) => (
                <div key={format.label} className="flex items-start gap-3">
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", format.color)}>
                    <format.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{format.label}</p>
                    <p className="text-xs text-muted-foreground">{format.formats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
