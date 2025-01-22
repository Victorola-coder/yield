"use client";

import { useState, useEffect } from "react";
import { getFarms } from "@/app/services/farms";
import { FarmRow } from "@/app/yield/farmrow";
import { TokenDetails } from "@/app/yield/tokenDetails";

export default function YieldPage() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFarm, setSelectedFarm] = useState<Farm>();
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFarmId, setExpandedFarmId] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    async function loadFarms() {
      try {
        const data = await getFarms();
        setFarms(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load farms");
      } finally {
        setLoading(false);
      }
    }

    loadFarms();
  }, []);

  const filteredFarms = farms.filter(
    (farm) =>
      farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farm.tokens.some((token) =>
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleFarmSelect = (farm: Farm) => {
    setSelectedFarm(farm);
    setExpandedFarmId(expandedFarmId === farm.id ? null : farm.id);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center">
      <div className="w-full flex-1 px-4 py-8">
        <div className="mx-auto max-w-[1500px] space-y-6">
          {/* Tabs */}
          <div className="bg-gray-100 rounded-lg p-1">
            <div className="flex">
              <button className="bg-white text-gray-900 flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md">
                Farms
              </button>
              <button className="text-gray-600 flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-50">
                Deposits
              </button>
            </div>
          </div>

          {/* Search and Table */}
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="space-y-4">
                {/* Search Bar */}
                <div className="flex gap-2">
                  <div className="flex w-full flex-col gap-2">
                    <div className="flex gap-2 top-3">
                      <div className="flex h-10 w-full rounded-md border border-gray-200 bg-white">
                        <input
                          className="w-full px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none"
                          placeholder={`Search ${farms.length} assets...`}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          autoFocus
                        />
                      </div>
                      <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-[#2a2a2a] bg-[#1c1c1c] hover:bg-[#2a2a2a] text-white h-10 px-4 py-2"
                      >
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
                  </div>
                </div>

                {/* Table */}
                <div className="rounded-lg border border-gray-200 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                            Asset
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                            TVL
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                            Weekly Rewards
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                            APR
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                            APY
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-500"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan={7}>
                              <div className="flex h-[290px] w-full items-center justify-center bg-gray-50 text-sm text-gray-500">
                                Loading...
                              </div>
                            </td>
                          </tr>
                        ) : error ? (
                          <tr>
                            <td colSpan={7}>
                              <div className="flex h-[290px] w-full items-center justify-center bg-gray-50 text-sm text-gray-500">
                                {error}
                              </div>
                            </td>
                          </tr>
                        ) : filteredFarms.length === 0 ? (
                          <tr>
                            <td colSpan={7}>
                              <div className="flex h-[290px] w-full items-center justify-center bg-gray-50 text-sm text-gray-500">
                                No results found.
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredFarms.map((farm) => (
                            <FarmRow
                              key={farm.id}
                              farm={farm}
                              onSelect={() => handleFarmSelect(farm)}
                              isSelected={expandedFarmId === farm.id}
                            />
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Token Details Panel */}
            {!loading && farms.length > 0 && (
              <div className="w-full lg:w-[400px] rounded-lg border border-gray-200 bg-white">
                <TokenDetails selectedFarm={selectedFarm || farms[0]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
