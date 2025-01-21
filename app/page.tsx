"use client";

import { useState, useEffect } from "react";
import { getFarms } from "@/app/services/farms";
import { FarmRow } from "@/app/components/FarmRow";
import { TokenDetails } from "@/app/components/TokenDetails";

export default function Home() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFarm, setSelectedFarm] = useState<Farm>();
  const [selectedFarmId, setSelectedFarmId] = useState<string | null>(null);

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

  // Add search functionality
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFarms = farms.filter(
    (farm) =>
      farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farm.tokens.some((token) =>
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleFarmSelect = (farm: Farm) => {
    setSelectedFarmId(selectedFarmId === farm.id ? null : farm.id);
  };

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

          {/* Main Content Area */}
          <div className="mx-auto mb-2 mt-2 flex flex-col lg:flex-row gap-4 max-w-[1500px]">
            {/* Left Side - Table */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-4">
                {/* Search and Filter Section */}
                <div className="flex gap-2">
                  <div className="flex w-full flex-col gap-2">
                    <div className="flex gap-2 top-3">
                      <div className="flex h-10 w-full rounded-md border border-[#2a2a2a] bg-[#1c1c1c] text-sm">
                        <input
                          className="w-full bg-transparent px-3 py-1 text-white placeholder:text-gray-500 focus:outline-none"
                          placeholder={`Search ${farms.length} assets...`}
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
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
                  </div>
                </div>

                {/* Table Component */}
                <div className="relative overflow-x-auto rounded border border-[#2a2a2a] bg-[#1c1c1c]">
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
                        {loading ? (
                          <tr>
                            <td colSpan={7}>
                              <div className="bg-[#2a2a2a]/20 animate-pulse flex h-[290px] w-full items-center justify-center text-xs text-gray-400">
                                Loading...
                              </div>
                            </td>
                          </tr>
                        ) : error ? (
                          <tr>
                            <td colSpan={7}>
                              <div className="bg-[#2a2a2a]/20 animate-pulse flex h-[290px] w-full items-center justify-center text-xs text-gray-400">
                                {error}
                              </div>
                            </td>
                          </tr>
                        ) : filteredFarms.length === 0 ? (
                          <tr>
                            <td colSpan={7}>
                              <div className="bg-[#2a2a2a]/20 animate-pulse flex h-[290px] w-full items-center justify-center text-xs text-gray-400">
                                No results found.
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredFarms.map((farm) => (
                            <FarmRow
                              key={farm.id}
                              farm={farm}
                              onSelect={handleFarmSelect}
                              isSelected={selectedFarmId === farm.id}
                            />
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Token Details */}
            {!loading && farms.length > 0 && (
              <div className="w-full lg:w-[400px] border-t lg:border-t-0 lg:border-l border-[#2a2a2a] bg-[#1c1c1c]">
                <TokenDetails selectedFarm={selectedFarm} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
