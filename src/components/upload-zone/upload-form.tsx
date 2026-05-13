'use client';

import { useState } from 'react';

import {
  useCurrentAccount,
  ConnectButton,
} from '@mysten/dapp-kit';

import { Upload, FileText } from 'lucide-react';

export function UploadForm() {

  const account = useCurrentAccount();

  const [file, setFile] = useState<File | null>(null);

  const [uploading, setUploading] = useState(false);

  const [result, setResult] = useState<any>(null);

  async function handleUpload() {

    if (!file || !account?.address) {
      alert('Please connect wallet and choose a file.');
      return;
    }

    try {

      setUploading(true);

      const formData = new FormData();

      formData.append('file', file);

      formData.append('address', account.address);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      setResult(data);

    } catch (err) {

      console.error(err);

      alert('Upload failed.');

    } finally {

      setUploading(false);

    }
  }

  return (

    <div className="relative">

      <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full" />

      <div className="relative bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[40px] p-10 md:p-14">

        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          <div>
            <h2 className="text-3xl font-black text-[#0f172a]">
              Memory Upload Portal
            </h2>

            <p className="text-neutral-500 mt-2">
              Upload files to Walrus decentralized storage
            </p>
          </div>

          <ConnectButton />

        </div>

        {/* Upload Zone */}
        <div className="border-2 border-dashed border-yellow-400/70 bg-[#fffdf8] rounded-[32px] p-16 text-center transition hover:border-yellow-500">

          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />

          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center"
          >

            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center shadow-xl mb-8">

              <Upload
                size={42}
                className="text-black"
              />

            </div>

            <h3 className="text-3xl font-bold text-[#0f172a]">
              Click to Upload
            </h3>

            <p className="text-neutral-500 mt-3 text-lg">
              Images, PDFs, AI memories, metadata and documents
            </p>

          </label>

          {file && (

            <div className="mt-10 flex items-center justify-center gap-4 bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm">

              <FileText className="text-yellow-500" />

              <span className="font-semibold text-neutral-700">
                {file.name}
              </span>

            </div>

          )}

          <button
            onClick={handleUpload}
            disabled={uploading || !file}
            className="mt-10 px-10 py-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-lg font-bold shadow-xl hover:scale-[1.03] transition disabled:opacity-40"
          >

            {uploading
              ? 'Uploading to Walrus...'
              : 'Upload to Walrus + Sui'}

          </button>

          {result && (

            <div className="mt-10 text-left">

              <h4 className="font-bold text-[#0f172a] mb-4">
                Upload Result
              </h4>

              <pre className="bg-black text-green-400 text-xs p-6 rounded-2xl overflow-auto">
                {JSON.stringify(result, null, 2)}
              </pre>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}