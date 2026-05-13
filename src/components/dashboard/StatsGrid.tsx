const stats = [
  { label: "Total Memories", value: "128", change: "+21.5%", color: "text-emerald-600" },
  { label: "Storage Used", value: "2.45 GB", change: "+8.2%", color: "text-emerald-600" },
  { label: "Walrus Blobs", value: "342", change: "Live", color: "text-emerald-600" },
  { label: "Transactions", value: "276", change: "+15.3%", color: "text-emerald-600" },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="stat-card bg-white p-8 rounded-3xl border border-amber-100">
          <p className="text-gray-500 text-sm">{stat.label}</p>
          <p className="text-4xl font-bold mt-3 mb-1">{stat.value}</p>
          <p className={`text-sm font-medium ${stat.color}`}>{stat.change}</p>
        </div>
      ))}
    </div>
  );
}