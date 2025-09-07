// src/app/docs/colors/components/ColorGrid.tsx - Versão Modificada

import React from 'react';
import { ColorGroup, ColorShade, UtilityConfig } from '../types';
import { extractOpacityFromShade } from '../utils/opacityUtils';

interface ColorGridProps {
  colorGroup: ColorGroup;
  utility: UtilityConfig;
  onCopy: (text: string) => void;
  copiedText: string | null;
}

interface GroupedShades {
  opacity: string;
  label: string;
  shades: ColorShade[];
}

export function ColorGrid({ colorGroup, utility, onCopy, copiedText }: ColorGridProps) {
  // Agrupa as cores da mesma cor por opacidade
  const groupedByOpacity = React.useMemo(() => {
    const groups: Record<string, ColorShade[]> = {};

    colorGroup.shades.forEach(shade => {
      const opacity = extractOpacityFromShade(shade.shade);
      if (!groups[opacity]) {
        groups[opacity] = [];
      }
      groups[opacity].push(shade);
    });

    // Ordena as opacidades: none, 0, 25, 50, 75, 100
    const order = ['10', '25', '50', '75', '90', 'none'];
    return order.map(op => {
      if (groups[op]) {
        return {
          opacity: op,
          label: op === 'none' ? 'Sólidas' : `${op}%`,
          shades: groups[op]
        };
      }
      return null;
    }).filter(Boolean) as GroupedShades[];
  }, [colorGroup.shades]);

  const renderMiniPreview = (shade: ColorShade) => {
    switch (utility.demoType) {
      case 'background':
        return (
          <div className={`h-8 w-full rounded ${shade.className} ${
            shade.name === 'white' ? 'border border-zinc-200' : ''
          }`} />
        );
        
      case 'text':
        return (
          <div className="h-8 bg-zinc-50 rounded flex items-center justify-center">
            <span className={`text-xs font-bold ${shade.className}`}>A</span>
          </div>
        );
        
      case 'border':
        return (
          <div className={`h-8 bg-white rounded border-2 ${shade.className}`} />
        );
        
      case 'outline':
        return (
          <div className="h-8 flex items-center justify-center">
            <div className={`w-6 h-6 bg-white rounded outline outline-offset-1 outline-2 ${shade.className}`} />
          </div>
        );
        
      case 'ring':
        return (
          <div className="h-8 flex items-center justify-center">
            <div className={`w-6 h-6 bg-white rounded ring-2 ${shade.className}`} />
          </div>
        );
        
      case 'shadow':
        return (
          <div className="h-8 flex items-center justify-center">
            <div className={`w-6 h-6 bg-white rounded shadow-md ${shade.className}`} />
          </div>
        );
        
      case 'decoration':
        return (
          <div className="h-8 bg-zinc-50 rounded flex items-center justify-center">
            <span className={`text-xs underline decoration-2 ${shade.className}`}>T</span>
          </div>
        );
        
      case 'fill':
        return (
          <div className="h-8 bg-zinc-50 rounded flex items-center justify-center">
            <svg className={`w-4 h-4 ${shade.className}`} viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-10-5z" />
            </svg>
          </div>
        );
        
      case 'stroke':
        return (
          <div className="h-8 bg-zinc-50 rounded flex items-center justify-center">
            <svg className={`w-4 h-4 ${shade.className} fill-none`} viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </div>
        );
        
      default:
        return (
          <div className={`h-8 w-full rounded ${shade.className} ${
            shade.name === 'white' ? 'border border-zinc-200' : ''
          }`} />
        );
    }
  };

  const renderSpecialPreview = (shade: ColorShade) => {
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
    
    return renderMiniPreview(shade);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-zinc-200 overflow-hidden">
      {/* Header mais compacto */}
      <div className="px-4 py-3 border-b border-zinc-200 bg-zinc-50">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold capitalize text-zinc-900">{colorGroup.label}</h2>
          <span className="text-sm text-zinc-500">
            {colorGroup.shades.length} variações • {utility.id}
          </span>
        </div>
      </div>

      {/* Agrupamento por opacidade */}
      <div className="p-4 space-y-4">
        {groupedByOpacity.map((opacityGroup) => (
          <div key={opacityGroup.opacity} className="space-y-2">
            {/* Label da opacidade */}
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-zinc-700">{opacityGroup.label}</h3>
              <div className="flex-1 h-px bg-zinc-200"></div>
              <span className="text-xs text-zinc-500">{opacityGroup.shades.length} cores</span>
            </div>

            {/* Linha de cores para esta opacidade */}
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 xl:grid-cols-14 2xl:grid-cols-16 gap-2">
              {opacityGroup.shades.map((shade) => (
                <button
                  key={`${shade.name}-${shade.shade}`}
                  onClick={() => onCopy(shade.className)}
                  className="group relative transition-all hover:scale-105"
                  title={`${shade.shade} - ${shade.className}`}
                >
                  {/* Preview visual mini */}
                  {shade.name === 'transparent' || shade.name === 'current' 
                    ? renderSpecialPreview(shade) 
                    : renderMiniPreview(shade)
                  }
                  
                  {/* Label compacto */}
                  <div className="mt-1 text-center">
                    <p className="text-xs font-medium text-zinc-700 truncate">
                      {shade.shade?.split('/')[0] || shade.name}
                    </p>
                  </div>
                  
                  {/* Feedback de cópia */}
                  {copiedText === shade.className && (
                    <div className="absolute inset-0 bg-green-500/20 rounded flex items-center justify-center pointer-events-none animate-in fade-in duration-200">
                      <span className="bg-green-500 text-white px-1 py-0.5 rounded text-xs font-medium">
                        ✓
                      </span>
                    </div>
                  )}

                  {/* Tooltip no hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    <div className="bg-zinc-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {shade.className}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-zinc-900"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}