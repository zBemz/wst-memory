"use client";
import { useState } from "react";
import { Upload, CheckCircle } from "lucide-react";
import { useCurrentAccount } from "@mysten/dapp-kit";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const account = useCurrentAccount();

  const handleUpload = async () => {
    if (!file || !account) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("address", account.address);

      const response = await fetch("/api/upload", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Upload failed");

      const payload = await response.json();
      setResult(payload);
    } catch (err) {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="glass p-10 rounded-3xl max-w-2xl mx-auto">
      <div className="border-2 border-dashed border-amber-400/50 rounded-3xl p-16 text-center">
        <Upload className="mx-auto w-16 h-16 text-amber-400 mb-6" />
        <p className="text-xl font-medium">Drop your AI Memory here</p>
        <p className="text-gray-400 mt-2">PNG, JPG, PDF, TXT, MP4 supported</p>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="hidden"
          id="file"
        />
        <label htmlFor="file" className="mt-6 inline-block px-8 py-4 bg-amber-500 text-black font-bold rounded-2xl cursor-pointer hover:bg-amber-400">
          Select File
        </label>
      </div>

      {file && (
        <div className="mt-6 p-4 bg-white/5 rounded-2xl flex items-center justify-between">
          <span>{file.name}</span>
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="px-6 py-3 bg-green-500 text-black font-bold rounded-xl disabled:opacity-50"
          >
            {uploading ? "Uploading to Walrus..." : "Upload to Walrus + Sui"}
          </button>
        </div>
      )}

      {result && (
        <div className="mt-6 p-6 bg-emerald-900/30 border border-emerald-500 rounded-3xl">
          <div className="flex items-center gap-3 text-emerald-400">
            <CheckCircle className="w-6 h-6" />
            <strong>Upload Successful!</strong>
          </div>
          <p className="text-sm mt-4 break-all">Blob ID: {result.blobId}</p>
          <a href={result.url} target="_blank" className="text-amber-400 underline mt-2 block">View on Walrus</a>
        </div>
      )}
    </div>
  );
}