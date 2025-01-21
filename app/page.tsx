import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yield | vfat - Multi-chain Yield Aggregator & Portfolio Manager",
  description:
    "Simplify highly complex operations such as entering/exiting positions, compounding, or rebalancing into single transactions, while maintaining self-custody",
};

export default function Home() {
  return (
    <div className="flex h-full min-h-[calc(100vh)] w-full flex-col items-center justify-center pt-[3rem]">
      <div className="w-full flex-1 px-[0.25rem] pb-0 sm:px-0 md:pb-[3.5rem]">
        <div className="gap-2 pb-8">
          <div className="mx-auto !mt-2 mb-2 flex max-w-[1500px] flex-col gap-2 p-0">
            {/* Tabs */}
            <div className="bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1 w-full">
              <button className="ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow w-full data-[state=active]:bg-background data-[state=active]:text-foreground">
                Farms
              </button>
              <button className="ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow w-full">
                <div className="mr-2">Deposits</div>
              </button>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="mx-auto mb-2 mt-2 flex flex-col gap-4 p-0">
            <div className="mx-auto flex w-full max-w-[1500px]">
              <div className="flex w-full max-w-[1500px] flex-col gap-2">
                <div className="flex gap-2 top-3">
                  <div className="flex h-9 w-full rounded-md border border-input bg-background text-sm shadow-sm">
                    <input
                      className="w-full bg-transparent px-3 py-1 placeholder:text-muted-foreground focus-visible:outline-none"
                      placeholder="Search assets..."
                      autoFocus
                    />
                  </div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-3">
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
                <div className="relative overflow-hidden max-h-[80vh] max-w-full rounded border">
                  <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                      <thead className="[&_tr]:border-b border-b">
                        <tr>
                          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium"></th>
                          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
                            Asset
                          </th>
                          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
                            TVL
                          </th>
                          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
                            Weekly Rewards
                          </th>
                          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
                            APR
                          </th>
                          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium">
                            APY
                          </th>
                          <th className="text-muted-foreground h-10 px-2 text-left align-middle font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colSpan={7}>
                            <div className="bg-primary/10 animate-pulse rounded-md flex h-[290px] w-full items-center justify-center rounded-t-none text-xs text-muted-foreground">
                              Loading...
                            </div>
                          </td>
                        </tr>
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
