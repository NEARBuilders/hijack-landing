import { ExternalLink } from "lucide-react";

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="space-y-8">
      <h2
        className="text-4xl font-matrix text-matrix-primary matrix-text glitch"
        data-text="NEAR Ecosystem"
      >
        NEAR Ecosystem
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">Featured Projects</h3>
          <div className="space-y-2">
            {["Ref Finance", "Paras", "Burrow", "Meta Pool"].map((project) => (
              <a
                key={project}
                href="#"
                className="flex items-center justify-between p-2 hover:bg-matrix-primary/10 rounded transition-all duration-300"
              >
                <span className="font-mono">{project}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">NEAR Catalog</h3>
          <p className="text-matrix-primary/80 font-mono mb-4">
            Explore the complete catalog of projects building on NEAR Protocol
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-matrix-primary hover:text-matrix-primary/80"
          >
            <span>View Catalog</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">Integration Guide</h3>
          <p className="text-matrix-primary/80 font-mono mb-4">
            Learn how to integrate your project with the NEAR ecosystem
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-matrix-primary hover:text-matrix-primary/80"
          >
            <span>Read Guide</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
