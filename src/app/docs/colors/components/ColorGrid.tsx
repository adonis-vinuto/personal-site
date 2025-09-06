import React from 'react';
import { ColorCard } from './ColorCard';

interface ColorGridProps {
  colorName: string;
  utility: string;
  opacity: string;
  onCopy: (text: string) => void;
  copiedText: string | null;
  shades: Record<string, string>;
}

export function ColorGrid({
  colorName,
  utility,
  opacity,
  onCopy,
  copiedText,
  shades
}: ColorGridProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
        <h2 className="text-xl font-semibold capitalize text-zinc-900">{colorName}</h2>
        <p className="text-sm text-zinc-600 mt-1">
          {Object.keys(shades).length} variações disponíveis • utility: {utility}
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-11 gap-4">
          {Object.entries(shades).map(([shade, className]) => (
            <ColorCard
              key={shade}
              colorName={colorName}
              shade={shade}
              utility={utility}
              opacity={opacity}
              onCopy={onCopy}
              copiedText={copiedText}
              baseClass={className}
            />
          ))}
        </div>
      </div>
    </div>
  );
}