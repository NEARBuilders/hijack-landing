import React from 'react';
import { Gavel } from 'lucide-react';

export default function GovernanceSection() {
  return (
    <section id="governance" className="space-y-8">
      <h2 className="text-4xl font-matrix text-matrix-primary matrix-text glitch" data-text="Governance">
        Governance
      </h2>
      <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg">
        <Gavel className="h-8 w-8 mb-4 text-matrix-primary" />
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-mono mb-2">DAO Members</h3>
            <p className="text-matrix-primary/80 font-mono">1,337 active members</p>
          </div>
          <div>
            <h3 className="text-xl font-mono mb-2">Treasury</h3>
            <p className="text-matrix-primary/80 font-mono">$2.5M managed</p>
          </div>
          <div>
            <h3 className="text-xl font-mono mb-2">Proposals</h3>
            <p className="text-matrix-primary/80 font-mono">23 active proposals</p>
          </div>
        </div>
      </div>
    </section>
  );
}