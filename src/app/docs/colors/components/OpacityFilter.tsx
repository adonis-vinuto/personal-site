// src/app/docs/colors/components/OpacityFilter.tsx

import React from 'react';

interface OpacityFilterProps {
  selectedOpacities: string[];
  onOpacityChange: (opacities: string[]) => void;
}

const opacityOptions = [
  { value: 'none', label: 'Sem opacidade', description: 'Cores sólidas' },
  { value: '0', label: '0%', description: 'Transparente' },
  { value: '25', label: '25%', description: 'Muito transparente' },
  { value: '50', label: '50%', description: 'Semi-transparente' },
  { value: '75', label: '75%', description: 'Pouco transparente' },
  { value: '100', label: '100%', description: 'Opaco' },
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
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="block text-sm font-medium text-zinc-700">
          Filtrar por Opacidade
        </label>
        <div className="flex gap-2">
          <button
            onClick={handleSelectAll}
            className="text-xs text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            {isAllSelected ? 'Desmarcar todos' : 'Selecionar todos'}
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
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {opacityOptions.map((option) => {
          const isSelected = selectedOpacities.includes(option.value);
          
          return (
            <button
              key={option.value}
              onClick={() => handleOpacityToggle(option.value)}
              className={`relative p-3 rounded-lg text-sm transition-all border ${
                isSelected
                  ? "bg-zinc-900 text-white border-zinc-900"
                  : "bg-white text-zinc-700 hover:bg-zinc-50 border-zinc-200"
              }`}
              title={option.description}
            >
              <div className="flex flex-col items-center gap-2">
                {/* Preview visual da opacidade */}
                <div className="w-8 h-4 rounded-sm border border-zinc-300 relative overflow-hidden">
                  {option.value === 'none' ? (
                    <div className="w-full h-full bg-blue-500" />
                  ) : (
                    <>
                      {/* Background com padrão xadrez para mostrar transparência */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: 'linear-gradient(45deg, #f3f4f6 25%, transparent 25%), linear-gradient(-45deg, #f3f4f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f3f4f6 75%), linear-gradient(-45deg, transparent 75%, #f3f4f6 75%)',
                          backgroundSize: '4px 4px',
                          backgroundPosition: '0 0, 0 2px, 2px -2px, -2px 0px'
                        }}
                      />
                      <div 
                        className="absolute inset-0 bg-blue-500"
                        style={{ 
                          opacity: option.value === '0' ? 0 : parseInt(option.value) / 100 
                        }}
                      />
                    </>
                  )}
                </div>
                
                <div className="text-center">
                  <span className="block font-semibold">{option.label}</span>
                  {option.value !== 'none' && (
                    <span className="block text-xs opacity-75 font-mono">
                      /{option.value}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Indicador de seleção */}
              {isSelected && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      {hasSelection && (
        <div className="mt-3 text-xs text-zinc-500">
          {selectedOpacities.length} {selectedOpacities.length === 1 ? 'filtro ativo' : 'filtros ativos'}
        </div>
      )}
    </div>
  );
}