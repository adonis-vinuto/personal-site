// src/app/docs/colors/components/OpacityFilter.tsx - Versão Compacta

import React from 'react';

interface OpacityFilterProps {
  selectedOpacities: string[];
  onOpacityChange: (opacities: string[]) => void;
}

const opacityOptions = [
  { value: '10', label: '10%', description: 'Muito transparente' },
  { value: '25', label: '25%', description: 'Transparente' },
  { value: '50', label: '50%', description: 'Semi-transparente' },
  { value: '75', label: '75%', description: 'Pouco transparente' },
  { value: '90', label: '90%', description: 'Quase opaco' },
  { value: 'none', label: 'Sólida', description: 'Cores sólidas' },
];

export function OpacityFilter({ selectedOpacities, onOpacityChange }: OpacityFilterProps) {
  const handleOpacityToggle = (opacity: string) => {
    if (selectedOpacities.includes(opacity)) {
      onOpacityChange(selectedOpacities.filter(o => o !== opacity));
    } else {
      onOpacityChange([...selectedOpacities, opacity]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOpacities.length === opacityOptions.length) {
      onOpacityChange([]);
    } else {
      onOpacityChange(opacityOptions.map(o => o.value));
    }
  };

  const isAllSelected = selectedOpacities.length === opacityOptions.length;
  const hasSelection = selectedOpacities.length > 0;

  return (
    <div className="bg-white rounded-lg border border-zinc-200 p-3">
      <div className="flex items-center justify-between mb-2">
        <label className="block text-sm font-medium text-zinc-700">
          Filtrar por Opacidade
        </label>
        <div className="flex gap-2">
          <button
            onClick={handleSelectAll}
            className="text-xs text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            {isAllSelected ? 'Desmarcar' : 'Todos'}
          </button>
          {hasSelection && (
            <button
              onClick={() => onOpacityChange([])}
              className="text-xs text-zinc-500 hover:text-zinc-700 transition-colors"
            >
              Limpar
            </button>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {opacityOptions.map((option) => {
          const isSelected = selectedOpacities.includes(option.value);
          
          return (
            <button
              key={option.value}
              onClick={() => handleOpacityToggle(option.value)}
              className={`relative p-2 rounded text-xs transition-all border ${
                isSelected
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-700 hover:bg-zinc-50 border-zinc-200"
              }`}
              title={option.description}
            >
              <div className="flex flex-col items-center gap-1">
                {/* Preview visual da opacidade - menor */}
                <div className="w-6 h-3 rounded-sm border border-zinc-300 relative overflow-hidden">
                  {option.value === 'none' ? (
                    <div className="w-full h-full bg-blue-500"></div>
                  ) : (
                    <div 
                      className="w-full h-full bg-blue-500" 
                      style={{ 
                        opacity: option.value === '0' ? 0 : parseInt(option.value) / 100 
                      }}
                    ></div>
                  )}
                </div>
                
                {/* Label */}
                <span className="font-medium leading-none">{option.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}