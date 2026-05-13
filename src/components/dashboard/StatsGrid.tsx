const stats = [
  { label: "Total Memories", value: "248", change: "+34", unit: "" },
  { label: "Storage Used", value: "4.82", change: "+12%", unit: "GB" },
  { label: "Walrus Blobs", value: "673", change: "Live", unit: "" },
  { label: "Transactions", value: "1,284", change: "+89", unit: "" },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="glass p-8 rounded-3xl border border-amber-500/20 bg-white/5">
          <p className="text-gray-400 text-sm">{stat.label}</p>
          <p className="text-5xl font-bold mt-4 tracking-tighter">{stat.value}</p>
          <p className="text-emerald-400 text-sm mt-2">{stat.change} {stat.unit}</p>
        </div>
      ))}
    </div>
  );
}