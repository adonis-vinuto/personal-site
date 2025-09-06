'use client';

import { useState } from 'react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { ColorFilters } from './components/ColorFilters';
import { ColorGrid } from './components/ColorGrid';
import { 
  COLOR_MAPPINGS, 
  COLOR_UTILITIES, 
  SPECIAL_COLORS 
} from './constants';

export default function ColorsPage() {
  const [selectedUtility, setSelectedUtility] = useState('bg');
  const [selectedOpacity, setSelectedOpacity] = useState('100');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'tailwind' | 'custom'>('tailwind');
  const { copyToClipboard, copiedText } = useCopyToClipboard();

  const filteredColors = Object.entries(COLOR_MAPPINGS)
    .filter(([colorName]) => colorName.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort(([a], [b]) => a.localeCompare(b));

  const getShadesForUtility = (colorName: string, utility: string) => {
    const colorData = COLOR_MAPPINGS[colorName];
    if (!colorData || !colorData[utility]) {
      return {};
    }
    return colorData[utility];
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Sistema de Cores</h1>
          <p className="text-zinc-600 mt-2">
            Explore e teste todas as utilities de cor do Tailwind com controle de opacidade
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-1 inline-flex">
          <button
            onClick={() => setActiveTab('tailwind')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'tailwind'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Cores Tailwind
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'custom'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Tokens Customizados
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'tailwind' ? (
          <div className="space-y-8">
            <ColorFilters
              selectedUtility={selectedUtility}
              selectedOpacity={selectedOpacity}
              searchTerm={searchTerm}
              onUtilityChange={setSelectedUtility}
              onOpacityChange={setSelectedOpacity}
              onSearchChange={setSearchTerm}
              utilities={COLOR_UTILITIES}
            />

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Dica:</strong> Use os filtros acima para testar diferentes utilities e opacidades. 
                Clique em qualquer cor para copiar a classe completa. 
                {selectedOpacity !== '100' && (
                  <span> A sintaxe de opacidade é: <code className="bg-blue-100 px-1 rounded">{selectedUtility}-cor-shade/{selectedOpacity}</code></span>
                )}
              </p>
            </div>

            {searchTerm && (
              <div className="text-sm text-zinc-600">
                Mostrando {filteredColors.length} {filteredColors.length === 1 ? 'cor' : 'cores'}
                {searchTerm && ` para "${searchTerm}"`}
              </div>
            )}

            <div className="space-y-8">
              {filteredColors.map(([colorName]) => {
                const shades = getShadesForUtility(colorName, selectedUtility);
                
                if (Object.keys(shades).length === 0) {
                  return null;
                }

                return (
                  <ColorGrid
                    key={`${colorName}-${selectedUtility}`}
                    colorName={colorName}
                    utility={selectedUtility}
                    opacity={selectedOpacity}
                    onCopy={copyToClipboard}
                    copiedText={copiedText}
                    shades={shades}
                  />
                );
              })}
            </div>

            {!searchTerm && (
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
                  <h2 className="text-xl font-semibold text-zinc-900">Cores Especiais</h2>
                  <p className="text-sm text-zinc-600 mt-1">
                    Cores adicionais disponíveis no Tailwind
                  </p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {SPECIAL_COLORS.map((color) => {
                      const className = `${selectedUtility}-${color.name}${selectedOpacity !== '100' ? `/${selectedOpacity}` : ''}`;
                      const opacityDecimal = parseInt(selectedOpacity) / 100;
                      
                      return (
                        <button
                          key={color.name}
                          onClick={() => copyToClipboard(className)}
                          className="group relative transition-all hover:scale-105"
                        >
                          <div className="relative">
                            {color.name === 'transparent' ? (
                              <div className="h-20 rounded-lg border-2 border-dashed border-zinc-300 bg-transparent" />
                            ) : color.name === 'current' ? (
                              <div 
                                className="h-20 rounded-lg border-2 border-zinc-300" 
                                style={{ 
                                  background: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                                  backgroundSize: '10px 10px',
                                  backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px',
                                  opacity: opacityDecimal
                                }}
                              />
                            ) : (
                              <div 
                                className={`h-20 rounded-lg ${color.class} ${color.name === 'white' ? 'border-2 border-zinc-200' : ''}`}
                                style={{ opacity: opacityDecimal }}
                              />
                            )}
                            {copiedText === className && (
                              <div className="absolute inset-0 bg-green-500/20 rounded-lg flex items-center justify-center animate-in fade-in duration-200">
                                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                                  Copiado!
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="mt-2 text-left">
                            <p className="text-sm font-medium text-zinc-900">{color.label}</p>
                            <p className="text-xs text-zinc-500 font-mono">{className}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-sm text-zinc-600">
                    <strong>current</strong> usa a cor do texto atual (currentColor), útil para herança de cor.
                  </p>
                </div>
              </div>
            )}

            {filteredColors.length === 0 && searchTerm && (
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-12">
                <div className="text-center">
                  <svg className="w-12 h-12 text-zinc-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-zinc-900 mb-2">Nenhuma cor encontrada</h3>
                  <p className="text-zinc-600">
                    Não encontramos cores que correspondam a "{searchTerm}"
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mt-4 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
                  >
                    Limpar busca
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
                <h2 className="text-xl font-semibold text-zinc-900">Tokens Customizados</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Variáveis CSS customizadas do projeto para consistência de design
                </p>
              </div>
              <div className="p-6">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-900 mb-4">Backgrounds</h3>
                    <div className="grid gap-4">
                      {[
                        { var: 'var(--cor-bg)', label: 'Background Principal' },
                        { var: 'var(--cor-bg-subtle)', label: 'Background Sutil' },
                        { var: 'var(--cor-bg-muted)', label: 'Background Muted' }
                      ].map((token) => (
                        <button
                          key={token.var}
                          onClick={() => copyToClipboard(token.var)}
                          className="flex items-center gap-4 p-4 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                        >
                          <div className="w-20 h-20 rounded-lg border-2 border-zinc-300" style={{ backgroundColor: token.var }} />
                          <div className="text-left">
                            <p className="font-medium text-zinc-900">{token.label}</p>
                            <code className="text-sm text-zinc-600 font-mono">{token.var}</code>
                          </div>
                          {copiedText === token.var && (
                            <span className="ml-auto text-sm text-green-600">Copiado!</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-zinc-900 mb-4">Cores de Texto</h3>
                    <div className="grid gap-4">
                      {[
                        { var: 'var(--cor-text)', label: 'Texto Principal' },
                        { var: 'var(--cor-text-muted)', label: 'Texto Secundário' },
                        { var: 'var(--cor-text-subtle)', label: 'Texto Sutil' }
                      ].map((token) => (
                        <button
                          key={token.var}
                          onClick={() => copyToClipboard(token.var)}
                          className="flex items-center gap-4 p-4 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                        >
                          <div className="w-20 h-20 bg-white rounded-lg border-2 border-zinc-300 flex items-center justify-center">
                            <span className="text-2xl font-bold" style={{ color: token.var }}>Aa</span>
                          </div>
                          <div className="text-left">
                            <p className="font-medium text-zinc-900">{token.label}</p>
                            <code className="text-sm text-zinc-600 font-mono">{token.var}</code>
                          </div>
                          {copiedText === token.var && (
                            <span className="ml-auto text-sm text-green-600">Copiado!</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}