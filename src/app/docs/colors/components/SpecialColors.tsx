// src/app/docs/colors/components/SpecialColors.tsx

import React from 'react';
import { ColorCard } from './ColorCard';
import { ColorShade, UtilityConfig } from '../types';

interface SpecialColorsProps {
  specialColors: ColorShade[];
  utility: UtilityConfig;
  onCopy: (text: string) => void;
  copiedText: string | null;
}

export function SpecialColors({ specialColors, utility, onCopy, copiedText }: SpecialColorsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
        <h2 className="text-xl font-semibold text-zinc-900">Cores Especiais</h2>
        <p className="text-sm text-zinc-600 mt-1">
          Cores adicionais disponíveis • utility: {utility.id}
        </p>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specialColors.map((color) => (
            <ColorCard
              key={color.name}
              shade={color}
              utility={utility}
              onCopy={onCopy}
              copiedText={copiedText}
            />
          ))}
        </div>
        <div className="mt-4 text-sm text-zinc-600">
          <p>
            <strong>current:</strong> usa a cor do texto atual (currentColor), útil para herança de cor.
          </p>
          <p>
            <strong>transparent:</strong> totalmente transparente.
          </p>
        </div>
      </div>
    </div>
  );
}