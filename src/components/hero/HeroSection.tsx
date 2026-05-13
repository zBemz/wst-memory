import BrainVisual from './BrainVisual';

export default function HeroSection() {
  return (
    <section className="hero py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
            AI-NATIVE DECENTRALIZED MEMORY PROTOCOL
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter">
            Own Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400">AI Memory</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-lg">
            WST-Memory enables you to store, own, and interact with your memories, files, 
            and digital identity on a decentralized infrastructure powered by Walrus, 
            secured by Sui, and connected through Tatum RPC.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-primary px-10 py-4 rounded-2xl text-lg font-semibold">
              Connect Wallet
            </button>
            <button className="border-2 border-gray-300 hover:border-amber-400 px-8 py-4 rounded-2xl text-lg font-medium">
              Upload Memory
            </button>
            <button className="border-2 border-gray-300 hover:border-amber-400 px-8 py-4 rounded-2xl text-lg font-medium">
              Launch App →
            </button>
          </div>

          <div className="flex gap-8 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xs font-bold">W</div>
              <span className="font-medium">Walrus</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xs font-bold">S</div>
              <span className="font-medium">Sui</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white text-xs font-bold">T</div>
              <span className="font-medium">Tatum</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <BrainVisual />
        </div>
      </div>
    </section>
  );
}