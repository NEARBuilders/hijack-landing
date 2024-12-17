import { BookOpen, ExternalLink } from "lucide-react";

export default function ContentHubSection() {
  return (
    <section id="content" className="space-y-8">
      <h2
        className="text-4xl font-matrix text-matrix-primary matrix-text glitch"
        data-text="AI Content Hub"
      >
        AI Content Hub
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <BookOpen className="h-8 w-8 mb-4 text-matrix-primary" />
          <h3 className="text-xl font-mono mb-4">Aggregated AI News</h3>
          <div className="space-y-4 text-matrix-primary/80 font-mono">
            <p>Curated news from Ringfence and other NEAR AI projects</p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-matrix-primary hover:text-matrix-primary/80"
            >
              <span>View Feed</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">AI Spaces</h3>
          <div className="space-y-4 text-matrix-primary/80 font-mono">
            <p>Discover collaborative AI development spaces on NEAR</p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-matrix-primary hover:text-matrix-primary/80"
            >
              <span>Explore Spaces</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
