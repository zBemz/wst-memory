'use client';
import { useState } from 'react';
import { useWallet } from '@mysten/dapp-kit';
import { Upload } from 'lucide-react';

export function UploadForm() {
  const { address } = useWallet();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleUpload() {
    if (!file || !address) return alert('Vui lòng chọn file và connect wallet');

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('address', address);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setResult(data);
    setUploading(false);
  }

  return (
    <div className="p-8 border border-dashed rounded-3xl text-center">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <Upload className="mx-auto mb-4" size={48} />
        <p className="text-xl">Click to upload memory</p>
      </label>

      {file && <p className="mt-4 text-sm">{file.name}</p>}

      <button
        onClick={handleUpload}
        disabled={uploading || !file}
        className="mt-6 px-8 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-2xl disabled:opacity-50"
      >
        {uploading ? 'Uploading to Walrus...' : 'Upload to Walrus + Sui'}
      </button>

      {result && <pre className="mt-6 text-left text-xs bg-black p-4 rounded-2xl overflow-auto">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}