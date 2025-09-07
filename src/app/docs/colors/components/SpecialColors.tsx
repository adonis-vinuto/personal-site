// src/app/docs/colors/components/SpecialColors.tsx - Versão Modificada

import React from 'react';
import { ColorShade, UtilityConfig } from '../types';

interface SpecialColorsProps {
  specialColors: ColorShade[];
  utility: UtilityConfig;
  onCopy: (text: string) => void;
  copiedText: string | null;
}

export function SpecialColors({ specialColors, utility, onCopy, copiedText }: SpecialColorsProps) {
  const renderMiniPreview = (shade: ColorShade) => {
    if (shade.name === 'transparent') {
      return <div className="h-8 rounded border border-dashed border-zinc-300 bg-transparent" />;
    }
    
    if (shade.name === 'current') {
      return (
        <div 
          className="h-8 rounded border border-zinc-300" 
          style={{ 
            background: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '4px 4px',
            backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
          }}
        />
      );
    }

    // Para cores especiais, usar preview simples
    switch (utility.demoType) {
      case 'background':
        return <div className={`h-8 rounded ${shade.className}`} />;
      case 'text':
        return (
          <div className="h-8 bg-zinc-50 rounded flex items-center justify-center">
            <span className={`text-xs font-bold ${shade.className}`}>A</span>
          </div>
        );
      default:
        return <div className={`h-8 rounded ${shade.className}`} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
      {/* Header compacto */}
      <div className="px-4 py-3 border-b border-zinc-200 bg-zinc-50">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">Cores Especiais</h2>
          <span className="text-sm text-zinc-500">
            {specialColors.length} especiais • {utility.id}
          </span>
        </div>
      </div>

      {/* Grid compacto */}
      <div className="p-4">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
          {specialColors.map((color) => (
            <button
              key={color.name}
              onClick={() => onCopy(color.className)}
              className="group relative transition-all hover:scale-105"
              title={`${color.name} - ${color.className}`}
            >
              {/* Preview visual mini */}
              {renderMiniPreview(color)}
              
              {/* Label compacto */}
              <div className="mt-1 text-center">
                <p className="text-xs font-medium text-zinc-700 truncate">
                  {color.name}
                </p>
              </div>
              
              {/* Feedback de cópia */}
              {copiedText === color.className && (
                <div className="absolute inset-0 bg-green-500/20 rounded flex items-center justify-center pointer-events-none animate-in fade-in duration-200">
                  <span className="bg-green-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                    ✓
                  </span>
                </div>
              )}

              {/* Tooltip no hover */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                <div className="bg-zinc-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {color.className}
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-zinc-900"></div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Explicação mais compacta */}
        <div className="mt-3 text-xs text-zinc-600 space-y-1">
          <p><strong>current:</strong> Herda a cor do texto atual</p>
          <p><strong>transparent:</strong> Totalmente transparente</p>
        </div>
      </div>
    </div>
  );
}