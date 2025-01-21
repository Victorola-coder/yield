import { useState } from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [minTVL, setMinTVL] = useState("1");
  const [minAPR, setMinAPR] = useState("0");
  const [minWeeklyRewards, setMinWeeklyRewards] = useState("100");
  const [showFavorites, setShowFavorites] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-16">
      <div className="w-[350px] rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a] bg-[#1c1c1c] p-4">
        <div className="flex flex-col gap-6">
          {/* Chains */}
          <div className="space-y-2">
            <h3 className="text-sm text-white">Chains</h3>
            <div className="grid grid-cols-6 gap-2">
              {/* Chain icons */}
              {Array(14)
                .fill(0)
                .map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a] bg-[#2a2a2a] p-2 hover:border-white/50"
                  >
                    <div className="h-full w-full rounded-[calc(var(--radius)-2px)] bg-gray-500" />
                  </button>
                ))}
            </div>
          </div>

          {/* Protocols */}
          <div className="space-y-2">
            <h3 className="text-sm text-white">Protocols</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a] bg-[#2a2a2a] p-2 hover:border-white/50"
                  >
                    <div className="h-full w-full rounded-[calc(var(--radius)-2px)] bg-gray-500" />
                  </button>
                ))}
            </div>
          </div>

          {/* Farm Types */}
          <div className="space-y-2">
            <h3 className="text-sm text-white">Farm Types</h3>
            <div className="flex gap-2">
              {["volatile", "stable", "concentrated"].map((type) => (
                <button
                  key={type}
                  className="rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a] bg-[#2a2a2a] px-4 py-1.5 text-sm text-white hover:border-white/50"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Min TVL */}
          <div className="space-y-2">
            <h3 className="text-sm text-white">Min TVL (K)</h3>
            <input
              type="number"
              value={minTVL}
              onChange={(e) => setMinTVL(e.target.value)}
              className="h-10 w-full rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a] bg-[#2a2a2a] px-3 text-sm text-white focus:outline-none"
            />
          </div>

          {/* Min APR */}
          <div className="space-y-2">
            <h3 className="text-sm text-white">Min APR (%)</h3>
            <input
              type="number"
              value={minAPR}
              onChange={(e) => setMinAPR(e.target.value)}
              className="h-10 w-full rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a] bg-[#2a2a2a] px-3 text-sm text-white focus:outline-none"
            />
          </div>

          {/* Min Weekly Rewards */}
          <div className="space-y-2">
            <h3 className="text-sm text-white">Min Weekly Rewards ($)</h3>
            <input
              type="number"
              value={minWeeklyRewards}
              onChange={(e) => setMinWeeklyRewards(e.target.value)}
              className="h-10 w-full rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a] bg-[#2a2a2a] px-3 text-sm text-white focus:outline-none"
            />
          </div>

          {/* Show favorites */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-white">Show favorites only</span>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="relative h-6 w-11 rounded-full bg-[#2a2a2a] p-0.5"
            >
              <div
                className={`absolute h-5 w-5 rounded-full bg-gray-400 transition-all ${
                  showFavorites ? "left-[calc(100%-20px)]" : "left-0.5"
                }`}
              />
            </button>
          </div>

          {/* Reset button */}
          <button className="w-full rounded-[calc(var(--radius)-2px)] bg-red-900/20 px-4 py-2 text-sm text-red-500 hover:bg-red-900/30">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
