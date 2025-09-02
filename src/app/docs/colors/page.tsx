// src/app/docs/colors/page.tsx

'use client';

import { useState } from 'react';

// [Copie todo o conteúdo do artifact colors-doc-page aqui]
// Este arquivo deve conter o mesmo componente ColorsDocumentation

// Cores padrão do Tailwind 4
const tailwindColors = {
  slate: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  gray: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  zinc: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  neutral: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  stone: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  red: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  orange: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  amber: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  yellow: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  lime: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  green: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  emerald: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  teal: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  cyan: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  sky: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  blue: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  indigo: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  violet: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  purple: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  fuchsia: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  pink: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
  rose: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
};

// Tokens customizados do projeto
const customTokens = {
  backgrounds: [
    { name: '--cor-bg', label: 'Background Principal', value: 'var(--cor-bg)' },
    { name: '--cor-bg-subtle', label: 'Background Sutil', value: 'var(--cor-bg-subtle)' },
    { name: '--cor-bg-muted', label: 'Background Muted', value: 'var(--cor-bg-muted)' },
  ],
  text: [
    { name: '--cor-text', label: 'Texto Principal', value: 'var(--cor-text)' },
    { name: '--cor-text-muted', label: 'Texto Secundário', value: 'var(--cor-text-muted)' },
    { name: '--cor-text-subtle', label: 'Texto Sutil', value: 'var(--cor-text-subtle)' },
  ],
  borders: [
    { name: '--cor-border', label: 'Borda Padrão', value: 'var(--cor-border)' },
    { name: '--cor-border-strong', label: 'Borda Forte', value: 'var(--cor-border-strong)' },
  ],
  primary: [
    { name: '--cor-primary', label: 'Cor Primária', value: 'var(--cor-primary)' },
    { name: '--cor-primary-hover', label: 'Primária Hover', value: 'var(--cor-primary-hover)' },
  ],
  semantic: {
    success: ['100', '300', '500', '600', '700'],
    error: ['100', '300', '500', '600', '700'],
    warning: ['100', '300', '500', '600', '700'],
    info: ['100', '300', '500', '600', '700'],
  }
};

export default function ColorsPage() {
  const [activeTab, setActiveTab] = useState<'tailwind' | 'custom'>('tailwind');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const filteredColors = Object.entries(tailwindColors).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Sistema de Cores</h1>
          <p className="text-zinc-600 mt-2">
            Documentação completa das cores do Tailwind 4 e tokens customizados
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

        {/* Search (apenas para Tailwind) */}
        {activeTab === 'tailwind' && (
          <div className="mt-6">
            <input
              type="text"
              placeholder="Buscar cor... (ex: blue, red, green)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'tailwind' ? (
          <div className="space-y-8">
            {filteredColors.map(([colorName, shades]) => (
              <div key={colorName} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-200">
                  <h2 className="text-xl font-semibold capitalize text-zinc-900">{colorName}</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {shades.map((shade) => {
                      const className = `bg-${colorName}-${shade}`;
                      const textClass = parseInt(shade) >= 500 ? 'text-white' : 'text-zinc-900';
                      
                      return (
                        <button
                          key={shade}
                          onClick={() => copyToClipboard(className)}
                          className="group relative"
                        >
                          <div
                            className={`${className} h-20 rounded-lg shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden`}
                          >
                            {copiedColor === className && (
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">Copiado!</span>
                              </div>
                            )}
                          </div>
                          <div className="mt-2 text-left">
                            <p className={`text-sm font-medium text-zinc-900`}>{shade}</p>
                            <p className="text-xs text-zinc-500 font-mono">{className}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {/* Backgrounds */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Backgrounds</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.backgrounds.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-24 h-24 rounded-lg border-2 border-zinc-300 shadow-sm group-hover:shadow-md transition-shadow"
                        style={{ backgroundColor: token.value }}
                      />
                      <div className="text-left flex-1">
                        <p className="font-semibold text-zinc-900">{token.label}</p>
                        <p className="text-sm text-zinc-600 font-mono">{token.name}</p>
                        {copiedColor === token.name && (
                          <p className="text-sm text-green-600 mt-1">Copiado!</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Text Colors */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Cores de Texto</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.text.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 bg-white rounded-lg border-2 border-zinc-300 shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center">
                        <span style={{ color: token.value }} className="text-2xl font-bold">Aa</span>
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-semibold text-zinc-900">{token.label}</p>
                        <p className="text-sm text-zinc-600 font-mono">{token.name}</p>
                        {copiedColor === token.name && (
                          <p className="text-sm text-green-600 mt-1">Copiado!</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Continue com as outras seções... */}
          </div>
        )}
      </div>
    </div>
  );
}