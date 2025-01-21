"use client";

import { Metadata } from "next";
import { useState, useEffect } from "react";
import { FarmRow } from "@/app/components/FarmRow";

export default function Home() {
  const [farms, setFarms] = useState<Farm[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setFarms([
        {
          id: "1",
          name: "CL60-WBTC/USDC",
          platform: "Aerodrome",
          tvl: 94222156.03,
          weeklyRewards: 2818241.17,
          apr: 263.05,
          apy: 1.28,
          tokens: [
            { icon: "/tokens/wbtc.png", symbol: "WBTC" },
            { icon: "/tokens/usdc.png", symbol: "USDC" },
          ],
          protocol: {
            icon: "/protocols/aerodrome.png",
            name: "Aerodrome",
          },
        },
        // Add more farm data...
      ]);
    }, 1500);
  }, []);

  return (
    <div className="flex h-full min-h-[calc(100vh)] w-full flex-col items-center justify-center pt-[3rem]">
      <div className="w-full flex-1 px-[0.25rem] pb-0 sm:px-0 md:pb-[3.5rem]">
        <div className="gap-2 pb-8">
          {/* Tabs Section */}
          <div className="mx-auto !mt-2 mb-2 flex max-w-[1500px] flex-col gap-2 p-0">
            <div className="bg-[#1c1c1c] text-muted-foreground inline-flex h-12 items-center justify-center rounded-lg p-1 w-full">
              <button className="bg-[#2a2a2a] text-white inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all w-full">
                Farms
              </button>
              <button className="text-gray-400 inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-sm font-medium transition-all w-full hover:bg-[#2a2a2a] hover:text-white">
                Deposits
              </button>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mx-auto mb-2 mt-2 flex flex-col gap-4 p-0">
            <div className="mx-auto flex w-full max-w-[1500px]">
              <div className="flex w-full max-w-[1500px] flex-col gap-2">
                <div className="flex gap-2 top-3">
                  <div className="flex h-10 w-full rounded-md border border-[#2a2a2a] bg-[#1c1c1c] text-sm">
                    <input
                      className="w-full bg-transparent px-3 py-1 text-white placeholder:text-gray-500 focus:outline-none"
                      placeholder="Search 7827 assets..."
                      autoFocus
                    />
                  </div>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-[#2a2a2a] bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white h-10 px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="4" x2="4" y1="21" y2="14" />
                      <line x1="4" x2="4" y1="10" y2="3" />
                      <line x1="12" x2="12" y1="21" y2="12" />
                      <line x1="12" x2="12" y1="8" y2="3" />
                      <line x1="20" x2="20" y1="21" y2="16" />
                      <line x1="20" x2="20" y1="12" y2="3" />
                      <line x1="2" x2="6" y1="14" y2="14" />
                      <line x1="10" x2="14" y1="8" y2="8" />
                      <line x1="18" x2="22" y1="16" y2="16" />
                    </svg>
                  </button>
                </div>

                {/* Table Component */}
                <div className="relative overflow-hidden max-h-[80vh] max-w-full rounded border border-[#2a2a2a] bg-[#1c1c1c]">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="border-b border-[#2a2a2a]">
                        <tr>
                          <th className="text-gray-400 h-12 px-4 text-left align-middle font-medium"></th>
                          <th className="text-gray-400 h-12 px-4 text-left align-middle font-medium">
                            Asset
                          </th>
                          <th className="text-gray-400 h-12 px-4 text-left align-middle font-medium">
                            TVL
                          </th>
                          <th className="text-gray-400 h-12 px-4 text-left align-middle font-medium">
                            Weekly Rewards
                          </th>
                          <th className="text-gray-400 h-12 px-4 text-left align-middle font-medium">
                            APR
                          </th>
                          <th className="text-gray-400 h-12 px-4 text-left align-middle font-medium">
                            APY
                          </th>
                          <th className="text-gray-400 h-12 px-4 text-left align-middle font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {farms.length === 0 ? (
                          <tr>
                            <td colSpan={7}>
                              <div className="bg-[#2a2a2a]/20 animate-pulse flex h-[290px] w-full items-center justify-center text-xs text-gray-400">
                                Loading...
                              </div>
                            </td>
                          </tr>
                        ) : (
                          farms.map((farm) => (
                            <FarmRow key={farm.id} farm={farm} />
                          ))
                        )}
                      </tbody>
                    </table>
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
