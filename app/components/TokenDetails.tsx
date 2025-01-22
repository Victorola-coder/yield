"use client";

import { useState } from "react";
import Image from "next/image";

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
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 whitespace-nowrap">
            {selectedFarm.apr.toFixed(2)}%
          </span>
        </div>
        <button className="w-full md:w-auto mt-2 sm:mt-0 rounded whitespace-nowrap bg-gray-100 px-3 md:py-2 py-1 text-sm text-gray-900 hover:bg-gray-200 transition-colors">
          View farm
        </button>
      </div>

      <div className="flex flex-col gap-4 p-4">
        {/* Price Tabs */}
        <div className="flex  max-w-[250px] rounded-lg bg-gray-100 p-1">
          <button className=" flex-1 rounded bg-white shadow-sm py-2 text-sm text-gray-900 truncate px-2">
            Price in {selectedFarm.tokens[0].symbol}
          </button>
          <button className="flex-1 py-2 text-sm text-gray-500 hover:text-gray-900 truncate px-2">
            Price in {selectedFarm.tokens[1].symbol}
          </button>
        </div>

        {/* Token Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-500">Token to send</label>
          <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white shadow-sm">
            <input
              type="text"
              placeholder="Select a token to send..."
              className="w-full bg-transparent px-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label className="text-xs text-gray-500">Min price</label>
              <span className="text-xs text-gray-500">{amount} (0%)</span>
            </div>
            <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white shadow-sm">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-transparent px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-1 px-2">
                <button className="text-gray-400 hover:text-gray-900">-</button>
                <button className="text-gray-400 hover:text-gray-900">+</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs text-gray-500">Max price</label>
              <span className="text-xs text-gray-500">{maxAmount} (0.01%)</span>
            </div>
            <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white shadow-sm">
              <input
                type="number"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                className="w-full bg-transparent px-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-1 px-2">
                <button className="text-gray-400 hover:text-gray-900">-</button>
                <button className="text-gray-400 hover:text-gray-900">+</button>
              </div>
            </div>
          </div>
        </div>

        {/* New Position Info */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">New position</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Width: 0.01%</span>
            <span className="text-gray-500">
              APR: {selectedFarm.apr.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Position Graph */}
        <div className="relative h-32 rounded-lg border border-gray-200 bg-white p-4 shadow-sm overflow-hidden">
          {/* Price Labels */}
          <div className="absolute top-2 right-2 text-xs text-gray-500">
            1.0000000 (0.01%)
          </div>
          <div className="absolute bottom-2 left-2 text-xs text-gray-500">
            0.9999000 (0.00%)
          </div>

          {/* Graph Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Vertical Line */}
            <div className="h-full w-0.5 bg-green-600"></div>

            {/* Price Range Box */}
            <div className="absolute right-[45%] h-16 w-[10%] bg-green-600/20 border-l-2 border-r-2 border-green-600"></div>

            {/* Current Price Indicator */}
            <div className="absolute right-[40%] px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-600">
              0.9999970
            </div>
          </div>

          {/* X-axis Line */}
          <div className="absolute bottom-0 w-full h-[1px] bg-gray-200"></div>
        </div>

        {/* Automation Toggles */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <span className="text-sm text-gray-900">Automate Rebalancing</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
            </label>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <span className="text-sm text-gray-900">Automate Rewards</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" className="peer sr-only" />
              <div className="h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-all after:content-[''] peer-checked:bg-green-500 peer-checked:after:translate-x-full peer-focus:outline-none"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
