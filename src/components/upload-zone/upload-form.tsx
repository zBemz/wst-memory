"use client";

import { useState } from "react";

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [blobId, setBlobId] = useState("");

  async function handleUpload() {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setBlobId(data.blobId);
  }

  return (
    <div className="mt-10 space-y-4">
      <input
        type="file"
        onChange={(e) =>
          setFile(e.target.files?.[0] || null)
        }
      />

      <button
        onClick={handleUpload}
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Upload
      </button>

      {blobId && (
        <div className="rounded-lg border p-4">
          <p className="font-semibold">
            Blob ID:
          </p>

          <p className="break-all text-sm text-muted-foreground">
            {blobId}
          </p>
        </div>
      )}
    </div>
  );
}