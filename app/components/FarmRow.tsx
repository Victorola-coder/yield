"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export function FarmRow({
  farm,
  isSelected,
  onSelect,
}: {
  farm: Farm;
  isSelected: boolean;
  onSelect: (farmId: string) => void;
}) {
  const handleRowClick = () => {
    onSelect(farm.id);
  };

  const handleTokenClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(farm.id);
  };

  return (
    <>
      <tr
        onClick={handleRowClick}
        className="border-b border-[#2a2a2a] hover:bg-[#2a2a2a]/20 cursor-pointer"
      >
        <td className="px-4 py-2">
          <button className="text-gray-400 hover:text-white">
            <Star size={14} />
          </button>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {farm.tokens.map((token, i) => (
                <div
                  key={i}
                  className="cursor-pointer"
                  onClick={handleTokenClick}
                >
                  <Image
                    width={20}
                    height={20}
                    src={token.icon}
                    alt={token.symbol}
                    className="rounded-[calc(var(--radius)-2px)] border border-[#2a2a2a]"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="font-medium text-white">
                {farm.tokens.map((t) => t.symbol).join("/")}
              </span>
              <Image
                width={14}
                height={14}
                src={farm.protocol.icon}
                alt={farm.protocol.name}
                className="rounded-[calc(var(--radius)-2px)]"
              />
              <span className="text-xs text-gray-400">
                {farm.protocol.name}
              </span>
            </div>
          </div>
        </td>
        <td className="px-4 py-2 text-white">${farm.tvl.toLocaleString()}</td>
        <td className="px-4 py-2 text-white">
          ${farm.weeklyRewards.toLocaleString()}
        </td>
        <td className="px-4 py-2 text-white">{farm.apr.toFixed(2)}%</td>
        <td className="px-4 py-2 text-white">{farm.apy.toFixed(2)}%</td>
        <td className="px-4 py-2">
          <button
            className="text-gray-400 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              // Handle download logic here
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </td>
      </tr>

      {isSelected && (
        <tr>
          <td colSpan={7} className="p-0">
            <div className="animate-expand">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <div className="flex flex-col gap-4 rounded border p-3 border-[#2a2a2a] bg-[#1c1c1c]">
                  <h3 className="text-white text-lg">Farm</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rewarded TVL</span>
                      <span className="text-white">
                        ${farm.tvl.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active TVL</span>
                      <span className="text-white">
                        ${farm.tvl.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Staked TVL</span>
                      <span className="text-white">
                        ${farm.tvl.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Weekly Rewards</span>
                      <span className="text-white">
                        ${farm.weeklyRewards.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">(A/W/D)PR</span>
                      <span className="text-white">
                        {farm.apr.toFixed(2)}% · 0.09% · 0.01%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Contract</span>
                      <div className="flex items-center gap-2">
                        <span className="text-white">0xdd23...f429</span>
                        <button className="text-gray-400 hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {farm.tokens.map((token, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-2">
                          <Image
                            src={token.icon}
                            alt={token.symbol}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          <span className="text-gray-400">{token.symbol}</span>
                        </div>
                        <span className="text-white">
                          ${(farm.tvl / 2).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex rounded border p-3 border-[#2a2a2a] bg-[#1c1c1c] flex-col gap-4">
                  <h3 className="text-white text-lg">Pool</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">In Range TVL</span>
                      <span className="text-white">
                        ${farm.tvl.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
