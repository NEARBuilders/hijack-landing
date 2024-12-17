import { Bot, Zap } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-matrix-green font-mono">
                  Initializing HiJack Protocol
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl font-matrix">
                  <span
                    className="block text-matrix-green matrix-text glitch"
                    data-text="The Future of AI"
                  >
                    The Future of AI
                  </span>
                  <span className="block text-matrix-green">
                    on NEAR Protocol
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-matrix-green/90 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-mono">
                Enter the matrix where community-driven AI meets blockchain
                technology. Building the next generation of AI agents on the
                NEAR ecosystem.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://meme.cooking/meme/252"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center rounded-lg bg-matrix-dark border border-matrix-green px-4 py-3 text-base font-mono text-matrix-green hover:bg-matrix-green hover:text-black transition-all duration-300"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Get $HiJack
                  </a>
                  <a
                    href="#ai-agents"
                    className="flex items-center justify-center rounded-lg bg-matrix-green/10 border border-matrix-green px-4 py-3 text-base font-mono text-matrix-green hover:bg-matrix-green hover:text-black transition-all duration-300"
                  >
                    <Bot className="mr-2 h-5 w-5" />
                    Explore AI Agents
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
              <div className="bg-black border border-matrix-green sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg">
                <div className="px-4 py-8 sm:px-10">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-matrix-green" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-black px-2 text-matrix-green font-mono">
                        System Updates
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-matrix-green animate-pulse-matrix" />
                      <p className="text-sm text-matrix-green font-mono">
                        New AI agent deployment on NEAR testnet
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-matrix-green animate-pulse-matrix" />
                      <p className="text-sm text-matrix-green font-mono">
                        Community governance proposal #23 passed
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="h-2 w-2 mt-2 rounded-full bg-matrix-green animate-pulse-matrix" />
                      <p className="text-sm text-matrix-green font-mono">
                        Partnership announcement with NearAI
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
