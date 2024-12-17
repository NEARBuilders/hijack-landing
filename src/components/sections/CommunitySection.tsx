export default function CommunitySection() {
  return (
    <section id="community" className="space-y-8">
      <h2
        className="text-4xl font-matrix text-matrix-primary matrix-text glitch"
        data-text="Web2 to Web3 Journey"
      >
        Web2 to Web3 Journey
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">The Evolution</h3>
          <p className="text-matrix-primary/80 font-mono">
            From traditional Web2 AI solutions to decentralized Web3
            infrastructure, HiJack represents the next evolution in AI
            technology. Our journey bridges the gap between centralized and
            decentralized AI systems.
          </p>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">Milestones</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-matrix-primary animate-pulse-matrix" />
              <span className="text-matrix-primary/80 font-mono">
                Web2 AI Integration Phase
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-matrix-primary animate-pulse-matrix" />
              <span className="text-matrix-primary/80 font-mono">
                NEAR Protocol Integration
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-matrix-primary animate-pulse-matrix" />
              <span className="text-matrix-primary/80 font-mono">
                Decentralized AI Launch
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
