import { Menu, X } from "lucide-react";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50 border-b border-matrix-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span
                className="text-2xl font-bold font-matrix text-matrix-green matrix-text glitch"
                data-text="HiJack"
              >
                HiJack
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* <a
                href="#community"
                className="text-matrix-green/70 hover:text-matrix-green px-3 py-2 rounded-md text-sm font-mono"
              >
                Community Story
              </a> */}
              <a
                href="#ai-agents"
                className="text-matrix-green/70 hover:text-matrix-green px-3 py-2 rounded-md text-sm font-mono"
              >
                AI Agents
              </a>
              {/* <a
                href="#token"
                className="text-matrix-green/70 hover:text-matrix-green px-3 py-2 rounded-md text-sm font-mono"
              >
                $HiJack Token
              </a> */}
              <a
                href="#ecosystem"
                className="text-matrix-green/70 hover:text-matrix-green px-3 py-2 rounded-md text-sm font-mono"
              >
                Near Eco
              </a>
              {/* <a
                href="#content"
                className="text-matrix-green/70 hover:text-matrix-green px-3 py-2 rounded-md text-sm font-mono"
              >
                AI Content Hub
              </a> */}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-matrix-green/70 hover:text-matrix-green hover:bg-matrix-dark focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* <a
              href="#community"
              className="text-matrix-green/70 hover:text-matrix-green block px-3 py-2 rounded-md text-base font-mono"
            >
              Community Story
            </a> */}
            <a
              href="#ai-agents"
              className="text-matrix-green/70 hover:text-matrix-green block px-3 py-2 rounded-md text-base font-mono"
            >
              AI Agents
            </a>
            {/* <a
              href="#token"
              className="text-matrix-green/70 hover:text-matrix-green block px-3 py-2 rounded-md text-base font-mono"
            >
              $HiJack Token
            </a> */}
            <a
              href="#ecosystem"
              className="text-matrix-green/70 hover:text-matrix-green block px-3 py-2 rounded-md text-base font-mono"
            >
              Near Eco
            </a>
            {/* <a
              href="#content"
              className="text-matrix-green/70 hover:text-matrix-green block px-3 py-2 rounded-md text-base font-mono"
            >
              AI Content Hub
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
}
