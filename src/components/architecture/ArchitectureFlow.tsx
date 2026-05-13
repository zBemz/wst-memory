export default function ArchitectureFlow() {
  const items = [
    { name: "Frontend App", icon: "🖥️" },
    { name: "Walrus Storage Layer", icon: "📦" },
    { name: "Sui Smart Contracts", icon: "🔗" },
    { name: "Tatum RPC Gateway", icon: "⚡" },
    { name: "WST AI Agent System", icon: "🤖" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <div className="eyebrow mb-4">ARCHITECTURE</div>
        <h2 className="text-5xl font-bold mb-4">Built on Decentralized Infrastructure</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-6 mt-16">
          {items.map((item, i) => (
            <div key={i} className="feature-card px-8 py-6 min-w-[180px]">
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}