
export default function CommunitySection() {
  return (
    <section id="community" className="space-y-8">
      <h2 className="text-4xl font-matrix text-matrix-primary matrix-text glitch" data-text="Community Story">
        Community Story
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">Our Mission</h3>
          <p className="text-matrix-primary/80 font-mono">
            Aligned with NearAI, we're building a decentralized future where AI meets blockchain technology.
            Our community drives innovation in the NEAR ecosystem through collaborative development and governance.
          </p>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">Latest Updates</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-matrix-primary animate-pulse-matrix" />
              <span className="text-matrix-primary/80 font-mono">Community governance milestone reached</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-matrix-primary animate-pulse-matrix" />
              <span className="text-matrix-primary/80 font-mono">New partnership with NearAI announced</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}