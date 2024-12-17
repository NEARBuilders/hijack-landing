import { MessageSquare } from "lucide-react";

export default function ContactCTA() {
  return (
    <div className="bg-matrix-dark/30 border border-matrix-primary p-8 rounded-lg text-center space-y-6">
      <div className="flex justify-center">
        <MessageSquare className="h-12 w-12 text-matrix-primary" />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-mono">Have an AI Agent Idea?</h3>
        <p className="text-matrix-primary/80 font-mono max-w-2xl mx-auto">
          Please get in contact if you have an idea of how we could create an AI
          agent for some area of society. No question is stupid. ASK!
        </p>
        <a
          href="#contact"
          className="inline-block bg-matrix-primary/10 hover:bg-matrix-primary/20 border border-matrix-primary px-6 py-3 rounded-lg text-matrix-primary font-mono transition-all duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
