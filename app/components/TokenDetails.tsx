import { useState } from "react";

interface TokenDetailsProps {
  selectedFarm?: Farm;
}

export function TokenDetails({ selectedFarm }: TokenDetailsProps) {
  const [amount, setAmount] = useState("0");
  const [maxAmount, setMaxAmount] = useState("0.01");

  if (!selectedFarm) return null;

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2.5 border-b border-[#2a2a2a] p-4 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 text-sm text-white truncate">
            {selectedFarm.name} on {selectedFarm.protocol.name}
          </div>
          <span className="rounded bg-[#2a2a2a] px-2 py-0.5 text-xs text-gray-400 whitespace-nowrap">
            {selectedFarm.apr.toFixed(2)}%
          </span>
        </div>
        <button className="w-full sm:w-auto mt-2 sm:mt-0 rounded whitespace-nowrap bg-[#2a2a2a] px-3 py-1 text-sm text-white hover:bg-[#3a3a3a]">
          View farm
        </button>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {/* Price Tabs */}
        <div className="flex rounded-lg bg-[#2a2a2a] p-1">
          <button className="flex-1 rounded bg-[#1c1c1c] py-2 text-sm text-white truncate px-2">
            Price in {selectedFarm.tokens[0].symbol}
          </button>
          <button className="flex-1 py-2 text-sm text-gray-400 truncate px-2">
            Price in {selectedFarm.tokens[1].symbol}
          </button>
        </div>

        {/* Token Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Token to send</label>
          <div className="flex h-10 items-center rounded-md border border-[#2a2a2a] bg-[#1c1c1c]">
            <input
              type="text"
              placeholder="Select a token to send..."
              className="w-full bg-transparent px-3 text-white placeholder:text-gray-500 focus:outline-none"
            />
            <button className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-400"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Range Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-400">Min price</label>
              <span className="text-xs text-gray-400">{amount} (0%)</span>
            </div>
            <div className="flex h-10 items-center rounded-md border border-[#2a2a2a] bg-[#1c1c1c]">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent px-3 text-white focus:outline-none"
              />
              <div className="flex gap-1 px-2">
                <button className="text-gray-400 hover:text-white">-</button>
                <button className="text-gray-400 hover:text-white">+</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-400">Max price</label>
              <span className="text-xs text-gray-400">{maxAmount} (0.01%)</span>
            </div>
            <div className="flex h-10 items-center rounded-md border border-[#2a2a2a] bg-[#1c1c1c]">
              <input
                type="number"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="w-full bg-transparent px-3 text-white focus:outline-none"
              />
              <div className="flex gap-1 px-2">
                <button className="text-gray-400 hover:text-white">-</button>
                <button className="text-gray-400 hover:text-white">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* New Position Info */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">New position</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Width: 0.01%</span>
            <span className="text-gray-400">
              APR: {selectedFarm.apr.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Position Graph */}
        <div className="relative h-32 rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] p-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-green-500/20"></div>
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-green-500/20 to-transparent"></div>
          </div>
        </div>

        {/* Automation Toggles */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-md border border-[#2a2a2a] bg-[#1c1c1c] p-4">
            <span className="text-sm text-white">Automate Rebalancing</span>
            <button className="relative h-6 w-11 rounded-full bg-[#2a2a2a] p-0.5">
              <div className="absolute left-0.5 h-5 w-5 rounded-full bg-gray-400 transition-all"></div>
            </button>
          </div>
          <div className="flex items-center justify-between rounded-md border border-[#2a2a2a] bg-[#1c1c1c] p-4">
            <span className="text-sm text-white">Automate Rewards</span>
            <button className="relative h-6 w-11 rounded-full bg-[#2a2a2a] p-0.5">
              <div className="absolute left-0.5 h-5 w-5 rounded-full bg-gray-400 transition-all"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
