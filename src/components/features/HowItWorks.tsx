const steps = [
  { number: "01", title: "Capture Memory", desc: "Upload files, conversations, images, or any data to your memory vault." },
  { number: "02", title: "Store on Walrus", desc: "Your data is stored on Walrus, a decentralized storage protocol." },
  { number: "03", title: "Verify on Sui", desc: "Ownership is recorded on Sui blockchain through smart contracts." },
  { number: "04", title: "Access Through AI", desc: "Retrieve, search, and interact with your memories using AI-powered interfaces." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="eyebrow text-amber-600">HOW WST WORKS</div>
          <h2 className="text-5xl font-bold mt-4">The Future of Memory is Decentralized</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From capture to AI retrieval — fully decentralized, verified, and secured.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="feature-card p-8 text-center hover:scale-105 transition-all">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white text-3xl font-bold">
                {step.number}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}