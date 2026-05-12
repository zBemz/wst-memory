const stats = [
  {
    label: "Total Memories",
    value: "128",
    growth: "+21.5%",
  },

  {
    label: "Storage Used",
    value: "2.45 GB",
    growth: "+8.2%",
  },

  {
    label: "Walrus Blobs",
    value: "342",
    growth: "Live",
  },

  {
    label: "Transactions",
    value: "276",
    growth: "+15.3%",
  },
];

export default function StatsGrid() {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <article
          className="stat-card"
          key={stat.label}
        >
          <span>{stat.label}</span>

          <strong>{stat.value}</strong>

          <em>{stat.growth}</em>
        </article>
      ))}
    </div>
  );
}