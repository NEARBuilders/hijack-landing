import { Bot } from "lucide-react";
import AgentCard from "./agents/AgentCard";
import ContactCTA from "./agents/ContactCTA";
import { agentsList } from "../../data/agents";

export default function AIAgentsSection() {
  return (
    <section id="ai-agents" className="space-y-12">
      <div className="space-y-6">
        <h2
          className="text-4xl font-matrix text-matrix-primary matrix-text glitch"
          data-text="AI Agents"
        >
          AI Agents
        </h2>
        <p className="text-matrix-primary/80 font-mono text-lg">
          Our Community recognises the incredible potential of AI Agents in the
          future.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {agentsList.map((agent) => (
          <AgentCard key={agent.id} {...agent} />
        ))}
      </div>

      <div className="bg-matrix-dark/30 border border-matrix-primary p-8 rounded-lg">
        <div className="flex items-start space-x-4">
          <Bot className="h-8 w-8 text-matrix-primary flex-shrink-0 mt-1" />
          <div className="space-y-4">
            <p className="text-matrix-primary/80 font-mono">
              We are dedicated to focusing on creating AI agents that will
              return value to holders of $HiJack and the wider Near Ecosystem.
            </p>
            <p className="text-matrix-primary/80 font-mono">
              We will look to create, collab or fund projects or devs that are
              involved in building AI agents.
            </p>
          </div>
        </div>
      </div>

      <ContactCTA />
    </section>
  );
}
