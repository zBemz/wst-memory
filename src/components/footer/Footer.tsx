export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-xl font-bold">WST</div>
              <div>
                <strong className="text-2xl">WST-MEMORY</strong>
                <small className="block text-amber-400">WAVE SYNAPTIC TRANSFER</small>
              </div>
            </div>
            <p className="text-gray-400 max-w-md">
              AI-native decentralized memory protocol built on Walrus, secured by Sui, and connected through Tatum RPC.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#features">Features</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/upload">Upload</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Documentation</li>
              <li>GitHub</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border border-gray-700 rounded-2xl px-5 py-3 flex-1 focus:outline-none focus:border-amber-400"
              />
              <button className="bg-amber-400 text-black px-8 rounded-2xl font-semibold">→</button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © 2025 WST-Memory. All rights reserved. Built for Sui + Walrus Hackathon.
        </div>
      </div>
    </footer>
  );
}