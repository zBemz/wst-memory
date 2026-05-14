import UploadForm from "@/components/upload/UploadForm";

export default function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-black tracking-tighter">Upload New Memory</h1>
        <p className="text-gray-400 mt-4">Permanently stored on Walrus • Owned on Sui Mainnet</p>
      </div>
      <UploadForm />
    </div>
  );
}