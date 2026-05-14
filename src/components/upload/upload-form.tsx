"use client";

import { useState } from "react";
import { useCurrentAccount } from "@mysten/dapp-kit";

import UploadDropzone from "./UploadDropzone";
import UploadProgress from "./UploadProgress";
import UploadResult from "./UploadResult";


export default function UploadForm() {
  const account = useCurrentAccount();

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file.");
      return;
    }

    if (!account?.address) {
      setError("Please connect your wallet.");
      return;
    }

    try {
      setUploading(true);
      setError(null);
      setProgress(10);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("address", account.address);

      setProgress(40);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      setProgress(80);

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const payload = await response.json();
      setResult(payload);

      setProgress(100);
    } catch (err) {
      console.error(err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />

      <div className="relative glass rounded-[32px] border border-border p-8 lg:p-12 shadow-2xl">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
            Memory Upload Portal
          </h2>

          <p className="text-muted-foreground mt-3 text-lg">
            Upload memories securely to Walrus decentralized storage.
          </p>
        </div>

        <UploadDropzone
          file={file}
          setFile={setFile}
          uploading={uploading}
          onUpload={handleUpload}
        />

        {uploading && (
          <div className="mt-8">
            <UploadProgress progress={progress} />
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-8">
            <UploadResult result={result} />
          </div>
        )}
      </div>
    </div>
  );
}