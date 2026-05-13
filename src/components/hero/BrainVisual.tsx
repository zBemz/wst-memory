export default function BrainVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="relative h-[520px] w-[520px] flex items-center justify-center">
        {/* Glow background */}
        <div className="absolute w-[420px] h-[420px] bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-3xl opacity-60" />

        {/* Main Brain Stage */}
        <div className="brain-stage relative w-[380px] h-[380px] rounded-full border border-amber-200 bg-gradient-to-br from-white to-amber-50 shadow-2xl shadow-amber-500/30 flex items-center justify-center overflow-hidden">
          
          {/* Brain Core */}
          <div className="w-[220px] h-[220px] bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-inner">
            <div className="text-7xl font-black text-amber-950 tracking-widest drop-shadow-md">WST</div>
          </div>

          {/* Orbiting rings */}
          <div className="absolute w-[300px] h-[300px] border border-amber-300/60 rounded-full" />
          <div className="absolute w-[340px] h-[340px] border border-amber-300/30 rounded-full" />

          {/* Floating Cards */}
          <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 w-40 text-center border border-amber-100">
            <div className="text-3xl mb-1">📦</div>
            <p className="font-semibold text-sm">Walrus Storage</p>
          </div>

          <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-xl p-4 w-40 text-center border border-blue-100">
            <div className="text-3xl mb-1">🌊</div>
            <p className="font-semibold text-sm">Sui Network</p>
          </div>

          <div className="absolute top-12 right-[-60px] bg-white rounded-2xl shadow-xl p-4 w-36 text-center border border-purple-100">
            <div className="text-3xl mb-1">🤖</div>
            <p className="font-semibold text-sm">AI Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
}