import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function ContentHubSection() {
  return (
    <section id="content" className="space-y-8">
      <h2 className="text-4xl font-matrix text-matrix-primary matrix-text glitch" data-text="Content Hub">
        Content Hub
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <BookOpen className="h-8 w-8 mb-4 text-matrix-primary" />
          <h3 className="text-xl font-mono mb-4">Weekly AI Spotlight</h3>
          <div className="space-y-4 text-matrix-primary/80 font-mono">
            <p>Featured projects and developments in the AI space</p>
            <a href="#" className="inline-flex items-center space-x-2 text-matrix-primary hover:text-matrix-primary/80">
              <span>Read Latest</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
          <h3 className="text-xl font-mono mb-4">NearAI Updates</h3>
          <div className="space-y-4 text-matrix-primary/80 font-mono">
            <p>Latest developments and announcements from NearAI</p>
            <a href="#" className="inline-flex items-center space-x-2 text-matrix-primary hover:text-matrix-primary/80">
              <span>View Updates</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}