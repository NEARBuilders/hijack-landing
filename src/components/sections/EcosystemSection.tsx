import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="space-y-8">
      <h2 className="text-4xl font-matrix text-matrix-primary matrix-text glitch" data-text="NEAR Ecosystem">
        NEAR Ecosystem
      </h2>
      <div className="grid md:grid-cols-4 gap-4">
        {['Ref Finance', 'Paras', 'Burrow', 'Meta Pool'].map((project) => (
          <a
            key={project}
            href="#"
            className="bg-matrix-dark/30 border border-matrix-primary p-4 rounded-lg hover:bg-matrix-primary/10 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono">{project}</span>
              <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}