import React from 'react';
import { ColorUtility } from '../types';

interface ColorFiltersProps {
  selectedUtility: string;
  selectedOpacity: string;
  searchTerm: string;
  onUtilityChange: (utility: string) => void;
  onOpacityChange: (opacity: string) => void;
  onSearchChange: (search: string) => void;
  utilities: ColorUtility[];
}

export function ColorFilters({
  selectedUtility,
  selectedOpacity,
  searchTerm,
  onUtilityChange,
  onOpacityChange,
  onSearchChange,
  utilities
}: ColorFiltersProps) {
  const opacityDecimal = parseInt(selectedOpacity) / 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 space-y-6">
      
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-2">
          Buscar Cor
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Ex: blue, red, green..."
          className="w-full max-w-md px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="ml-2 text-sm text-zinc-500 hover:text-zinc-700"
          >
            Limpar
          </button>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-3">
          Utility Class
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {utilities.map((utility) => (
            <button
              key={utility.utility}
              onClick={() => onUtilityChange(utility.utility)}
              className={`p-3 rounded-lg text-sm font-medium transition-all border ${
                selectedUtility === utility.utility
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-700 hover:bg-zinc-50 border-zinc-200"
              }`}
              title={utility.description}
            >
              <span className="block font-semibold">{utility.label}</span>
              <span className="block text-xs opacity-75 font-mono mt-0.5">
                {utility.utility}-*
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-zinc-700">
            Opacidade
          </label>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            step="5"
            value={selectedOpacity}
            onChange={(e) => onOpacityChange(e.target.value)}
            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #18181b 0%, #18181b ${selectedOpacity}%, #e4e4e7 ${selectedOpacity}%, #e4e4e7 100%)`
            }}
          />
          <div className="flex justify-between mt-2">
            <span className="text-xs text-zinc-500">0%</span>
            <span className="text-xs text-zinc-500">25%</span>
            <span className="text-xs text-zinc-500">50%</span>
            <span className="text-xs text-zinc-500">75%</span>
            <span className="text-xs text-zinc-500">100%</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {Array.from({ length: 21 }, (_, i) => i * 5).map((value) => (
            <button
              key={value}
              onClick={() => onOpacityChange(value.toString())}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                selectedOpacity === value.toString()
                  ? "bg-zinc-900 text-white"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {value}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}