interface MemoryItem {
  id: string;
  name: string;
  type: "image" | "pdf" | "audio";
  size: string;
  uploaded: string;
  thumbnail?: string;
}

import {
  FileText,
  ImageIcon,
  Music2,
} from "lucide-react";

interface Props {
  memories: MemoryItem[];
}

export default function MemoryGrid({
  memories,
}: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
      {memories.map((memory) => (
        <div
          key={memory.id}
          className="glass card-hover rounded-[28px] border border-border overflow-hidden"
        >
          {memory.thumbnail ? (
            <div className="aspect-video overflow-hidden">
              <img
                src={memory.thumbnail}
                alt={memory.name}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-amber-500/10 flex items-center justify-center">
              {memory.type === "image" && (
                <ImageIcon className="w-14 h-14 text-primary" />
              )}

              {memory.type === "pdf" && (
                <FileText className="w-14 h-14 text-primary" />
              )}

              {memory.type === "audio" && (
                <Music2 className="w-14 h-14 text-primary" />
              )}
            </div>
          )}

          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-bold text-lg truncate">
                {memory.name}
              </h3>

              <p className="text-muted-foreground text-sm mt-1">
                {memory.uploaded}
              </p>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {memory.size}
              </span>

              <span className="rounded-full bg-emerald-500/10 text-emerald-400 px-3 py-1 font-medium">
                Stored
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}