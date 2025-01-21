"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export function FarmRow({
  farm,
  onSelect,
}: {
  farm: Farm;
  onSelect: (farm: Farm) => void;
}) {
  return (
    <tr
      className="border-b border-[#2a2a2a] hover:bg-[#2a2a2a]/20 cursor-pointer"
      onClick={() => onSelect(farm)}
    >
      <td className="px-4 py-2">
        <button className="text-gray-400 hover:text-white">
          <Star />
        </button>
      </td>
      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {farm.tokens.map((token, i) => (
              <Image
                key={i}
                width={24}
                height={24}
                src={token.icon}
                alt={token.symbol}
                className="rounded-full border border-[#2a2a2a]"
              />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-white">
              {farm.tokens.map((t) => t.symbol).join("/")}
            </span>
            <Image
              width={16}
              height={16}
              src={farm.protocol.icon}
              alt={farm.protocol.name}
              className="rounded-full"
            />
            <span className="text-xs text-gray-400">{farm.protocol.name}</span>
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </td>
    </tr>
  );
}
