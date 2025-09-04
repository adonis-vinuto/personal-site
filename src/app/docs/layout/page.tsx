'use client';

import { useState } from 'react';

// Configurações de layout
const layoutSystems = {
  sections: {
    title: 'Sistema de Seções',
    description: 'Espaçamento vertical consistente para seções',
    items: [
      { class: 'section', label: 'Seção Padrão', padding: '5rem desktop / 3rem mobile' },
      { class: 'section-sm', label: 'Seção Pequena', padding: '3rem / 2rem mobile' },
      { class: 'section-lg', label: 'Seção Grande', padding: '8rem / 4rem mobile' }
    ]
  },
  stack: {
    vertical: [
      { class: 'stack', label: 'Stack Padrão', spacing: '1rem' },
      { class: 'stack-v', label: 'Stack Vertical', spacing: '1rem' },
      { class: 'stack-v-sm', label: 'Stack Pequeno', spacing: '0.5rem' },
      { class: 'stack-v-lg', label: 'Stack Grande', spacing: '2rem' },
      { class: 'stack-v-xl', label: 'Stack Extra Grande', spacing: '3rem' }
    ],
    horizontal: [
      { class: 'stack-h', label: 'Stack Horizontal', spacing: '1rem' },
      { class: 'stack-h-sm', label: 'Stack H Pequeno', spacing: '0.5rem' },
      { class: 'stack-h-lg', label: 'Stack H Grande', spacing: '2rem' },
      { class: 'stack-h-xl', label: 'Stack H Extra Grande', spacing: '3rem' },
      { class: 'stack-h-nowrap', label: 'Sem quebra', spacing: 'nowrap' }
    ]
  },
  grid: {
    title: 'Grid Auto-Responsivo',
    items: [
      { class: 'grid-auto', label: 'Grid Auto Padrão', minWidth: '250px' },
      { class: 'grid-auto-sm', label: 'Grid Auto Pequeno', minWidth: '200px' },
      { class: 'grid-auto-lg', label: 'Grid Auto Grande', minWidth: '300px' }
    ]
  },
  containers: {
    title: 'Containers',
    items: [
      { class: 'container', label: 'Container Padrão', maxWidth: '1280px' },
      { class: 'container-prose', label: 'Container de Leitura', maxWidth: '65ch' },
      { class: 'full-bleed', label: 'Full Bleed', description: 'Escapa do container pai' }
    ]
  },
  utilities: {
    position: [
      { class: 'center-absolute', label: 'Centralização Absoluta', description: 'Centraliza elemento absolutamente' }
    ],
    scroll: [
      { class: 'scrollbar-hide', label: 'Esconder Scrollbar', description: 'Mantém scroll mas esconde barra' },
      { class: 'scroll-snap-x', label: 'Scroll Snap Horizontal', description: 'Snap points ao scrollar' },
      { class: 'mobile-scroll-snap', label: 'Mobile Scroll Snap', description: 'Scroll horizontal apenas mobile' }
    ]
  }
};

const responsiveHelpers = {
  safeAreas: [
    { class: 'safe-area', label: 'Safe Area Completa', description: 'Padding em todos os lados' },
    { class: 'safe-top', label: 'Safe Top', description: 'Padding superior' },
    { class: 'safe-bottom', label: 'Safe Bottom', description: 'Padding inferior' },
    { class: 'safe-left', label: 'Safe Left', description: 'Padding esquerdo' },
    { class: 'safe-right', label: 'Safe Right', description: 'Padding direito' },
    { class: 'safe-top-plus', label: 'Safe Top Plus', description: 'Safe area + 1rem' },
    { class: 'safe-bottom-plus', label: 'Safe Bottom Plus', description: 'Safe area + 1rem' }
  ],
  fluidSpacing: [
    { class: 'p-fluid', label: 'Padding Fluido', value: 'clamp(1rem, 3vw, 2rem)' },
    { class: 'px-fluid', label: 'Padding X Fluido', value: 'clamp(1rem, 4vw, 3rem)' },
    { class: 'py-fluid', label: 'Padding Y Fluido', value: 'clamp(2rem, 5vw, 4rem)' }
  ],
  touchTargets: [
    { class: 'touch-target', label: 'Touch Target', minSize: '44px', description: 'Tamanho mínimo para toque' },
    { class: 'touch-target-inline', label: 'Touch Target Inline', description: 'Para elementos inline' }
  ]
};

export default function LayoutDocumentation() {
  const [activeTab, setActiveTab] = useState<'layout' | 'responsive' | 'examples'>('layout');
  const [copiedClass, setCopiedClass] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedClass(text);
      setTimeout(() => setCopiedClass(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Sistema de Layout</h1>
          <p className="text-zinc-600 mt-2">
            Documentação completa dos sistemas de layout, containers e helpers responsivos
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-1 inline-flex">
          <button
            onClick={() => setActiveTab('layout')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'layout'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Layout Systems
          </button>
          <button
            onClick={() => setActiveTab('responsive')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'responsive'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Responsivo
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'examples'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Exemplos
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'layout' && (
          <div className="space-y-8">
            {/* Section System */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">{layoutSystems.sections.title}</h2>
                <p className="text-sm text-zinc-600 mt-1">{layoutSystems.sections.description}</p>
              </div>
              <div className="p-6 space-y-4">
                {layoutSystems.sections.items.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          .{item.class}
                        </span>
                        <span className="text-sm text-zinc-600">{item.label}</span>
                        {copiedClass === item.class && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                      <span className="text-sm text-zinc-500">{item.padding}</span>
                    </div>
                    <div className={`${item.class} bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-dashed border-zinc-300`}>
                      <div className="bg-white/80 p-4 rounded text-center text-zinc-600">
                        Seção com classe {item.class}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Stack Pattern - Vertical */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Stack Pattern - Vertical</h2>
                <p className="text-sm text-zinc-600 mt-1">Espaçamento automático vertical entre elementos</p>
              </div>
              <div className="p-6 space-y-6">
                {layoutSystems.stack.vertical.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        .{item.class}
                      </span>
                      <span className="text-sm text-zinc-600">{item.label} - {item.spacing}</span>
                      {copiedClass === item.class && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <div className={`${item.class} bg-zinc-50 p-4 rounded-lg`}>
                      <div className="bg-blue-100 p-3 rounded">Item 1</div>
                      <div className="bg-purple-100 p-3 rounded">Item 2</div>
                      <div className="bg-pink-100 p-3 rounded">Item 3</div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Stack Pattern - Horizontal */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Stack Pattern - Horizontal</h2>
                <p className="text-sm text-zinc-600 mt-1">Espaçamento automático horizontal com flexbox</p>
              </div>
              <div className="p-6 space-y-6">
                {layoutSystems.stack.horizontal.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        .{item.class}
                      </span>
                      <span className="text-sm text-zinc-600">
                        {item.label} - {item.spacing}
                      </span>
                      {copiedClass === item.class && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <div className={`${item.class} bg-zinc-50 p-4 rounded-lg`}>
                      <div className="bg-blue-100 px-4 py-2 rounded">Item 1</div>
                      <div className="bg-purple-100 px-4 py-2 rounded">Item 2</div>
                      <div className="bg-pink-100 px-4 py-2 rounded">Item 3</div>
                      <div className="bg-green-100 px-4 py-2 rounded">Item 4</div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Grid Auto */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">{layoutSystems.grid.title}</h2>
                <p className="text-sm text-zinc-600 mt-1">Grid que se ajusta automaticamente ao conteúdo</p>
              </div>
              <div className="p-6 space-y-6">
                {layoutSystems.grid.items.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        .{item.class}
                      </span>
                      <span className="text-sm text-zinc-600">
                        {item.label} - Min: {item.minWidth}
                      </span>
                      {copiedClass === item.class && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <div className={`${item.class} bg-zinc-50 p-4 rounded-lg`}>
                      <div className="bg-blue-100 p-4 rounded text-center">Card 1</div>
                      <div className="bg-purple-100 p-4 rounded text-center">Card 2</div>
                      <div className="bg-pink-100 p-4 rounded text-center">Card 3</div>
                      <div className="bg-green-100 p-4 rounded text-center">Card 4</div>
                      <div className="bg-yellow-100 p-4 rounded text-center">Card 5</div>
                      <div className="bg-orange-100 p-4 rounded text-center">Card 6</div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Continue com o resto do código... */}
          </div>
        )}

        {/* Continue com as outras tabs... */}
      </div>
    </div>
  );
}