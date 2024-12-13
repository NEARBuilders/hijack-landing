import { Bot, Network, Users } from 'lucide-react';

export default function AIAgentsSection() {
  return (
    <section id="ai-agents" className="space-y-8">
      <h2 className="text-4xl font-matrix text-matrix-primary matrix-text glitch" data-text="AI Agents">
        AI Agents
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <Bot className="h-8 w-8 mb-4 text-matrix-primary" />
          <h3 className="text-xl font-mono mb-2">Neural Networks</h3>
          <p className="text-matrix-primary/80 font-mono">Advanced AI agents leveraging NEAR's computational power</p>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <Network className="h-8 w-8 mb-4 text-matrix-primary" />
          <h3 className="text-xl font-mono mb-2">Decentralized Learning</h3>
          <p className="text-matrix-primary/80 font-mono">Collaborative AI training across the NEAR network</p>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <Users className="h-8 w-8 mb-4 text-matrix-primary" />
          <h3 className="text-xl font-mono mb-2">Community Agents</h3>
          <p className="text-matrix-primary/80 font-mono">User-developed AI agents for specific use cases</p>
        </div>
      </div>
    </section>
  );
}