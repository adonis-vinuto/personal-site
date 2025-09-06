'use client';

import { useState } from 'react';

// Categorias de utilities
const utilityCategories = {
  accessibility: {
    title: 'Acessibilidade',
    description: 'Classes para melhorar a acessibilidade da aplicação',
    icon: '♿',
    utilities: [
      {
        name: 'visually-hidden',
        description: 'Esconde visualmente mas mantém para leitores de tela',
        example: 'visually-hidden-demo',
        code: `.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}`
      },
      {
        name: 'skip-link',
        description: 'Link para pular navegação (aparece no focus)',
        example: 'skip-link-demo',
        code: `.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--cor-bg);
  color: var(--cor-text);
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 0.25rem;
  z-index: 9999;
}

.skip-link:focus {
  top: 0;
}`
      },
      {
        name: 'touch-target',
        description: 'Garante tamanho mínimo de 44x44px para toque em mobile',
        example: 'touch-target-demo',
        code: `@media (hover: none) and (pointer: coarse) {
  .touch-target {
    min-height: 44px;
    min-width: 44px;
  }
}`
      },
      {
        name: 'touch-target-inline',
        description: 'Para elementos inline em dispositivos touch',
        example: 'touch-target-inline-demo',
        code: `@media (hover: none) and (pointer: coarse) {
  .touch-target-inline {
    padding: 0.5rem;
    margin: -0.5rem;
  }
}`
      }
    ]
  },
  aspectRatios: {
    title: 'Aspect Ratios Especiais',
    description: 'Proporções para diferentes tipos de mídia',
    icon: '📐',
    utilities: [
      {
        name: 'aspect-golden',
        description: 'Proporção áurea (1.618:1)',
        ratio: '1.618 / 1',
        example: 'aspect-golden-demo'
      },
      {
        name: 'aspect-cinema',
        description: 'Cinema widescreen (2.39:1)',
        ratio: '2.39 / 1',
        example: 'aspect-cinema-demo'
      },
      {
        name: 'aspect-phone',
        description: 'Stories/Reels vertical (9:16)',
        ratio: '9 / 16',
        example: 'aspect-phone-demo'
      }
    ]
  },
  safeAreas: {
    title: 'Safe Areas',
    description: 'Padding para dispositivos com notch (iPhone X+)',
    icon: '📱',
    utilities: [
      {
        name: 'safe-area',
        description: 'Padding safe em todos os lados',
        code: 'padding: env(safe-area-inset-*)',
        example: 'safe-area-demo'
      },
      {
        name: 'safe-top',
        description: 'Padding safe no topo',
        code: 'padding-top: env(safe-area-inset-top)',
        example: 'safe-top-demo'
      },
      {
        name: 'safe-bottom',
        description: 'Padding safe na base',
        code: 'padding-bottom: env(safe-area-inset-bottom)',
        example: 'safe-bottom-demo'
      },
      {
        name: 'safe-left',
        description: 'Padding safe à esquerda',
        code: 'padding-left: env(safe-area-inset-left)',
        example: 'safe-left-demo'
      },
      {
        name: 'safe-right',
        description: 'Padding safe à direita',
        code: 'padding-right: env(safe-area-inset-right)',
        example: 'safe-right-demo'
      },
      {
        name: 'safe-top-plus',
        description: 'Safe area + 1rem no topo',
        code: 'padding-top: calc(env(safe-area-inset-top) + 1rem)',
        example: 'safe-top-plus-demo'
      },
      {
        name: 'safe-bottom-plus',
        description: 'Safe area + 1rem na base',
        code: 'padding-bottom: calc(env(safe-area-inset-bottom) + 1rem)',
        example: 'safe-bottom-plus-demo'
      }
    ]
  },
  fluidSpacing: {
    title: 'Espaçamento Fluido',
    description: 'Valores responsivos com clamp()',
    icon: '〰️',
    utilities: [
      {
        name: 'text-fluid',
        description: 'Texto responsivo',
        value: 'clamp(1rem, 2vw + 0.5rem, 1.25rem)',
        example: 'text-fluid-demo'
      },
      {
        name: 'text-fluid-lg',
        description: 'Texto responsivo grande',
        value: 'clamp(1.25rem, 3vw + 0.5rem, 2rem)',
        example: 'text-fluid-lg-demo'
      },
      {
        name: 'text-fluid-xl',
        description: 'Texto responsivo extra grande',
        value: 'clamp(1.5rem, 4vw + 0.5rem, 3rem)',
        example: 'text-fluid-xl-demo'
      },
      {
        name: 'p-fluid',
        description: 'Padding responsivo',
        value: 'clamp(1rem, 3vw, 2rem)',
        example: 'p-fluid-demo'
      },
      {
        name: 'px-fluid',
        description: 'Padding horizontal responsivo',
        value: 'clamp(1rem, 4vw, 3rem)',
        example: 'px-fluid-demo'
      },
      {
        name: 'py-fluid',
        description: 'Padding vertical responsivo',
        value: 'clamp(2rem, 5vw, 4rem)',
        example: 'py-fluid-demo'
      }
    ]
  },
  containerQueries: {
    title: 'Container Queries',
    description: 'Responsividade baseada no container',
    icon: '📦',
    utilities: [
      {
        name: 'container-responsive',
        description: 'Habilita container queries',
        code: 'container-type: inline-size',
        example: 'container-responsive-demo'
      },
      {
        name: 'cq-hidden',
        description: 'Esconde em containers > 640px',
        code: '@container (min-width: 640px) { display: none }',
        example: 'cq-hidden-demo'
      },
      {
        name: 'cq-block',
        description: 'Mostra como block em containers > 640px',
        code: '@container (min-width: 640px) { display: block }',
        example: 'cq-block-demo'
      },
      {
        name: 'cq-grid-cols-2',
        description: 'Grid 2 colunas em containers > 640px',
        code: '@container (min-width: 640px) { grid-template-columns: repeat(2, 1fr) }',
        example: 'cq-grid-cols-2-demo'
      },
      {
        name: 'cq-grid-cols-3',
        description: 'Grid 3 colunas em containers > 1024px',
        code: '@container (min-width: 1024px) { grid-template-columns: repeat(3, 1fr) }',
        example: 'cq-grid-cols-3-demo'
      },
      {
        name: 'cq-grid-cols-4',
        description: 'Grid 4 colunas em containers > 1024px',
        code: '@container (min-width: 1024px) { grid-template-columns: repeat(4, 1fr) }',
        example: 'cq-grid-cols-4-demo'
      }
    ]
  },
  scrollPatterns: {
    title: 'Padrões de Scroll',
    description: 'Comportamentos especiais de scroll',
    icon: '📜',
    utilities: [
      {
        name: 'scrollbar-hide',
        description: 'Esconde scrollbar mas mantém scroll',
        code: `scrollbar-width: none;
-ms-overflow-style: none;
&::-webkit-scrollbar { display: none; }`,
        example: 'scrollbar-hide-demo'
      },
      {
        name: 'scroll-snap-x',
        description: 'Scroll horizontal com snap points',
        code: `overflow-x: auto;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;`,
        example: 'scroll-snap-x-demo'
      },
      {
        name: 'mobile-scroll-snap',
        description: 'Scroll horizontal apenas em mobile',
        code: `@media (max-width: 768px) {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`,
        example: 'mobile-scroll-snap-demo'
      },
      {
        name: 'mobile-scroll-peek',
        description: 'Mostra início do próximo item no scroll',
        code: 'padding-right: 15%',
        example: 'mobile-scroll-peek-demo'
      }
    ]
  },
  positioning: {
    title: 'Posicionamento',
    description: 'Utilities para posicionamento especial',
    icon: '🎯',
    utilities: [
      {
        name: 'center-absolute',
        description: 'Centraliza elemento absolutamente',
        code: `position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);`,
        example: 'center-absolute-demo'
      },
      {
        name: 'full-bleed',
        description: 'Elemento escapa do container pai',
        code: `width: 100vw;
position: relative;
left: 50%;
right: 50%;
margin-left: -50vw;
margin-right: -50vw;`,
        example: 'full-bleed-demo'
      }
    ]
  },
  development: {
    title: 'Desenvolvimento',
    description: 'Ferramentas para debug e desenvolvimento',
    icon: '🔧',
    utilities: [
      {
        name: 'debug',
        description: 'Adiciona outline em todos elementos',
        code: '.debug * { outline: 1px solid rgb(255 0 0 / 0.2); }',
        example: 'debug-demo'
      },
      {
        name: 'debug-grid',
        description: 'Adiciona grid de background para alinhamento',
        code: `background-image: 
  linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
background-size: 1rem 1rem;`,
        example: 'debug-grid-demo'
      }
    ]
  }
};

// Tailwind utilities importantes
const tailwindUtilities = {
  visibility: [
    { class: 'invisible', description: 'Torna elemento invisível mas mantém espaço' },
    { class: 'visible', description: 'Torna elemento visível' },
    { class: 'collapse', description: 'Colapsa elemento (para tabelas)' }
  ],
  display: [
    { class: 'hidden', description: 'Esconde elemento completamente' },
    { class: 'block', description: 'Display block' },
    { class: 'inline-block', description: 'Display inline-block' },
    { class: 'inline', description: 'Display inline' },
    { class: 'flex', description: 'Display flex' },
    { class: 'inline-flex', description: 'Display inline-flex' },
    { class: 'grid', description: 'Display grid' },
    { class: 'inline-grid', description: 'Display inline-grid' },
    { class: 'flow-root', description: 'Display flow-root' }
  ],
  overflow: [
    { class: 'overflow-auto', description: 'Adiciona scroll quando necessário' },
    { class: 'overflow-hidden', description: 'Esconde overflow' },
    { class: 'overflow-clip', description: 'Clipa overflow' },
    { class: 'overflow-visible', description: 'Mostra overflow' },
    { class: 'overflow-scroll', description: 'Sempre mostra scrollbar' },
    { class: 'overflow-x-auto', description: 'Scroll horizontal quando necessário' },
    { class: 'overflow-y-auto', description: 'Scroll vertical quando necessário' }
  ],
  position: [
    { class: 'static', description: 'Posição estática (padrão)' },
    { class: 'fixed', description: 'Posição fixa na viewport' },
    { class: 'absolute', description: 'Posição absoluta' },
    { class: 'relative', description: 'Posição relativa' },
    { class: 'sticky', description: 'Posição sticky' }
  ],
  zIndex: [
    { class: 'z-0', description: 'z-index: 0' },
    { class: 'z-10', description: 'z-index: 10' },
    { class: 'z-20', description: 'z-index: 20' },
    { class: 'z-30', description: 'z-index: 30' },
    { class: 'z-40', description: 'z-index: 40' },
    { class: 'z-50', description: 'z-index: 50' },
    { class: 'z-auto', description: 'z-index: auto' }
  ]
};

export default function UtilitiesDocumentation() {
  const [activeTab, setActiveTab] = useState<'custom' | 'tailwind'>('custom');
  const [copiedClass, setCopiedClass] = useState<string | null>(null);
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
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
      
      setCopiedClass(text);
      setTimeout(() => setCopiedClass(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopiedClass(text);
      setTimeout(() => setCopiedClass(null), 2000);
    }
  };

  const renderExample = (exampleType: string) => {
    switch (exampleType) {
      // Accessibility
      case 'visually-hidden-demo':
        return (
          <div className="p-4 bg-zinc-50 rounded">
            <p className="text-sm text-zinc-600 mb-2">
              Botão com texto apenas para leitores de tela:
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <span aria-hidden="true">❤️</span>
              <span className="visually-hidden">Adicionar aos favoritos</span>
            </button>
            <p className="text-xs text-zinc-500 mt-2">
              O texto "Adicionar aos favoritos" está presente mas visualmente escondido
            </p>
          </div>
        );

      case 'skip-link-demo':
        return (
          <div className="p-4 bg-zinc-50 rounded">
            <p className="text-sm text-zinc-600 mb-2">
              Pressione Tab para ver o skip link aparecer:
            </p>
            <div className="relative h-20 bg-white rounded border border-zinc-200">
              <a href="#main-content" className="skip-link">
                Pular para conteúdo principal
              </a>
              <p className="p-4 text-sm">Navegação do site...</p>
            </div>
          </div>
        );

      case 'touch-target-demo':
        return (
          <div className="p-4 bg-zinc-50 rounded">
            <p className="text-sm text-zinc-600 mb-2">
              Botões com área de toque adequada (44x44px min em mobile):
            </p>
            <div className="flex gap-4">
              <button className="touch-target px-3 py-1 bg-blue-500 text-white rounded text-sm">
                OK
              </button>
              <button className="touch-target px-3 py-1 bg-gray-500 text-white rounded text-sm">
                Cancelar
              </button>
            </div>
          </div>
        );

      case 'touch-target-inline-demo':
        return (
          <div className="p-4 bg-zinc-50 rounded">
            <p className="text-sm text-zinc-600">
              Link com <a href="#" className="touch-target-inline text-blue-600 underline">área de toque expandida</a> para facilitar o clique em mobile.
            </p>
          </div>
        );

      // Aspect Ratios
      case 'aspect-golden-demo':
        return (
          <div className="aspect-golden bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white font-medium">
            Proporção Áurea
          </div>
        );

      case 'aspect-cinema-demo':
        return (
          <div className="aspect-cinema bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-medium">
            Cinema 2.39:1
          </div>
        );

      case 'aspect-phone-demo':
        return (
          <div className="aspect-phone bg-gradient-to-b from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-medium max-w-[200px] mx-auto">
            Stories 9:16
          </div>
        );

      // Safe Areas
      case 'safe-area-demo':
      case 'safe-top-demo':
      case 'safe-bottom-demo':
      case 'safe-left-demo':
      case 'safe-right-demo':
      case 'safe-top-plus-demo':
      case 'safe-bottom-plus-demo':
        const safeClass = exampleType.replace('-demo', '');
        return (
          <div className={`${safeClass} bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-4 border-2 border-dashed border-blue-300`}>
            <p className="text-sm text-zinc-700">
              Área com padding safe para dispositivos com notch
            </p>
            <p className="text-xs text-zinc-500 mt-1">
              Classe: .{safeClass}
            </p>
          </div>
        );

      // Fluid Spacing
      case 'text-fluid-demo':
        return (
          <p className="text-fluid">
            Texto com tamanho fluido que se adapta à viewport
          </p>
        );

      case 'text-fluid-lg-demo':
        return (
          <p className="text-fluid-lg font-semibold">
            Texto fluido grande responsivo
          </p>
        );

      case 'text-fluid-xl-demo':
        return (
          <p className="text-fluid-xl font-bold">
            Texto fluido extra grande
          </p>
        );

      case 'p-fluid-demo':
        return (
          <div className="p-fluid bg-blue-100 rounded-lg">
            <p className="text-sm">Container com padding fluido</p>
          </div>
        );

      case 'px-fluid-demo':
        return (
          <div className="px-fluid py-4 bg-purple-100 rounded-lg">
            <p className="text-sm">Padding horizontal fluido</p>
          </div>
        );

      case 'py-fluid-demo':
        return (
          <div className="py-fluid px-4 bg-green-100 rounded-lg">
            <p className="text-sm">Padding vertical fluido</p>
          </div>
        );

      // Container Queries
      case 'container-responsive-demo':
        return (
          <div className="container-responsive bg-zinc-100 p-4 rounded-lg">
            <p className="text-sm text-zinc-600 mb-2">Redimensione o container:</p>
            <div className="grid gap-2 cq-grid-cols-2">
              <div className="bg-white p-2 rounded">Item 1</div>
              <div className="bg-white p-2 rounded">Item 2</div>
              <div className="bg-white p-2 rounded cq-hidden">Item 3 (esconde em containers grandes)</div>
            </div>
          </div>
        );

      // Scroll Patterns
      case 'scrollbar-hide-demo':
        return (
          <div className="scrollbar-hide overflow-x-auto bg-zinc-50 p-4 rounded">
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-2">Scroll horizontal sem scrollbar visível</p>
          </div>
        );

      case 'scroll-snap-x-demo':
        return (
          <div className="scroll-snap-x overflow-x-auto bg-zinc-50 p-4 rounded">
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="flex-shrink-0 w-full sm:w-64 h-32 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center text-white font-bold scroll-snap-align-start">
                  Snap {i}
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-500 mt-2">Scroll com snap points</p>
          </div>
        );

      case 'mobile-scroll-snap-demo':
        return (
          <div className="bg-zinc-50 p-4 rounded">
            <p className="text-sm text-zinc-600 mb-2">Scroll horizontal apenas em telas pequenas:</p>
            <div className="mobile-scroll-snap gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="min-w-[85%] sm:min-w-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg p-4 text-white">
                  Card {i}
                </div>
              ))}
            </div>
          </div>
        );

      // Positioning
      case 'center-absolute-demo':
        return (
          <div className="relative h-32 bg-zinc-100 rounded-lg">
            <div className="center-absolute bg-blue-500 text-white px-4 py-2 rounded">
              Centralizado
            </div>
          </div>
        );

      case 'full-bleed-demo':
        return (
          <div className="bg-zinc-50 p-4 rounded">
            <p className="text-sm text-zinc-600 mb-2">Container normal</p>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 -mx-4">
              <p className="text-center">Este elemento escapa do container pai (full-bleed)</p>
            </div>
            <p className="text-sm text-zinc-600 mt-2">Container continua normal</p>
          </div>
        );

      // Development
      case 'debug-demo':
        return (
          <div className="p-4 bg-zinc-50 rounded">
            <div className="debug p-4 bg-white rounded">
              <h3 className="font-semibold mb-2">Container com debug</h3>
              <p className="text-sm text-zinc-600 mb-2">Todos elementos têm outline vermelho</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded text-sm">Botão</button>
                <input type="text" className="px-2 py-1 border rounded text-sm" placeholder="Input" />
              </div>
            </div>
          </div>
        );

      case 'debug-grid-demo':
        return (
          <div className="debug-grid h-32 bg-white rounded-lg p-4">
            <p className="text-sm text-zinc-600">Background com grid para alinhamento</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Helpers & Utilities</h1>
          <p className="text-zinc-600 mt-2">
            Classes utilitárias para casos especiais e desenvolvimento
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-1 inline-flex">
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'custom'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Utilities Customizadas
          </button>
          <button
            onClick={() => setActiveTab('tailwind')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'tailwind'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Utilities Tailwind
          </button>
        </div>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Dica:</strong> Estas utilities resolvem casos específicos que não são cobertos 
            pelas classes padrão do Tailwind. Use com moderação e sempre prefira classes nativas quando possível.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'custom' ? (
          <div className="space-y-8">
            {Object.entries(utilityCategories).map(([key, category]) => (
              <section key={key} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-200">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h2 className="text-xl font-semibold text-zinc-900">{category.title}</h2>
                      <p className="text-sm text-zinc-600">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {category.utilities.map((utility) => (
                    <div key={utility.name} className="border border-zinc-200 rounded-lg overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <button
                              onClick={() => copyToClipboard(utility.name)}
                              className="flex items-center gap-3 group"
                            >
                              <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded group-hover:bg-zinc-200 transition-colors">
                                .{utility.name}
                              </span>
                              <span className="text-sm text-zinc-600">{utility.description}</span>
                              {copiedClass === utility.name && (
                                <span className="text-sm text-green-600">Copiado!</span>
                              )}
                            </button>
                            
                            {/* Valores adicionais */}
                            {utility.ratio && (
                              <p className="text-xs text-zinc-500 mt-1 ml-24">
                                Proporção: {utility.ratio}
                              </p>
                            )}
                            {utility.value && (
                              <p className="text-xs text-zinc-500 mt-1 ml-24">
                                Valor: {utility.value}
                              </p>
                            )}
                          </div>
                          
                          {/* Botão de código */}
                          {utility.code && (
                            <button
                              onClick={() => setExpandedCode(expandedCode === utility.name ? null : utility.name)}
                              className="text-sm text-zinc-600 hover:text-zinc-900"
                            >
                              {expandedCode === utility.name ? 'Esconder' : 'Ver'} código
                            </button>
                          )}
                        </div>

                        {/* Código expandido */}
                        {expandedCode === utility.name && utility.code && (
                          <div className="mb-4">
                            <pre className="p-3 bg-zinc-900 text-zinc-100 rounded-lg text-xs overflow-x-auto">
                              <code>{utility.code}</code>
                            </pre>
                          </div>
                        )}

                        {/* Exemplo */}
                        {utility.example && (
                          <div className="mt-4">
                            {renderExample(utility.example)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {/* Visibility Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Visibilidade</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tailwindUtilities.visibility.map((utility) => (
                    <button
                      key={utility.class}
                      onClick={() => copyToClipboard(utility.class)}
                      className="text-left p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          {utility.class}
                        </span>
                        {copiedClass === utility.class && (
                          <span className="text-xs text-green-600">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600">{utility.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Display Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Display</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {tailwindUtilities.display.map((utility) => (
                    <button
                      key={utility.class}
                      onClick={() => copyToClipboard(utility.class)}
                      className="text-left p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          {utility.class}
                        </span>
                        {copiedClass === utility.class && (
                          <span className="text-xs text-green-600">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600">{utility.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Overflow Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Overflow</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {tailwindUtilities.overflow.map((utility) => (
                    <button
                      key={utility.class}
                      onClick={() => copyToClipboard(utility.class)}
                      className="text-left p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          {utility.class}
                        </span>
                        {copiedClass === utility.class && (
                          <span className="text-xs text-green-600">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600">{utility.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Position Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Position</h2>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {tailwindUtilities.position.map((utility) => (
                    <button
                      key={utility.class}
                      onClick={() => copyToClipboard(utility.class)}
                      className="text-left p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          {utility.class}
                        </span>
                        {copiedClass === utility.class && (
                          <span className="text-xs text-green-600">✓</span>
                        )}
                      </div>
                      <p className="text-sm text-zinc-600">{utility.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Z-Index Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Z-Index</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {tailwindUtilities.zIndex.map((utility) => (
                    <button
                      key={utility.class}
                      onClick={() => copyToClipboard(utility.class)}
                      className="text-left p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex flex-col items-center">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded mb-1">
                          {utility.class}
                        </span>
                        {copiedClass === utility.class && (
                          <span className="text-xs text-green-600">✓</span>
                        )}
                        <p className="text-xs text-zinc-500">{utility.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Exemplos Práticos */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Exemplos Práticos</h2>
                <p className="text-sm text-zinc-600 mt-1">Combinações comuns de utilities</p>
              </div>
              <div className="p-6 space-y-6">
                {/* Modal Overlay */}
                <div className="border border-zinc-200 rounded-lg p-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Modal Overlay</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs bg-zinc-100 px-2 py-1 rounded">
                      fixed inset-0 z-50 bg-black/50
                    </span>
                  </div>
                  <div className="relative h-32 bg-zinc-100 rounded overflow-hidden">
                    <div className="p-4">Conteúdo da página</div>
                    <div className="absolute inset-0 z-50 bg-black/50 flex items-center justify-center">
                      <div className="bg-white p-4 rounded">Modal</div>
                    </div>
                  </div>
                </div>

                {/* Sticky Header */}
                <div className="border border-zinc-200 rounded-lg p-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Sticky Header</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs bg-zinc-100 px-2 py-1 rounded">
                      sticky top-0 z-20
                    </span>
                  </div>
                  <div className="h-32 bg-zinc-100 rounded overflow-y-auto">
                    <div className="sticky top-0 z-20 bg-white border-b p-2">Header Sticky</div>
                    <div className="p-2">
                      <p className="mb-4">Conteúdo...</p>
                      <p className="mb-4">Mais conteúdo...</p>
                      <p className="mb-4">Scroll para ver o header fixo...</p>
                      <p>Fim do conteúdo</p>
                    </div>
                  </div>
                </div>

                {/* Dropdown Menu */}
                <div className="border border-zinc-200 rounded-lg p-4">
                  <h3 className="font-medium text-zinc-900 mb-2">Dropdown Menu</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs bg-zinc-100 px-2 py-1 rounded">
                      absolute top-full left-0 z-10
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <button className="px-4 py-2 bg-zinc-900 text-white rounded">
                      Menu
                    </button>
                    <div className="absolute top-full left-0 z-10 mt-1 w-48 bg-white border border-zinc-200 rounded-lg shadow-lg p-2">
                      <a href="#" className="block px-3 py-2 hover:bg-zinc-50 rounded">Item 1</a>
                      <a href="#" className="block px-3 py-2 hover:bg-zinc-50 rounded">Item 2</a>
                      <a href="#" className="block px-3 py-2 hover:bg-zinc-50 rounded">Item 3</a>
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