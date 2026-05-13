"use client";

import { Dispatch, SetStateAction } from "react";
import {
  Upload,
  FileText,
  Loader2,
} from "lucide-react";

interface Props {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  uploading: boolean;
  onUpload: () => void;
}

export default function UploadDropzone({
  file,
  setFile,
  uploading,
  onUpload,
}: Props) {
  return (
    <div className="border-2 border-dashed border-primary/30 bg-background/60 rounded-[28px] p-10 lg:p-16 text-center transition-all hover:border-primary/60">
      <input
        type="file"
        id="memory-upload"
        className="hidden"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <label
        htmlFor="memory-upload"
        className="cursor-pointer flex flex-col items-center"
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-2xl mb-8 glow-primary">
          <Upload className="w-10 h-10 text-black" />
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">
          Drop your AI Memory here
        </h3>

        <p className="text-muted-foreground mt-3 text-lg max-w-xl">
          Upload images, videos, AI memories, PDFs, metadata,
          or encrypted files to Walrus.
        </p>
      </label>

      {file && (
        <div className="mt-10 glass rounded-2xl p-5 border border-border flex items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-primary" />
            </div>

            <div className="min-w-0">
              <p className="font-semibold truncate">
                {file.name}
              </p>

              <p className="text-sm text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>

          <button
            onClick={onUpload}
            disabled={uploading}
            className="shrink-0 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 text-black font-bold shadow-xl transition hover:scale-[1.02] disabled:opacity-50"
          >
            {uploading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </span>
            ) : (
              "Upload to Walrus"
            )}
          </button>
        </div>
      )}
    </div>
  );
}