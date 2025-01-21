import { api } from "@/app/lib/api";
import { cacheManager } from "@/app/lib/cache";

const CACHE_KEY = "farms_data";

export async function getFarms(): Promise<Farm[]> {
  // Check cache first
  const cachedData = cacheManager.get<Farm[]>(CACHE_KEY);
  if (cachedData) return cachedData;

  try {
    const response = await api.get<FarmsResponse>("/farms");
    const farms = response.data.farms;

    // Cache the response for 5 minutes
    cacheManager.set(CACHE_KEY, farms, 5);

    return farms;
  } catch (error) {
    console.error("Error fetching farms:", error);
    return getMockFarms(); // Fallback to mock data
  }
}

function getMockFarms(): Farm[] {
  return [
    {
      id: "1",
      name: "CL60-WBTC/USDC",
      platform: "Aerodrome",
      tvl: 94222156.03,
      weeklyRewards: 2818241.17,
      apr: 263.05,
      apy: 1.28,
      tokens: [
        { icon: "/images/user.png", symbol: "WBTC" },
        { icon: "/images/user.png", symbol: "USDC" },
      ],
      protocol: {
        icon: "/images/user.png",
        name: "Aerodrome",
      },
    },
    {
      id: "2",
      name: "CL10-USDC/WETH",
      platform: "Aerodrome",
      tvl: 191904991.76,
      weeklyRewards: 1557670.81,
      apr: 75.21,
      apy: 111.97,
      tokens: [
        { icon: "/images/user.png", symbol: "USDC" },
        { icon: "/images/user.png", symbol: "WETH" },
      ],
      protocol: {
        icon: "/images/user.png",
        name: "Aerodrome",
      },
    },
  ];
}
