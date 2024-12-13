import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-matrix-dark/50 border-t border-matrix-primary/30 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono">HiJack</h3>
            <p className="text-sm text-matrix-primary/70 font-mono">
              Building the future of AI on NEAR Protocol
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono">Social</h3>
            <div className="space-y-2">
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">Telegram</a>
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">Twitter</a>
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">Discord</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">Documentation</a>
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">GitHub</a>
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">Blog</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-mono">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">Privacy Policy</a>
              <a href="#" className="block text-matrix-primary/70 hover:text-matrix-primary font-mono">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-matrix-primary/30 text-center text-sm text-matrix-primary/70 font-mono">
          © {new Date().getFullYear()} HiJack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}