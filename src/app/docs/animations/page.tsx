'use client';

import { useState, useEffect } from 'react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

const animationCategories = {
  entrances: {
    title: 'Animações de Entrada',
    description: 'Animações para elementos que aparecem na tela',
    items: [
      {
        name: 'animate-in',
        label: 'Fade Scale In',
        description: 'Fade com scale suave',
        duration: '300ms',
        preview: true
      },
      {
        name: 'animate-slide-up',
        label: 'Slide Up',
        description: 'Desliza de baixo para cima',
        duration: '400ms',
        preview: true
      },
      {
        name: 'scroll-fade',
        label: 'Scroll Fade',
        description: 'Aparece quando entra na viewport',
        duration: '500ms',
        preview: false
      },
      {
        name: 'scroll-fade-delay-1',
        label: 'Scroll Fade Delay 1',
        description: 'Com delay de 100ms',
        duration: '500ms + 100ms delay',
        preview: false
      },
      {
        name: 'scroll-fade-delay-2',
        label: 'Scroll Fade Delay 2',
        description: 'Com delay de 200ms',
        duration: '500ms + 200ms delay',
        preview: false
      },
      {
        name: 'scroll-fade-delay-3',
        label: 'Scroll Fade Delay 3',
        description: 'Com delay de 300ms',
        duration: '500ms + 300ms delay',
        preview: false
      }
    ]
  },
  hover: {
    title: 'Efeitos Hover',
    description: 'Interações ao passar o mouse',
    items: [
      {
        name: 'hover-lift',
        label: 'Hover Lift',
        description: 'Levanta o elemento em 2px',
        duration: '150ms',
        preview: true
      },
      {
        name: 'hover-scale',
        label: 'Hover Scale',
        description: 'Aumenta o elemento em 5%',
        duration: '150ms',
        preview: true
      },
      {
        name: 'click-scale',
        label: 'Click Scale',
        description: 'Diminui ao clicar (feedback)',
        duration: '100ms',
        preview: true
      }
    ]
  },
  loading: {
    title: 'Estados de Loading',
    description: 'Indicadores de carregamento',
    items: [
      {
        name: 'skeleton',
        label: 'Skeleton Loading',
        description: 'Efeito shimmer para loading',
        duration: '1.5s infinite',
        preview: true
      },
      {
        name: 'animate-pulse-soft',
        label: 'Pulse Suave',
        description: 'Pulsação suave para notificações',
        duration: '2s infinite',
        preview: true
      },
      {
        name: 'loading-dots',
        label: 'Loading Dots',
        description: 'Pontos animados (...)',
        duration: '1.5s infinite',
        preview: true
      },
      {
        name: 'spinner',
        label: 'Spinner',
        description: 'Círculo giratório',
        duration: '800ms infinite',
        preview: true
      },
      {
        name: 'is-loading',
        label: 'Container Loading',
        description: 'Estado de loading para containers',
        duration: 'N/A',
        preview: false
      },
      {
        name: 'loading-overlay',
        label: 'Loading Overlay',
        description: 'Overlay com blur',
        duration: 'N/A',
        preview: false
      }
    ]
  },
  feedback: {
    title: 'Feedback Visual',
    description: 'Animações para feedback ao usuário',
    items: [
      {
        name: 'animate-shake',
        label: 'Shake',
        description: 'Tremor para erros',
        duration: '500ms',
        preview: true
      },
      {
        name: 'has-error',
        label: 'Campo com Erro',
        description: 'Borda vermelha com focus',
        duration: 'N/A',
        preview: true
      },
      {
        name: 'has-success',
        label: 'Campo com Sucesso',
        description: 'Borda verde com focus',
        duration: 'N/A',
        preview: true
      }
    ]
  },
  dragDrop: {
    title: 'Drag & Drop',
    description: 'Estados para arrastar e soltar',
    items: [
      {
        name: 'is-dragging',
        label: 'Elemento Arrastando',
        description: 'Opacidade reduzida ao arrastar',
        duration: 'N/A',
        preview: false
      },
      {
        name: 'is-drop-zone',
        label: 'Área de Drop',
        description: 'Área pronta para receber',
        duration: '150ms',
        preview: true
      },
      {
        name: 'is-drop-hover',
        label: 'Drop Hover',
        description: 'Hover sobre área de drop',
        duration: '150ms',
        preview: true
      }
    ]
  },
  status: {
    title: 'Indicadores de Status',
    description: 'Status e badges animados',
    items: [
      {
        name: 'status-online',
        label: 'Status Online',
        description: 'Indicador verde com pulse',
        duration: '2s infinite',
        preview: true
      },
      {
        name: 'status-away',
        label: 'Status Away',
        description: 'Indicador amarelo',
        duration: 'N/A',
        preview: true
      },
      {
        name: 'status-busy',
        label: 'Status Busy',
        description: 'Indicador vermelho',
        duration: 'N/A',
        preview: true
      },
      {
        name: 'badge-new',
        label: 'Badge New',
        description: 'Ponto vermelho de notificação',
        duration: 'N/A',
        preview: true
      },
      {
        name: 'badge-count',
        label: 'Badge Count',
        description: 'Contador numérico',
        duration: 'N/A',
        preview: true,
        dataAttribute: 'data-count="5"'
      }
    ]
  }
};

// Configurações do Tailwind para animações
const tailwindAnimations = {
  duration: [
    { class: 'duration-75', value: '75ms' },
    { class: 'duration-100', value: '100ms' },
    { class: 'duration-150', value: '150ms' },
    { class: 'duration-200', value: '200ms' },
    { class: 'duration-300', value: '300ms' },
    { class: 'duration-500', value: '500ms' },
    { class: 'duration-700', value: '700ms' },
    { class: 'duration-1000', value: '1000ms' },
  ],
  timing: [
    { class: 'ease-linear', value: 'linear' },
    { class: 'ease-in', value: 'ease-in' },
    { class: 'ease-out', value: 'ease-out' },
    { class: 'ease-in-out', value: 'ease-in-out' },
  ],
  delay: [
    { class: 'delay-75', value: '75ms' },
    { class: 'delay-100', value: '100ms' },
    { class: 'delay-150', value: '150ms' },
    { class: 'delay-200', value: '200ms' },
    { class: 'delay-300', value: '300ms' },
    { class: 'delay-500', value: '500ms' },
    { class: 'delay-700', value: '700ms' },
    { class: 'delay-1000', value: '1000ms' },
  ]
};

// Keyframes customizados disponíveis
const customKeyframes = [
  {
    name: 'fadeScaleIn',
    description: 'Fade com scale de 0.95 para 1',
    css: `@keyframes fadeScaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}`
  },
  {
    name: 'slideUp',
    description: 'Desliza de baixo com fade',
    css: `@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`
  },
  {
    name: 'shimmer',
    description: 'Efeito de brilho para skeleton',
    css: `@keyframes shimmer {
  from {
    background-position: -200% 0;
  }
  to {
    background-position: 200% 0;
  }
}`
  },
  {
    name: 'shake',
    description: 'Tremor horizontal para erros',
    css: `@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-0.5rem);
  }
  75% {
    transform: translateX(0.5rem);
  }
}`
  },
  {
    name: 'softPulse',
    description: 'Pulsação suave de opacidade',
    css: `@keyframes softPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}`
  }
];

export default function AnimationsDocumentation() {
  const [activeTab, setActiveTab] = useState<'custom' | 'tailwind' | 'keyframes'>('custom');
  const [triggerAnimation, setTriggerAnimation] = useState<string | null>(null);
  const { copyToClipboard, copiedText } = useCopyToClipboard()
  

  const restartAnimation = (className: string) => {
    setTriggerAnimation(className);
    setTimeout(() => setTriggerAnimation(null), 100);
  };

  const renderPreview = (item: any) => {
    const key = triggerAnimation === item.name ? `${item.name}-restart` : item.name;

    // Previews específicos para cada tipo
    if (item.name === 'skeleton') {
      return (
        <div className="w-full max-w-xs">
          <div className="skeleton h-4 rounded mb-2"></div>
          <div className="skeleton h-4 rounded w-3/4"></div>
        </div>
      );
    }

    if (item.name === 'loading-dots') {
      return <span className="loading-dots text-2xl">Loading</span>;
    }

    if (item.name === 'spinner') {
      return <div className="spinner"></div>;
    }

    if (item.name === 'hover-lift' || item.name === 'hover-scale' || item.name === 'click-scale') {
      return (
        <button className={`px-6 py-3 bg-zinc-900 text-white rounded-lg ${item.name}`}>
          Hover/Click Me
        </button>
      );
    }

    if (item.name === 'is-drop-zone') {
      return (
        <div className="is-drop-zone p-8 rounded-lg text-center">
          <p className="text-zinc-600">Drop Zone</p>
        </div>
      );
    }

    if (item.name === 'is-drop-hover') {
      return (
        <div className="is-drop-hover p-8 rounded-lg text-center">
          <p className="text-zinc-700 font-medium">Drop Here!</p>
        </div>
      );
    }

    if (item.name === 'has-error' || item.name === 'has-success') {
      return (
        <input
          type="text"
          className={`px-4 py-2 border-2 rounded-lg ${item.name} focus:outline-none`}
          placeholder={item.name === 'has-error' ? 'Campo com erro' : 'Campo válido'}
          defaultValue={item.name === 'has-error' ? '' : 'Sucesso!'}
        />
      );
    }

    if (item.name.startsWith('status-')) {
      return (
        <div className={`status-indicator ${item.name}`}>
          {item.name.replace('status-', '').charAt(0).toUpperCase() + item.name.slice(8)}
        </div>
      );
    }

    if (item.name === 'badge-new') {
      return (
        <div className="relative inline-block">
          <button className="px-4 py-2 bg-zinc-200 rounded-lg badge-new">
            Mensagens
          </button>
        </div>
      );
    }

    if (item.name === 'badge-count') {
      return (
        <div className="relative inline-block">
          <button className="px-4 py-2 bg-zinc-200 rounded-lg badge-count" data-count="5">
            Notificações
          </button>
        </div>
      );
    }

    // Default preview box
    return (
      <div 
        key={key}
        className={`w-24 h-24 bg-zinc-900 rounded-lg ${item.name} text-white flex items-center justify-center`}
      >
        <span className="text-xs">Preview</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Sistema de Animações</h1>
          <p className="text-zinc-600 mt-2">
            Documentação completa de animações, transições e efeitos visuais
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
            Classes Customizadas
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
          <button
            onClick={() => setActiveTab('keyframes')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'keyframes'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Keyframes
          </button>
        </div>

        {/* Dica de uso */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Dica:</strong> Clique nos cards para copiar a classe. 
            Algumas animações podem ser reiniciadas clicando no botão "Reiniciar".
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'custom' && (
          <div className="space-y-8">
            {Object.entries(animationCategories).map(([categoryKey, category]) => (
              <section key={categoryKey} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-200">
                  <h2 className="text-xl font-semibold text-zinc-900">{category.title}</h2>
                  <p className="text-sm text-zinc-600 mt-1">{category.description}</p>
                </div>
                <div className="p-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="border border-zinc-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <button
                          onClick={() => copyToClipboard(item.name)}
                          className="w-full text-left p-4 hover:bg-zinc-50 transition-colors"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-zinc-900">{item.label}</h3>
                              <p className="text-sm text-zinc-600 mt-1">{item.description}</p>
                            </div>
                            {copiedText === item.name && (
                              <span className="text-sm text-green-600">Copiado!</span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-3">
                            <code className="text-xs bg-zinc-100 px-2 py-1 rounded font-mono">
                              {item.name}
                            </code>
                            <span className="text-xs text-zinc-500">
                              {item.duration}
                            </span>
                          </div>
                        </button>

                        {item.preview && (
                          <div className="border-t border-zinc-200 p-4 bg-zinc-50">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs text-zinc-600 font-medium">Preview</span>
                              {(item.name === 'animate-in' || item.name === 'animate-slide-up' || item.name === 'animate-shake') && (
                                <button
                                  onClick={() => restartAnimation(item.name)}
                                  className="text-xs bg-zinc-200 hover:bg-zinc-300 px-2 py-1 rounded transition-colors"
                                >
                                  Reiniciar
                                </button>
                              )}
                            </div>
                            <div className="flex items-center justify-center min-h-[100px]">
                              {renderPreview(item)}
                            </div>
                          </div>
                        )}

                        {item.dataAttribute && (
                          <div className="px-4 pb-3">
                            <p className="text-xs text-zinc-500">
                              Requer: <code className="bg-zinc-100 px-1 rounded">{item.dataAttribute}</code>
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}

        {activeTab === 'tailwind' && (
          <div className="space-y-6">
            {/* Duration */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Duração da Transição</h2>
                <p className="text-sm text-zinc-600 mt-1">Classes para controlar a duração de transições CSS</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tailwindAnimations.duration.map((item) => (
                    <button
                      key={item.class}
                      onClick={() => copyToClipboard(item.class)}
                      className="group hover:bg-zinc-50 rounded-lg p-3 transition-colors border border-zinc-200"
                    >
                      <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">
                        {item.class}
                      </code>
                      <p className="text-xs text-zinc-500 mt-2">{item.value}</p>
                      {copiedText === item.class && (
                        <p className="text-xs text-green-600 mt-1">Copiado!</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Timing Functions */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Timing Functions</h2>
                <p className="text-sm text-zinc-600 mt-1">Curvas de aceleração para transições</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tailwindAnimations.timing.map((item) => (
                    <button
                      key={item.class}
                      onClick={() => copyToClipboard(item.class)}
                      className="group hover:bg-zinc-50 rounded-lg p-3 transition-colors border border-zinc-200"
                    >
                      <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">
                        {item.class}
                      </code>
                      <p className="text-xs text-zinc-500 mt-2">{item.value}</p>
                      {copiedText === item.class && (
                        <p className="text-xs text-green-600 mt-1">Copiado!</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Delay */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Delay da Transição</h2>
                <p className="text-sm text-zinc-600 mt-1">Classes para atrasar o início de transições</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tailwindAnimations.delay.map((item) => (
                    <button
                      key={item.class}
                      onClick={() => copyToClipboard(item.class)}
                      className="group hover:bg-zinc-50 rounded-lg p-3 transition-colors border border-zinc-200"
                    >
                      <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">
                        {item.class}
                      </code>
                      <p className="text-xs text-zinc-500 mt-2">{item.value}</p>
                      {copiedText === item.class && (
                        <p className="text-xs text-green-600 mt-1">Copiado!</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Transition Properties */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Propriedades de Transição</h2>
                <p className="text-sm text-zinc-600 mt-1">Controle quais propriedades CSS são animadas</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={() => copyToClipboard('transition-all')}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors border border-zinc-200"
                  >
                    <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">transition-all</code>
                    <p className="text-sm text-zinc-600 mt-2">Anima todas as propriedades</p>
                    {copiedText === 'transition-all' && (
                      <p className="text-xs text-green-600 mt-1">Copiado!</p>
                    )}
                  </button>
                  
                  <button
                    onClick={() => copyToClipboard('transition-colors')}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors border border-zinc-200"
                  >
                    <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">transition-colors</code>
                    <p className="text-sm text-zinc-600 mt-2">Anima cores (color, background, border)</p>
                    {copiedText === 'transition-colors' && (
                      <p className="text-xs text-green-600 mt-1">Copiado!</p>
                    )}
                  </button>
                  
                  <button
                    onClick={() => copyToClipboard('transition-opacity')}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors border border-zinc-200"
                  >
                    <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">transition-opacity</code>
                    <p className="text-sm text-zinc-600 mt-2">Anima apenas opacidade</p>
                    {copiedText === 'transition-opacity' && (
                      <p className="text-xs text-green-600 mt-1">Copiado!</p>
                    )}
                  </button>
                  
                  <button
                    onClick={() => copyToClipboard('transition-transform')}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors border border-zinc-200"
                  >
                    <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">transition-transform</code>
                    <p className="text-sm text-zinc-600 mt-2">Anima transform (scale, rotate, translate)</p>
                    {copiedText === 'transition-transform' && (
                      <p className="text-xs text-green-600 mt-1">Copiado!</p>
                    )}
                  </button>
                  
                  <button
                    onClick={() => copyToClipboard('transition-none')}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors border border-zinc-200"
                  >
                    <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">transition-none</code>
                    <p className="text-sm text-zinc-600 mt-2">Remove todas as transições</p>
                    {copiedText === 'transition-none' && (
                      <p className="text-xs text-green-600 mt-1">Copiado!</p>
                    )}
                  </button>
                  
                  <button
                    onClick={() => copyToClipboard('transition-shadow')}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors border border-zinc-200"
                  >
                    <code className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">transition-shadow</code>
                    <p className="text-sm text-zinc-600 mt-2">Anima box-shadow</p>
                    {copiedText === 'transition-shadow' && (
                      <p className="text-xs text-green-600 mt-1">Copiado!</p>
                    )}
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'keyframes' && (
          <div className="space-y-6">
            {/* Keyframes Customizados */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Keyframes Customizados</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Animações CSS definidas no projeto para uso com classes customizadas
                </p>
              </div>
              <div className="p-6 space-y-6">
                {customKeyframes.map((keyframe) => (
                  <div key={keyframe.name} className="border border-zinc-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => copyToClipboard(keyframe.css)}
                      className="w-full text-left p-4 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-zinc-900 font-mono">@keyframes {keyframe.name}</h3>
                          <p className="text-sm text-zinc-600 mt-1">{keyframe.description}</p>
                        </div>
                        {copiedText === keyframe.css && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                      <pre className="mt-4 p-3 bg-zinc-900 text-zinc-100 rounded text-xs overflow-x-auto">
                        <code>{keyframe.css}</code>
                      </pre>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Como usar */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Como Usar Keyframes</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="prose max-w-none">
                  <p className="text-zinc-700">
                    Os keyframes customizados já estão definidos em <code className="text-sm bg-zinc-100 px-2 py-1 rounded">animations.css</code> e 
                    são usados pelas classes de animação do projeto.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Exemplo de uso:</h3>
                  
                  <pre className="p-4 bg-zinc-900 text-zinc-100 rounded overflow-x-auto">
                    <code>{`// Usando classes prontas
                      <div className="animate-in">Fade scale in</div>
                      <div className="animate-slide-up">Slide up</div>
                      <div className="animate-shake">Shake</div>

                      // Criando nova animação com keyframe existente
                      .minha-animacao {
                        animation: fadeScaleIn 0.5s ease-out;
                      }

                      // Combinando com utilities do Tailwind
                      <div className="animate-in duration-500 delay-200">
                        Animação customizada
                      </div>`}
                    </code>
                  </pre>

                  <h3 className="text-lg font-semibold text-zinc-900 mt-6 mb-3">Classes com animações infinitas:</h3>
                  
                  <ul className="list-disc list-inside space-y-2 text-zinc-700">
                    <li><code className="text-sm bg-zinc-100 px-2 py-1 rounded">skeleton</code> - Loading com shimmer</li>
                    <li><code className="text-sm bg-zinc-100 px-2 py-1 rounded">animate-pulse-soft</code> - Pulsação suave</li>
                    <li><code className="text-sm bg-zinc-100 px-2 py-1 rounded">loading-dots</code> - Pontos animados</li>
                    <li><code className="text-sm bg-zinc-100 px-2 py-1 rounded">spinner</code> - Círculo giratório</li>
                    <li><code className="text-sm bg-zinc-100 px-2 py-1 rounded">status-online</code> - Indicador com pulse</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}