'use client';

import { useState } from 'react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

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
  const { copyToClipboard, copiedText } = useCopyToClipboard()
  

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
                        {copiedText === item.class && (
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
                      {copiedText === item.class && (
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
                      {copiedText === item.class && (
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
                      {copiedText === item.class && (
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

            {/* Containers */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">{layoutSystems.containers.title}</h2>
                <p className="text-sm text-zinc-600 mt-1">Containers para diferentes tipos de conteúdo</p>
              </div>
              <div className="p-6 space-y-6">
                {layoutSystems.containers.items.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          .{item.class}
                        </span>
                        <span className="text-sm text-zinc-600">{item.label}</span>
                        {copiedText === item.class && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                      <span className="text-xs text-zinc-500">{item.maxWidth}</span>
                    </div>
                    {item.description && (
                      <p className="text-sm text-zinc-500 mb-3">{item.description}</p>
                    )}
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <div className={item.class === 'full-bleed' ? item.class : `${item.class} mx-auto`}>
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded text-center">
                          Container com classe .{item.class}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Utilitários de Layout</h2>
                <p className="text-sm text-zinc-600 mt-1">Classes especiais para casos específicos</p>
              </div>
              <div className="p-6 space-y-6">
                {/* Position Utilities */}
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 mb-4">Posicionamento</h3>
                  {layoutSystems.utilities.position.map((item) => (
                    <button
                      key={item.class}
                      onClick={() => copyToClipboard(item.class)}
                      className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors mb-3"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          .{item.class}
                        </span>
                        <span className="text-sm text-zinc-600">{item.label}</span>
                        {copiedText === item.class && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-500 mb-3">{item.description}</p>
                      <div className="relative bg-zinc-50 h-32 rounded-lg">
                        <div className={`${item.class} bg-blue-500 text-white px-4 py-2 rounded`}>
                          Centralizado
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Scroll Utilities */}
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 mb-4">Scroll & Overflow</h3>
                  <div className="space-y-3">
                    {layoutSystems.utilities.scroll.map((item) => (
                      <button
                        key={item.class}
                        onClick={() => copyToClipboard(item.class)}
                        className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                            .{item.class}
                          </span>
                          <span className="text-sm text-zinc-600">{item.label}</span>
                          {copiedText === item.class && (
                            <span className="text-sm text-green-600">Copiado!</span>
                          )}
                        </div>
                        <p className="text-sm text-zinc-500">{item.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'responsive' && (
          <div className="space-y-8">
            {/* Safe Areas */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Safe Areas</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Para dispositivos com notch (iPhone X+)
                </p>
              </div>
              <div className="p-6 space-y-4">
                {responsiveHelpers.safeAreas.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                            .{item.class}
                          </span>
                          <span className="text-sm font-medium text-zinc-900">{item.label}</span>
                          {copiedText === item.class && (
                            <span className="text-sm text-green-600">Copiado!</span>
                          )}
                        </div>
                        <p className="text-sm text-zinc-500">{item.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Fluid Spacing */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Espaçamento Fluido</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Valores responsivos com clamp()
                </p>
              </div>
              <div className="p-6 space-y-4">
                {responsiveHelpers.fluidSpacing.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          .{item.class}
                        </span>
                        <span className="text-sm font-medium text-zinc-900">{item.label}</span>
                        {copiedText === item.class && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                      <span className="text-xs text-zinc-500 font-mono">{item.value}</span>
                    </div>
                    <div className={`${item.class} bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg`}>
                      <div className="bg-white/80 p-4 rounded text-center">
                        Conteúdo com {item.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Touch Targets */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Touch Targets</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Acessibilidade em dispositivos touch
                </p>
              </div>
              <div className="p-6 space-y-4">
                {responsiveHelpers.touchTargets.map((item) => (
                  <button
                    key={item.class}
                    onClick={() => copyToClipboard(item.class)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                            .{item.class}
                          </span>
                          <span className="text-sm font-medium text-zinc-900">{item.label}</span>
                          {copiedText === item.class && (
                            <span className="text-sm text-green-600">Copiado!</span>
                          )}
                        </div>
                        <p className="text-sm text-zinc-500">{item.description}</p>
                        {item.minSize && (
                          <p className="text-xs text-zinc-400 mt-1">Mínimo: {item.minSize}</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'examples' && (
          <div className="space-y-8">
            {/* Layout Completo Exemplo */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Layout de Página Completo</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Exemplo combinando múltiplos sistemas de layout
                </p>
              </div>
              <div className="p-6">
                <div className="bg-zinc-50 rounded-lg overflow-hidden">
                  {/* Header */}
                  <div className="safe-top bg-white border-b border-zinc-200 p-4">
                    <div className="container mx-auto">
                      <h3 className="font-semibold">Header com Safe Area</h3>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="section bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="container mx-auto">
                      <div className="stack-v-lg text-center">
                        <h1 className="text-3xl font-bold">Hero Section</h1>
                        <p className="lead">Com espaçamento vertical usando stack pattern</p>
                        <div className="stack-h justify-center">
                          <button className="px-4 py-2 bg-blue-500 text-white rounded">
                            Botão 1
                          </button>
                          <button className="px-4 py-2 bg-purple-500 text-white rounded">
                            Botão 2
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Grid Section */}
                  <div className="section-sm">
                    <div className="container mx-auto">
                      <h2 className="text-2xl font-bold mb-6">Grid Auto-Responsivo</h2>
                      <div className="grid-auto">
                        <div className="bg-white p-6 rounded-lg shadow-sm">Card 1</div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">Card 2</div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">Card 3</div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">Card 4</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="safe-bottom bg-zinc-800 text-white p-4">
                    <div className="container mx-auto text-center">
                      Footer com Safe Bottom
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('section container stack grid-auto safe-area')}
                  className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Copiar classes utilizadas →
                </button>
              </div>
            </section>

            {/* Mobile Scroll Pattern */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Mobile Scroll Pattern</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Scroll horizontal com snap points (redimensione janela para mobile)
                </p>
              </div>
              <div className="p-6">
                <div className="mobile-scroll-snap">
                  <div className="bg-blue-100 p-8 rounded-lg text-center min-w-[280px]">
                    Card 1
                  </div>
                  <div className="bg-purple-100 p-8 rounded-lg text-center min-w-[280px]">
                    Card 2
                  </div>
                  <div className="bg-pink-100 p-8 rounded-lg text-center min-w-[280px]">
                    Card 3
                  </div>
                  <div className="bg-green-100 p-8 rounded-lg text-center min-w-[280px]">
                    Card 4
                  </div>
                </div>
                <p className="text-sm text-zinc-500 mt-4">
                  Classe: <code className="bg-zinc-100 px-2 py-1 rounded">.mobile-scroll-snap</code>
                </p>
              </div>
            </section>

            {/* Container Prose */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Container de Leitura</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Container otimizado para textos longos (max-width: 65ch)
                </p>
              </div>
              <div className="p-6">
                <div className="container-prose">
                  <h3 className="text-xl font-bold mb-4">Título do Artigo</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris.
                  </p>
                  <p className="mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
                <p className="text-sm text-zinc-500 mt-4">
                  Classe: <code className="bg-zinc-100 px-2 py-1 rounded">.container-prose</code>
                </p>
              </div>
            </section>

            {/* Full Bleed Example */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Full Bleed Pattern</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Elemento que escapa do container pai e ocupa toda largura da tela
                </p>
              </div>
              <div className="p-6">
                <div className="container mx-auto">
                  <p className="mb-4">Conteúdo normal dentro do container...</p>
                  
                  <div className="full-bleed bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12 px-6 my-6">
                    <div className="container mx-auto text-center">
                      <h3 className="text-2xl font-bold mb-2">Full Bleed Section</h3>
                      <p>Este elemento escapa do container e ocupa toda a largura da viewport</p>
                    </div>
                  </div>
                  
                  <p>Conteúdo continua normalmente dentro do container...</p>
                </div>
                <p className="text-sm text-zinc-500 mt-4">
                  Classe: <code className="bg-zinc-100 px-2 py-1 rounded">.full-bleed</code>
                </p>
              </div>
            </section>

            {/* Complex Grid Example */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Layout Complexo com Grid</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Combinando diferentes sistemas de grid e stack
                </p>
              </div>
              <div className="p-6">
                <div className="stack-v-lg">
                  {/* Grid de Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Features Grid</h3>
                    <div className="grid-auto-sm">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">🚀</div>
                        <h4 className="font-semibold">Feature 1</h4>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">💡</div>
                        <h4 className="font-semibold">Feature 2</h4>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">⚡</div>
                        <h4 className="font-semibold">Feature 3</h4>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-3xl mb-2">🔧</div>
                        <h4 className="font-semibold">Feature 4</h4>
                      </div>
                    </div>
                  </div>

                  {/* Stack Horizontal para CTAs */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Call to Actions</h3>
                    <div className="stack-h-lg justify-center">
                      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
                        Ação Primária
                      </button>
                      <button className="px-6 py-3 border-2 border-zinc-300 rounded-lg">
                        Ação Secundária
                      </button>
                      <button className="px-6 py-3 text-zinc-600 hover:text-zinc-900">
                        Saiba Mais →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}