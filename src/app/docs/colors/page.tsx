// src/app/docs/colors/page.tsx

'use client';

import { useState, useMemo } from 'react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { ColorGrid } from './components/ColorGrid';
import { SpecialColors } from './components/SpecialColors';
import { OpacityFilter } from './components/OpacityFilter';
import { utilities, getColorsForUtility } from './data';
import { 
  filterColorsByOpacity, 
  filterSpecialColorsByOpacity, 
  getOpacityStats 
} from './utils/opacityUtils';

export default function ColorsPage() {
  const [selectedUtility, setSelectedUtility] = useState('bg');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOpacities, setSelectedOpacities] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'tailwind' | 'custom'>('tailwind');
  const { copyToClipboard, copiedText } = useCopyToClipboard();

  // Pega a utility atual
  const currentUtility = utilities.find(u => u.id === selectedUtility) || utilities[0];
  
  // Pega as cores para a utility atual
  const { colors, specials } = getColorsForUtility(selectedUtility);
  
  // Aplica filtros de forma otimizada usando useMemo
  const filteredData = useMemo(() => {
    // Primeiro filtra por busca
    let filteredColors = colors.filter(colorGroup => 
      colorGroup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colorGroup.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Depois filtra por opacidade
    filteredColors = filterColorsByOpacity(filteredColors, selectedOpacities);
    
    // Filtra cores especiais por opacidade
    const filteredSpecials = filterSpecialColorsByOpacity(specials, selectedOpacities);
    
    return {
      colors: filteredColors,
      specials: filteredSpecials
    };
  }, [colors, specials, searchTerm, selectedOpacities]);

  // Estatísticas de opacidade para mostrar contadores
  const opacityStats = useMemo(() => {
    return getOpacityStats(colors);
  }, [colors]);

  // Total de cores após filtros
  const totalFilteredColors = useMemo(() => {
    return filteredData.colors.reduce((total, group) => total + group.shades.length, 0);
  }, [filteredData.colors]);

  const hasActiveFilters = searchTerm || selectedOpacities.length > 0;

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Sistema de Cores</h1>
          <p className="text-zinc-600 mt-2">
            Explore e teste todas as utilities de cor do Tailwind CSS
          </p>
        </div>
      </header>

      {/* Tabs */}
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
            {/* Filtros */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 space-y-6">
              {/* Buscar Cor */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-2">
                  Buscar Cor
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Ex: blue, red, green..."
                  className="w-full max-w-md px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-2 text-sm text-zinc-500 hover:text-zinc-700"
                  >
                    Limpar
                  </button>
                )}
              </div>

              {/* Utility Class */}
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-3">
                  Utility Class
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {utilities.map((utility) => (
                    <button
                      key={utility.id}
                      onClick={() => setSelectedUtility(utility.id)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all border ${
                        selectedUtility === utility.id
                          ? "bg-zinc-900 text-white border-zinc-900"
                          : "bg-white text-zinc-700 hover:bg-zinc-50 border-zinc-200"
                      }`}
                      title={utility.description}
                    >
                      <span className="block font-semibold">{utility.label}</span>
                      <span className="block text-xs opacity-75 font-mono mt-0.5">
                        {utility.id}-*
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro de Opacidade */}
              <OpacityFilter
                selectedOpacities={selectedOpacities}
                onOpacityChange={setSelectedOpacities}
              />

              {/* Resumo dos filtros */}
              {hasActiveFilters && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-900">
                        Filtros Ativos
                      </p>
                      <div className="text-sm text-blue-700 mt-1 space-y-1">
                        {searchTerm && (
                          <div>Busca: <span className="font-mono bg-blue-100 px-1 rounded">"{searchTerm}"</span></div>
                        )}
                        {selectedOpacities.length > 0 && (
                          <div>
                            Opacidade: {selectedOpacities.map(op => op === 'none' ? 'Sólida' : `${op}%`).join(', ')}
                          </div>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedOpacities([]);
                      }}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Limpar Todos
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <strong>Dica:</strong> Use os filtros acima para testar diferentes utilities. 
                Clique em qualquer cor para copiar a classe completa.
                {!colors.length && (
                  <span className="block mt-2">
                    <strong>Aviso:</strong> Esta utility ainda não foi implementada. 
                    Crie o arquivo correspondente em <code className="bg-blue-100 px-1 rounded">src/app/docs/colors/data/{selectedUtility}.ts</code>
                  </span>
                )}
              </p>
            </div>

            {/* Contador de resultados */}
            <div className="flex items-center justify-between text-sm text-zinc-600">
              <div>
                Mostrando <span className="font-semibold">{totalFilteredColors}</span> {totalFilteredColors === 1 ? 'cor' : 'cores'}
                {hasActiveFilters && ` (filtrado de ${colors.reduce((total, group) => total + group.shades.length, 0)})`}
                {searchTerm && ` para "${searchTerm}"`}
              </div>
              
              {colors.length > 0 && (
                <div className="hidden sm:flex items-center gap-4 text-xs">
                  <span>Disponível:</span>
                  {Object.entries(opacityStats).map(([opacity, count]) => (
                    count > 0 && (
                      <span key={opacity} className="bg-zinc-100 px-2 py-1 rounded">
                        {opacity === 'none' ? 'Sólida' : `${opacity}%`}: {count}
                      </span>
                    )
                  ))}
                </div>
              )}
            </div>

            {/* Grid de cores */}
            {colors.length > 0 ? (
              <div className="space-y-8">
                {filteredData.colors.length > 0 ? (
                  <>
                    {filteredData.colors.map((colorGroup) => (
                      <ColorGrid
                        key={colorGroup.name}
                        colorGroup={colorGroup}
                        utility={currentUtility}
                        onCopy={copyToClipboard}
                        copiedText={copiedText}
                      />
                    ))}

                    {/* Cores especiais */}
                    {!searchTerm && filteredData.specials.length > 0 && (
                      <SpecialColors
                        specialColors={filteredData.specials}
                        utility={currentUtility}
                        onCopy={copyToClipboard}
                        copiedText={copiedText}
                      />
                    )}
                  </>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-12">
                    <div className="text-center">
                      <svg className="w-12 h-12 text-zinc-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <h3 className="text-lg font-medium text-zinc-900 mb-2">
                        Nenhuma cor encontrada
                      </h3>
                      <p className="text-zinc-600 mb-4">
                        Nenhuma cor corresponde aos filtros selecionados. Tente ajustar os critérios de busca.
                      </p>
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedOpacities([]);
                        }}
                        className="px-4 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors"
                      >
                        Limpar Filtros
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-12">
                <div className="text-center">
                  <svg className="w-12 h-12 text-zinc-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-medium text-zinc-900 mb-2">
                    Utility não implementada
                  </h3>
                  <p className="text-zinc-600">
                    Crie o arquivo de dados para a utility "{selectedUtility}" para ver as cores
                  </p>
                  <div className="mt-4 p-3 bg-zinc-50 rounded-lg text-left">
                    <p className="text-sm font-medium text-zinc-900 mb-1">Como implementar:</p>
                    <ol className="text-sm text-zinc-600 space-y-1">
                      <li>1. Crie <code className="bg-white px-1 rounded">src/app/docs/colors/data/{selectedUtility}.ts</code></li>
                      <li>2. Siga o padrão dos arquivos existentes (backgrounds.ts, text.ts)</li>
                      <li>3. Adicione no index.ts</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Tokens Customizados - implementação existente */}
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
                          className="group flex items-center gap-4 p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 transition-colors text-left w-full"
                        >
                          <div 
                            className="w-12 h-12 rounded-lg border border-zinc-200" 
                            style={{ background: token.var }}
                          />
                          <div className="flex-1">
                            <p className="font-medium text-zinc-900">{token.label}</p>
                            <p className="text-sm text-zinc-500 font-mono">{token.var}</p>
                          </div>
                          {copiedText === token.var && (
                            <span className="text-sm text-green-600 font-medium">Copiado!</span>
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