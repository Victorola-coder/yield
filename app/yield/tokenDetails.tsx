import { useState } from "react";

interface TokenDetailsProps {
  selectedFarm: Farm;
}

export function TokenDetails({ selectedFarm }: TokenDetailsProps) {
  const [amount, setAmount] = useState("0");
  const [maxAmount, setMaxAmount] = useState("0.01");

  if (!selectedFarm) return null;

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between gap-2.5 border-b border-gray-200 p-4 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 text-sm text-gray-900 truncate">
            {selectedFarm.name} on {selectedFarm.protocol.name}
          </div>
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
            {selectedFarm.apr.toFixed(2)}%
          </span>
        </div>
        <button className="w-full sm:w-auto mt-2 sm:mt-0 rounded whitespace-nowrap bg-gray-100 px-3 py-1 text-sm text-gray-900 hover:bg-gray-200">
          View farm
        </button>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {/* Price Tabs */}
        <div className="flex rounded-lg bg-gray-100 p-1">
          <button className="flex-1 rounded bg-white py-2 text-sm text-gray-900 truncate px-2 shadow-sm">
            Price in {selectedFarm.tokens[0].symbol}
          </button>
          <button className="flex-1 py-2 text-sm text-gray-600 truncate px-2">
            Price in {selectedFarm.tokens[1].symbol}
          </button>
        </div>

        {/* Token Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">Token to send</label>
          <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white">
            <input
              type="text"
              placeholder="Select a token to send..."
              className="w-full bg-transparent px-3 text-gray-900 placeholder:text-gray-500 focus:outline-none"
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
              <label className="text-xs text-gray-600">Min price</label>
              <span className="text-xs text-gray-600">{amount} (0%)</span>
            </div>
            <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent px-3 text-gray-900 focus:outline-none"
              />
              <div className="flex gap-1 px-2">
                <button className="text-gray-400 hover:text-gray-900">-</button>
                <button className="text-gray-400 hover:text-gray-900">+</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-600">Max price</label>
              <span className="text-xs text-gray-600">{maxAmount} (0.01%)</span>
            </div>
            <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white">
              <input
                type="number"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="w-full bg-transparent px-3 text-gray-900 focus:outline-none"
              />
              <div className="flex gap-1 px-2">
                <button className="text-gray-400 hover:text-gray-900">-</button>
                <button className="text-gray-400 hover:text-gray-900">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same structure but with updated colors */}
      </div>
    </div>
  );
}
