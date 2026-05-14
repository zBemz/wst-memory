export default function TransactionPanel() {
  const txs = ["Memory Stored", "Ownership Verified", "Blob Shared", "Permission Updated"];

  return (
    <div className="glass p-8 rounded-3xl">
      <h3 className="text-xl font-semibold mb-6">Recent Transactions</h3>
      <div className="space-y-4">
        {txs.map((tx, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
            <div>{tx}</div>
            <div className="text-emerald-400 text-sm">✓ Confirmed</div>
          </div>
        ))}
      </div>
    </div>
  );
}