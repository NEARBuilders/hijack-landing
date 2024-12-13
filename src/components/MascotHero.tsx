import React from 'react';
import { Bot, Zap } from 'lucide-react';

export default function MascotHero() {
  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-base font-semibold text-matrix-primary font-mono">Initializing HiJack Protocol</span>
              <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl font-matrix">
                <span className="block text-matrix-primary matrix-text glitch" data-text="The Future of AI">The Future of AI</span>
                <span className="block text-matrix-primary">on NEAR Protocol</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-matrix-primary/90 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-mono">
              Enter the matrix where community-driven AI meets blockchain technology. 
              Building the next generation of AI agents on the NEAR ecosystem.
            </p>
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#token"
                  className="flex items-center justify-center rounded-lg bg-matrix-dark border border-matrix-primary px-4 py-3 text-base font-mono text-matrix-primary hover:bg-matrix-primary hover:text-black transition-all duration-300"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Get $HiJack
                </a>
                <a
                  href="#ai-agents"
                  className="flex items-center justify-center rounded-lg bg-matrix-primary/10 border border-matrix-primary px-4 py-3 text-base font-mono text-matrix-primary hover:bg-matrix-primary hover:text-black transition-all duration-300"
                >
                  <Bot className="mr-2 h-5 w-5" />
                  Explore AI Agents
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-full">
              <img
                src="./Hijack.jpg"
                alt="HiJack Mascot"
                className="w-full h-auto max-w-md mx-auto lg:max-w-full animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}