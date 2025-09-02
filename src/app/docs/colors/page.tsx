'use client';

import { useState } from 'react';

// Mapeamento completo das cores do Tailwind para evitar classes dinâmicas
const colorClasses: Record<string, Record<string, string>> = {
  slate: {
    '50': 'bg-slate-50',
    '100': 'bg-slate-100',
    '200': 'bg-slate-200',
    '300': 'bg-slate-300',
    '400': 'bg-slate-400',
    '500': 'bg-slate-500',
    '600': 'bg-slate-600',
    '700': 'bg-slate-700',
    '800': 'bg-slate-800',
    '900': 'bg-slate-900',
    '950': 'bg-slate-950',
  },
  gray: {
    '50': 'bg-gray-50',
    '100': 'bg-gray-100',
    '200': 'bg-gray-200',
    '300': 'bg-gray-300',
    '400': 'bg-gray-400',
    '500': 'bg-gray-500',
    '600': 'bg-gray-600',
    '700': 'bg-gray-700',
    '800': 'bg-gray-800',
    '900': 'bg-gray-900',
    '950': 'bg-gray-950',
  },
  zinc: {
    '50': 'bg-zinc-50',
    '100': 'bg-zinc-100',
    '200': 'bg-zinc-200',
    '300': 'bg-zinc-300',
    '400': 'bg-zinc-400',
    '500': 'bg-zinc-500',
    '600': 'bg-zinc-600',
    '700': 'bg-zinc-700',
    '800': 'bg-zinc-800',
    '900': 'bg-zinc-900',
    '950': 'bg-zinc-950',
  },
  neutral: {
    '50': 'bg-neutral-50',
    '100': 'bg-neutral-100',
    '200': 'bg-neutral-200',
    '300': 'bg-neutral-300',
    '400': 'bg-neutral-400',
    '500': 'bg-neutral-500',
    '600': 'bg-neutral-600',
    '700': 'bg-neutral-700',
    '800': 'bg-neutral-800',
    '900': 'bg-neutral-900',
    '950': 'bg-neutral-950',
  },
  stone: {
    '50': 'bg-stone-50',
    '100': 'bg-stone-100',
    '200': 'bg-stone-200',
    '300': 'bg-stone-300',
    '400': 'bg-stone-400',
    '500': 'bg-stone-500',
    '600': 'bg-stone-600',
    '700': 'bg-stone-700',
    '800': 'bg-stone-800',
    '900': 'bg-stone-900',
    '950': 'bg-stone-950',
  },
  red: {
    '50': 'bg-red-50',
    '100': 'bg-red-100',
    '200': 'bg-red-200',
    '300': 'bg-red-300',
    '400': 'bg-red-400',
    '500': 'bg-red-500',
    '600': 'bg-red-600',
    '700': 'bg-red-700',
    '800': 'bg-red-800',
    '900': 'bg-red-900',
    '950': 'bg-red-950',
  },
  orange: {
    '50': 'bg-orange-50',
    '100': 'bg-orange-100',
    '200': 'bg-orange-200',
    '300': 'bg-orange-300',
    '400': 'bg-orange-400',
    '500': 'bg-orange-500',
    '600': 'bg-orange-600',
    '700': 'bg-orange-700',
    '800': 'bg-orange-800',
    '900': 'bg-orange-900',
    '950': 'bg-orange-950',
  },
  amber: {
    '50': 'bg-amber-50',
    '100': 'bg-amber-100',
    '200': 'bg-amber-200',
    '300': 'bg-amber-300',
    '400': 'bg-amber-400',
    '500': 'bg-amber-500',
    '600': 'bg-amber-600',
    '700': 'bg-amber-700',
    '800': 'bg-amber-800',
    '900': 'bg-amber-900',
    '950': 'bg-amber-950',
  },
  yellow: {
    '50': 'bg-yellow-50',
    '100': 'bg-yellow-100',
    '200': 'bg-yellow-200',
    '300': 'bg-yellow-300',
    '400': 'bg-yellow-400',
    '500': 'bg-yellow-500',
    '600': 'bg-yellow-600',
    '700': 'bg-yellow-700',
    '800': 'bg-yellow-800',
    '900': 'bg-yellow-900',
    '950': 'bg-yellow-950',
  },
  lime: {
    '50': 'bg-lime-50',
    '100': 'bg-lime-100',
    '200': 'bg-lime-200',
    '300': 'bg-lime-300',
    '400': 'bg-lime-400',
    '500': 'bg-lime-500',
    '600': 'bg-lime-600',
    '700': 'bg-lime-700',
    '800': 'bg-lime-800',
    '900': 'bg-lime-900',
    '950': 'bg-lime-950',
  },
  green: {
    '50': 'bg-green-50',
    '100': 'bg-green-100',
    '200': 'bg-green-200',
    '300': 'bg-green-300',
    '400': 'bg-green-400',
    '500': 'bg-green-500',
    '600': 'bg-green-600',
    '700': 'bg-green-700',
    '800': 'bg-green-800',
    '900': 'bg-green-900',
    '950': 'bg-green-950',
  },
  emerald: {
    '50': 'bg-emerald-50',
    '100': 'bg-emerald-100',
    '200': 'bg-emerald-200',
    '300': 'bg-emerald-300',
    '400': 'bg-emerald-400',
    '500': 'bg-emerald-500',
    '600': 'bg-emerald-600',
    '700': 'bg-emerald-700',
    '800': 'bg-emerald-800',
    '900': 'bg-emerald-900',
    '950': 'bg-emerald-950',
  },
  teal: {
    '50': 'bg-teal-50',
    '100': 'bg-teal-100',
    '200': 'bg-teal-200',
    '300': 'bg-teal-300',
    '400': 'bg-teal-400',
    '500': 'bg-teal-500',
    '600': 'bg-teal-600',
    '700': 'bg-teal-700',
    '800': 'bg-teal-800',
    '900': 'bg-teal-900',
    '950': 'bg-teal-950',
  },
  cyan: {
    '50': 'bg-cyan-50',
    '100': 'bg-cyan-100',
    '200': 'bg-cyan-200',
    '300': 'bg-cyan-300',
    '400': 'bg-cyan-400',
    '500': 'bg-cyan-500',
    '600': 'bg-cyan-600',
    '700': 'bg-cyan-700',
    '800': 'bg-cyan-800',
    '900': 'bg-cyan-900',
    '950': 'bg-cyan-950',
  },
  sky: {
    '50': 'bg-sky-50',
    '100': 'bg-sky-100',
    '200': 'bg-sky-200',
    '300': 'bg-sky-300',
    '400': 'bg-sky-400',
    '500': 'bg-sky-500',
    '600': 'bg-sky-600',
    '700': 'bg-sky-700',
    '800': 'bg-sky-800',
    '900': 'bg-sky-900',
    '950': 'bg-sky-950',
  },
  blue: {
    '50': 'bg-blue-50',
    '100': 'bg-blue-100',
    '200': 'bg-blue-200',
    '300': 'bg-blue-300',
    '400': 'bg-blue-400',
    '500': 'bg-blue-500',
    '600': 'bg-blue-600',
    '700': 'bg-blue-700',
    '800': 'bg-blue-800',
    '900': 'bg-blue-900',
    '950': 'bg-blue-950',
  },
  indigo: {
    '50': 'bg-indigo-50',
    '100': 'bg-indigo-100',
    '200': 'bg-indigo-200',
    '300': 'bg-indigo-300',
    '400': 'bg-indigo-400',
    '500': 'bg-indigo-500',
    '600': 'bg-indigo-600',
    '700': 'bg-indigo-700',
    '800': 'bg-indigo-800',
    '900': 'bg-indigo-900',
    '950': 'bg-indigo-950',
  },
  violet: {
    '50': 'bg-violet-50',
    '100': 'bg-violet-100',
    '200': 'bg-violet-200',
    '300': 'bg-violet-300',
    '400': 'bg-violet-400',
    '500': 'bg-violet-500',
    '600': 'bg-violet-600',
    '700': 'bg-violet-700',
    '800': 'bg-violet-800',
    '900': 'bg-violet-900',
    '950': 'bg-violet-950',
  },
  purple: {
    '50': 'bg-purple-50',
    '100': 'bg-purple-100',
    '200': 'bg-purple-200',
    '300': 'bg-purple-300',
    '400': 'bg-purple-400',
    '500': 'bg-purple-500',
    '600': 'bg-purple-600',
    '700': 'bg-purple-700',
    '800': 'bg-purple-800',
    '900': 'bg-purple-900',
    '950': 'bg-purple-950',
  },
  fuchsia: {
    '50': 'bg-fuchsia-50',
    '100': 'bg-fuchsia-100',
    '200': 'bg-fuchsia-200',
    '300': 'bg-fuchsia-300',
    '400': 'bg-fuchsia-400',
    '500': 'bg-fuchsia-500',
    '600': 'bg-fuchsia-600',
    '700': 'bg-fuchsia-700',
    '800': 'bg-fuchsia-800',
    '900': 'bg-fuchsia-900',
    '950': 'bg-fuchsia-950',
  },
  pink: {
    '50': 'bg-pink-50',
    '100': 'bg-pink-100',
    '200': 'bg-pink-200',
    '300': 'bg-pink-300',
    '400': 'bg-pink-400',
    '500': 'bg-pink-500',
    '600': 'bg-pink-600',
    '700': 'bg-pink-700',
    '800': 'bg-pink-800',
    '900': 'bg-pink-900',
    '950': 'bg-pink-950',
  },
  rose: {
    '50': 'bg-rose-50',
    '100': 'bg-rose-100',
    '200': 'bg-rose-200',
    '300': 'bg-rose-300',
    '400': 'bg-rose-400',
    '500': 'bg-rose-500',
    '600': 'bg-rose-600',
    '700': 'bg-rose-700',
    '800': 'bg-rose-800',
    '900': 'bg-rose-900',
    '950': 'bg-rose-950',
  },
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
    success: [
      { shade: '100', class: 'bg-green-100' },
      { shade: '300', class: 'bg-green-300' },
      { shade: '500', class: 'bg-green-500' },
      { shade: '600', class: 'bg-green-600' },
      { shade: '700', class: 'bg-green-700' },
    ],
    error: [
      { shade: '100', class: 'bg-red-100' },
      { shade: '300', class: 'bg-red-300' },
      { shade: '500', class: 'bg-red-500' },
      { shade: '600', class: 'bg-red-600' },
      { shade: '700', class: 'bg-red-700' },
    ],
    warning: [
      { shade: '100', class: 'bg-yellow-100' },
      { shade: '300', class: 'bg-yellow-300' },
      { shade: '500', class: 'bg-yellow-500' },
      { shade: '600', class: 'bg-yellow-600' },
      { shade: '700', class: 'bg-yellow-700' },
    ],
    info: [
      { shade: '100', class: 'bg-blue-100' },
      { shade: '300', class: 'bg-blue-300' },
      { shade: '500', class: 'bg-blue-500' },
      { shade: '600', class: 'bg-blue-600' },
      { shade: '700', class: 'bg-blue-700' },
    ],
  }
};

export default function ColorsPage() {
  const [activeTab, setActiveTab] = useState<'tailwind' | 'custom'>('tailwind');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const copyToClipboard = async (text: string) => {
    try {
      // Tenta usar a API moderna primeiro
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback para método antigo
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Fallback copy failed:', err);
        } finally {
          textArea.remove();
        }
      }
      
      setCopiedColor(text);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Ainda mostra feedback visual mesmo se falhar
      setCopiedColor(text);
      setTimeout(() => setCopiedColor(null), 2000);
    }
  };

  const filteredColors = Object.entries(colorClasses).filter(([name]) =>
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
                    {Object.entries(shades).map(([shade, className]) => {
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
                            <p className="text-sm font-medium text-zinc-900">{shade}</p>
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

            {/* Borders */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Bordas</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.borders.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-24 h-24 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                        style={{ border: `3px solid ${token.value}` }}
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

            {/* Primary Colors */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Cores Primárias</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.primary.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-24 h-24 rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
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

            {/* Semantic Colors */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Cores Semânticas</h2>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(customTokens.semantic).map(([type, shades]) => (
                  <div key={type}>
                    <h3 className="text-lg font-medium text-zinc-900 capitalize mb-3">{type}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {shades.map((item) => {
                        const varName = `--color-${type}-${item.shade}`;
                        return (
                          <button
                            key={varName}
                            onClick={() => copyToClipboard(varName)}
                            className="group"
                          >
                            <div
                              className={`${item.class} h-16 rounded-lg shadow-sm group-hover:shadow-md transition-shadow`}
                            />
                            <p className="text-xs text-zinc-600 font-mono mt-2">{item.shade}</p>
                            {copiedColor === varName && (
                              <p className="text-xs text-green-600">Copiado!</p>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}