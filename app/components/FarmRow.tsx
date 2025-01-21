"use client";

import Image from "next/image";

export function FarmRow({ farm }: { farm: Farm }) {
  return (
    <tr className="border-b border-[#2a2a2a] hover:bg-[#2a2a2a]/20">
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
            <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
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
