import { Brain } from "lucide-react";
import { AgentData } from "../../../types/agents";

export default function AgentCard({ title, description, features }: AgentData) {
  return (
    <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg space-y-4">
      <div className="flex items-center space-x-3">
        <Brain className="h-6 w-6 text-matrix-primary" />
        <h3 className="text-xl font-mono">{title}</h3>
      </div>
      <p className="text-matrix-primary/80 font-mono">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="h-2 w-2 rounded-full bg-matrix-primary mt-2" />
              <span className="text-matrix-primary/80 font-mono">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
