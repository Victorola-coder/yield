"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useState } from "react";

export function FarmRow({
  farm,
  isSelected,
  onSelect,
}: {
  farm: Farm;
  isSelected: boolean;
  onSelect: (farmId: string) => void;
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleRowClick = () => {
    onSelect(farm.id);
  };

  const handleTokenClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(farm.id);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <tr
        onClick={handleRowClick}
        className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
      >
        <td className="px-4 py-2">
          <button
            className={`hover:text-gray-900 transition-colors ${
              isFavorite ? "text-yellow-500" : "text-gray-400"
            }`}
            onClick={handleFavoriteClick}
          >
            <Star size={14} fill={isFavorite ? "currentColor" : "none"} />
          </button>
        </td>
        <td className="px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {farm.tokens.map((token, i) => (
                <div
                  key={i}
                  className="cursor-pointer relative"
                  onClick={handleTokenClick}
                >
                  <Image
                    width={20}
                    height={20}
                    src={token.icon}
                    alt={token.symbol}
                    className="rounded-md border border-gray-200 bg-white"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className="font-medium text-gray-900">
                {farm.tokens.map((t) => t.symbol).join("/")}
              </span>
              <Image
                width={14}
                height={14}
                src={farm.protocol.icon}
                alt={farm.protocol.name}
                className="rounded-md"
              />
              <span className="text-xs text-gray-500">
                {farm.protocol.name}
              </span>
            </div>
          </div>
        </td>
        <td className="px-4 py-2 text-gray-900">
          ${farm.tvl.toLocaleString()}
        </td>
        <td className="px-4 py-2 text-gray-900">
          ${farm.weeklyRewards.toLocaleString()}
        </td>
        <td className="px-4 py-2 text-gray-900">{farm.apr.toFixed(2)}%</td>
        <td className="px-4 py-2 text-gray-900">{farm.apy.toFixed(2)}%</td>
        <td className="px-4 py-2">
          <button
            className="text-gray-400 hover:text-gray-900 transition-colors"
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
                <div className="flex flex-col gap-4 rounded-md border border-gray-200 p-3 bg-white shadow-sm">
                  <h3 className="text-gray-900 text-lg font-medium">Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Staked TVL</span>
                      <span className="text-gray-900">
                        ${farm.tvl.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Weekly Rewards</span>
                      <span className="text-gray-900">
                        ${farm.weeklyRewards.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">(A/W/D)PR</span>
                      <span className="text-gray-900">
                        {farm.apr.toFixed(2)}% · 0.09% · 0.01%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Contract</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-900">0xdd23...f429</span>
                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
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
                          <span className="text-gray-500">{token.symbol}</span>
                        </div>
                        <span className="text-gray-900">
                          ${(farm.tvl / 2).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex rounded-md border border-gray-200 p-3 bg-white shadow-sm flex-col gap-4">
                  <h3 className="text-gray-900 text-lg font-medium">Pool</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">In Range TVL</span>
                      <span className="text-gray-900">
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
