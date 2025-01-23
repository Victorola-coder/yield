"use client";

import { useState } from "react";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonRect?: DOMRect | null;
}

export function FilterModal({ isOpen, onClose, buttonRect }: FilterModalProps) {
  const [minTVL, setMinTVL] = useState("1");
  const [minAPR, setMinAPR] = useState("0");
  const [minWeeklyRewards, setMinWeeklyRewards] = useState("100");
  const [showFavorites, setShowFavorites] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalStyle = buttonRect
    ? ({
        position: "absolute",
        top: `${buttonRect.bottom + 8}px`,
        right: `${window.innerWidth - buttonRect.right}px`,
      } as const)
    : {};

  return (
    <div
      className="fixed inset-0 z-50 bg-transparent flex items-start justify-center"
      onClick={handleBackdropClick}
    >
      <div
        className="w-[350px] rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
        style={modalStyle}
      >
        <div className="flex flex-col gap-6">
          {/* Chains */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Chains</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array(14)
                .fill(0)
                .map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square rounded-lg border border-gray-200 bg-white p-2 hover:border-gray-300 shadow-sm"
                  >
                    <div className="h-full w-full rounded-md bg-gray-100" />
                  </button>
                ))}
            </div>
          </div>

          {/* Protocols */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Protocols</h3>
            <div className="grid grid-cols-6 gap-2">
              {Array(12)
                .fill(0)
                .map((_, i) => (
                  <button
                    key={i}
                    className="aspect-square rounded-lg border border-gray-200 bg-white p-2 hover:border-gray-300 shadow-sm"
                  >
                    <div className="h-full w-full rounded-md bg-gray-100" />
                  </button>
                ))}
            </div>
          </div>

          {/* Farm Types */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Farm Types</h3>
            <div className="flex gap-2">
              {["volatile", "stable", "concentrated"].map((type) => (
                <button
                  key={type}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700 hover:border-gray-300 shadow-sm"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Min TVL */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Min TVL (K)</h3>
            <input
              type="number"
              value={minTVL}
              onChange={(e) => setMinTVL(e.target.value)}
              className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 focus:border-gray-300 focus:outline-none shadow-sm"
            />
          </div>

          {/* Min APR */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">Min APR (%)</h3>
            <input
              type="number"
              value={minAPR}
              onChange={(e) => setMinAPR(e.target.value)}
              className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 focus:border-gray-300 focus:outline-none shadow-sm"
            />
          </div>

          {/* Min Weekly Rewards */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-900">
              Min Weekly Rewards ($)
            </h3>
            <input
              type="number"
              value={minWeeklyRewards}
              onChange={(e) => setMinWeeklyRewards(e.target.value)}
              className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-900 focus:border-gray-300 focus:outline-none shadow-sm"
            />
          </div>

          {/* Show favorites */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-900">
              Show favorites only
            </span>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out ${
                showFavorites ? "bg-blue-600" : "bg-gray-200"
              }`}
              role="switch"
              aria-checked={showFavorites}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out ${
                  showFavorites ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Reset button */}
          <button
            className="w-full rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 hover:bg-red-100"
            onClick={() => {
              setMinTVL("1");
              setMinAPR("0");
              setMinWeeklyRewards("100");
              setShowFavorites(false);
            }}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
