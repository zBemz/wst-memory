interface Props {
  progress: number;
}

export default function UploadProgress({
  progress,
}: Props) {
  return (
    <div className="glass rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium">
          Uploading Memory
        </span>

        <span className="text-primary font-bold">
          {progress}%
        </span>
      </div>

      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}