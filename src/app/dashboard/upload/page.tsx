import UploadForm from "@/components/upload/UploadForm";

export default function UploadPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-black tracking-tight">
          Upload Memory
        </h1>

        <p className="text-muted-foreground mt-2 text-lg">
          Store encrypted AI memories on Walrus + Sui.
        </p>
      </div>

      <UploadForm />
    </section>
  );
}