import { Coins } from "lucide-react";

export default function TokenSection() {
  return (
    <section id="token" className="space-y-8">
      <h2
        className="text-4xl font-matrix text-matrix-primary matrix-text glitch"
        data-text="$HiJack Token"
      >
        $HiJack Token
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg space-y-4">
          <Coins className="h-8 w-8 text-matrix-primary" />
          <h3 className="text-xl font-mono">How to Buy</h3>
          <ul className="space-y-2 text-matrix-primary/80 font-mono">
            <li>1. Bridge assets to NEAR Protocol</li>
            <li>2. Connect to Ref Finance DEX</li>
            <li>3. Swap for $HiJack tokens</li>
          </ul>
        </div>
        <div className="bg-matrix-dark/30 border border-matrix-primary p-6 rounded-lg space-y-4">
          <h3 className="text-xl font-mono">Token Metrics</h3>
          <div className="space-y-2 text-matrix-primary/80 font-mono">
            <p>Total Supply: 1,000,000,000</p>
            <p>Circulating: 250,000,000</p>
            <p>Locked: 750,000,000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
