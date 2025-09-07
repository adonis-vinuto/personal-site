// src/app/docs/colors/components/ColorGrid.tsx

import React from 'react';
import { ColorCard } from './ColorCard';
import { ColorGroup, ColorShade, UtilityConfig } from '../types';

interface ColorGridProps {
  colorGroup: ColorGroup;
  utility: UtilityConfig;
  onCopy: (text: string) => void;
  copiedText: string | null;
}

export function ColorGrid({ colorGroup, utility, onCopy, copiedText }: ColorGridProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
        <h2 className="text-xl font-semibold capitalize text-zinc-900">{colorGroup.label}</h2>
        <p className="text-sm text-zinc-600 mt-1">
          {colorGroup.shades.length} variações disponíveis • utility: {utility.id}
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-11 gap-4">
          {colorGroup.shades.map((shade) => (
            <ColorCard
              key={`${shade.name}-${shade.shade}`}
              shade={shade}
              utility={utility}
              onCopy={onCopy}
              copiedText={copiedText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}