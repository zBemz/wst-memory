export default function BrainVisual() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      <div className="brain-stage relative h-[520px] w-[520px] rounded-[999px] flex items-center justify-center 
                      bg-gradient-to-br from-amber-100 via-yellow-50 to-white 
                      shadow-2xl shadow-amber-500/30 border border-amber-200">

        {/* Glow Core */}
        <div className="absolute w-[280px] h-[280px] bg-gradient-to-br from-amber-400 to-yellow-300 
                        rounded-full blur-3xl opacity-70" />

        {/* Brain Core */}
        <div className="brain-core relative w-[260px] h-[260px] rounded-full 
                        bg-gradient-to-br from-amber-300 to-yellow-400 
                        shadow-[0_0_80px_#fbbf24,inset_0_0_40px_rgba(255,255,255,0.9)] 
                        flex items-center justify-center z-10">
          <div className="text-8xl font-black text-amber-900 drop-shadow-xl tracking-widest">WST</div>
        </div>

        {/* Floating Cards */}
        <div className="absolute -top-6 -right-8 bg-white rounded-2xl shadow-xl p-4 w-40 text-center border border-amber-200">
          <div className="text-2xl mb-1">🧠</div>
          <p className="font-semibold text-sm">Walrus Storage</p>
        </div>

        <div className="absolute -bottom-4 -left-10 bg-white rounded-2xl shadow-xl p-4 w-40 text-center border border-blue-200">
          <div className="text-2xl mb-1">🌊</div>
          <p className="font-semibold text-sm">Sui Network</p>
        </div>

        <div className="absolute top-12 -left-12 bg-white rounded-2xl shadow-xl p-4 w-36 text-center border border-purple-200">
          <div className="text-2xl mb-1">🤖</div>
          <p className="font-semibold text-sm">AI Agent</p>
        </div>
      </div>
    </div>
  );
}