import {
  CheckCircle2,
  ExternalLink,
  Database,
} from "lucide-react";

interface Props {
  result: any;
}

export default function UploadResult({
  result,
}: Props) {
  return (
    <div className="rounded-[28px] border border-emerald-500/20 bg-emerald-500/10 p-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-emerald-400">
            Upload Successful
          </h3>

          <p className="text-muted-foreground mt-1">
            Your memory has been stored on Walrus.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass rounded-2xl p-5 border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Database className="w-5 h-5 text-primary" />

            <span className="font-semibold">
              Blob ID
            </span>
          </div>

          <p className="break-all text-sm text-muted-foreground">
            {result?.blobId || "Unavailable"}
          </p>
        </div>

        {result?.url && (
          <a
            href={result.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-primary-foreground font-semibold transition hover:opacity-90"
          >
            View on Walrus

            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}