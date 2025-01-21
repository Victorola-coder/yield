interface FarmRowProps {
  farm: Farm;
  onSelect: (farm: Farm) => void;
  isSelected: boolean;
}

export function FarmRow({ farm, onSelect, isSelected }: FarmRowProps) {
  return (
    <tr
      onClick={() => onSelect(farm)}
      className={`border-b border-gray-200 cursor-pointer transition-colors hover:bg-gray-50 ${
        isSelected ? "bg-gray-50" : ""
      }`}
    >
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <img
            src={farm.protocol.icon}
            alt={farm.protocol.name}
            className="h-6 w-6 rounded-full"
          />
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {farm.tokens.map((token) => (
              <img
                key={token.symbol}
                src={token.icon}
                alt={token.symbol}
                className="h-6 w-6 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm font-medium">{farm.name}</span>
        </div>
      </td>
      <td className="px-4 py-3 text-right">
        <span className="text-sm">${farm.tvl.toLocaleString()}</span>
      </td>
      <td className="px-4 py-3 text-right">
        <span className="text-sm">${farm.weeklyRewards.toLocaleString()}</span>
      </td>
      <td className="px-4 py-3 text-right">
        <span className="text-sm">{farm.apr.toFixed(2)}%</span>
      </td>
      <td className="px-4 py-3 text-right">
        <span className="text-sm">{farm.apy.toFixed(2)}%</span>
      </td>
      <td className="px-4 py-3 text-right">
        <button className="rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-200">
          Farm
        </button>
      </td>
    </tr>
  );
}
