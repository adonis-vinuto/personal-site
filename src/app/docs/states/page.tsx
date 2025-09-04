'use client';

import { useState } from 'react';

// Categorias de estados
const stateCategories = {
  loading: {
    title: 'Estados de Loading',
    description: 'Classes para indicar carregamento de conteúdo',
    states: [
      {
        name: 'is-loading',
        description: 'Container em estado de carregamento',
        example: 'loading-state-basic'
      },
      {
        name: 'loading-overlay',
        description: 'Overlay de loading sobre conteúdo',
        example: 'loading-overlay-demo'
      },
      {
        name: 'skeleton',
        description: 'Skeleton loading para placeholders',
        example: 'skeleton-demo'
      },
      {
        name: 'spinner',
        description: 'Spinner de carregamento simples',
        example: 'spinner-demo'
      },
      {
        name: 'loading-dots',
        description: 'Dots animados para texto',
        example: 'loading-dots-demo'
      }
    ]
  },
  empty: {
    title: 'Estados Vazios',
    description: 'Classes para containers sem conteúdo',
    states: [
      {
        name: 'is-empty',
        description: 'Container vazio com mensagem',
        example: 'empty-state-demo'
      }
    ]
  },
  forms: {
    title: 'Estados de Formulário',
    description: 'Feedback visual para campos de formulário',
    states: [
      {
        name: 'has-error',
        description: 'Campo com erro de validação',
        example: 'error-field-demo'
      },
      {
        name: 'has-success',
        description: 'Campo validado com sucesso',
        example: 'success-field-demo'
      }
    ]
  },
  dragDrop: {
    title: 'Drag & Drop',
    description: 'Estados para interações de arrastar e soltar',
    states: [
      {
        name: 'is-dragging',
        description: 'Elemento sendo arrastado',
        example: 'dragging-demo'
      },
      {
        name: 'is-drop-zone',
        description: 'Área preparada para receber drop',
        example: 'drop-zone-demo'
      },
      {
        name: 'is-drop-hover',
        description: 'Hover sobre área de drop',
        example: 'drop-hover-demo'
      }
    ]
  },
  selection: {
    title: 'Estados de Seleção',
    description: 'Visual feedback para itens selecionados',
    states: [
      {
        name: 'is-selected',
        description: 'Item selecionado em lista',
        example: 'selected-demo'
      },
      {
        name: 'is-active',
        description: 'Item ativo (navegação, tabs)',
        example: 'active-demo'
      }
    ]
  },
  status: {
    title: 'Indicadores de Status',
    description: 'Status visuais para usuários e sistemas',
    states: [
      {
        name: 'status-online',
        description: 'Status online com pulse',
        example: 'status-online-demo'
      },
      {
        name: 'status-away',
        description: 'Status ausente',
        example: 'status-away-demo'
      },
      {
        name: 'status-busy',
        description: 'Status ocupado',
        example: 'status-busy-demo'
      }
    ]
  },
  badges: {
    title: 'Badge States',
    description: 'Notificações e contadores em elementos',
    states: [
      {
        name: 'badge-new',
        description: 'Indicador de novo item',
        example: 'badge-new-demo'
      },
      {
        name: 'badge-count',
        description: 'Badge com contador',
        example: 'badge-count-demo'
      }
    ]
  }
};

// Animações disponíveis
const animations = {
  entrance: {
    title: 'Animações de Entrada',
    animations: [
      {
        name: 'animate-in',
        description: 'Fade com scale suave',
        duration: '300ms'
      },
      {
        name: 'animate-slide-up',
        description: 'Slide vindo de baixo',
        duration: '400ms'
      },
      {
        name: 'scroll-fade',
        description: 'Fade ativado por scroll',
        duration: '500ms'
      }
    ]
  },
  feedback: {
    title: 'Animações de Feedback',
    animations: [
      {
        name: 'animate-pulse-soft',
        description: 'Pulse suave para notificações',
        duration: '2s'
      },
      {
        name: 'animate-shake',
        description: 'Shake para erros',
        duration: '500ms'
      }
    ]
  },
  hover: {
    title: 'Efeitos Hover',
    animations: [
      {
        name: 'hover-lift',
        description: 'Levanta elemento no hover',
        duration: '150ms'
      },
      {
        name: 'hover-scale',
        description: 'Scale suave no hover',
        duration: '150ms'
      },
      {
        name: 'click-scale',
        description: 'Scale feedback no click',
        duration: '100ms'
      }
    ]
  }
};

export default function StatesDocumentation() {
  const [activeTab, setActiveTab] = useState<'states' | 'animations'>('states');
  const [copiedClass, setCopiedClass] = useState<string | null>(null);
  const [triggerAnimation, setTriggerAnimation] = useState<string>('');

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
      // Loading States
      case 'loading-state-basic':
        return (
          <div className="is-loading p-8 bg-white rounded-lg">
            <p className="text-zinc-600">Este conteúdo está em loading...</p>
          </div>
        );
      
      case 'loading-overlay-demo':
        return (
          <div className="loading-overlay p-8 bg-white rounded-lg relative">
            <p className="text-zinc-900">Conteúdo com overlay</p>
            <div className="spinner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
          </div>
        );
      
      case 'skeleton-demo':
        return (
          <div className="space-y-3">
            <div className="skeleton h-4 w-3/4 rounded"></div>
            <div className="skeleton h-4 w-full rounded"></div>
            <div className="skeleton h-4 w-5/6 rounded"></div>
          </div>
        );
      
      case 'spinner-demo':
        return <div className="spinner mx-auto"></div>;
      
      case 'loading-dots-demo':
        return (
          <p className="text-zinc-900">
            Carregando<span className="loading-dots"></span>
          </p>
        );
      
      // Empty State
      case 'empty-state-demo':
        return (
          <div className="is-empty">
            <svg className="w-12 h-12 text-zinc-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <p className="text-zinc-600">Nenhum item encontrado</p>
            <p className="text-sm text-zinc-500 mt-1">Adicione seu primeiro item para começar</p>
          </div>
        );
      
      // Form States
      case 'error-field-demo':
        return (
          <input
            type="text"
            className="has-error w-full px-3 py-2 border rounded-lg"
            placeholder="Campo com erro"
            defaultValue="Valor inválido"
          />
        );
      
      case 'success-field-demo':
        return (
          <input
            type="text"
            className="has-success w-full px-3 py-2 border rounded-lg"
            placeholder="Campo válido"
            defaultValue="Valor correto"
          />
        );
      
      // Drag & Drop
      case 'dragging-demo':
        return (
          <div className="is-dragging p-4 bg-white border-2 border-zinc-300 rounded-lg cursor-grabbing">
            <p className="text-zinc-600">Elemento sendo arrastado</p>
          </div>
        );
      
      case 'drop-zone-demo':
        return (
          <div className="is-drop-zone p-8 rounded-lg">
            <p className="text-zinc-600 text-center">Arraste arquivos aqui</p>
          </div>
        );
      
      case 'drop-hover-demo':
        return (
          <div className="is-drop-hover p-8 rounded-lg">
            <p className="text-blue-700 text-center font-medium">Solte para adicionar</p>
          </div>
        );
      
      // Selection States
      case 'selected-demo':
        return (
          <div className="space-y-2">
            <div className="p-3 bg-white rounded">Item normal</div>
            <div className="is-selected p-3 rounded">Item selecionado</div>
            <div className="p-3 bg-white rounded">Outro item</div>
          </div>
        );
      
      case 'active-demo':
        return (
          <nav className="flex gap-4">
            <a href="#" className="text-zinc-600">Home</a>
            <a href="#" className="is-active">Projetos</a>
            <a href="#" className="text-zinc-600">Sobre</a>
          </nav>
        );
      
      // Status Indicators
      case 'status-online-demo':
        return <span className="status-indicator status-online">João Silva</span>;
      
      case 'status-away-demo':
        return <span className="status-indicator status-away">Maria Santos</span>;
      
      case 'status-busy-demo':
        return <span className="status-indicator status-busy">Pedro Costa</span>;
      
      // Badges
      case 'badge-new-demo':
        return (
          <button className="badge-new px-4 py-2 bg-zinc-900 text-white rounded-lg">
            Notificações
          </button>
        );
      
      case 'badge-count-demo':
        return (
          <button className="badge-count px-4 py-2 bg-zinc-900 text-white rounded-lg" data-count="5">
            Mensagens
          </button>
        );
      
      default:
        return null;
    }
  };

  const triggerAnimationDemo = (animationClass: string) => {
    setTriggerAnimation(animationClass);
    setTimeout(() => setTriggerAnimation(''), 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Estados e Feedback</h1>
          <p className="text-zinc-600 mt-2">
            Sistema completo de estados visuais, animações e feedback da interface
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-1 inline-flex">
          <button
            onClick={() => setActiveTab('states')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'states'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Estados
          </button>
          <button
            onClick={() => setActiveTab('animations')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'animations'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Animações
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'states' ? (
          <div className="space-y-8">
            {Object.entries(stateCategories).map(([key, category]) => (
              <section key={key} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-200">
                  <h2 className="text-xl font-semibold text-zinc-900">{category.title}</h2>
                  <p className="text-sm text-zinc-600 mt-1">{category.description}</p>
                </div>
                <div className="p-6 space-y-6">
                  {category.states.map((state) => (
                    <div key={state.name} className="space-y-3">
                      <button
                        onClick={() => copyToClipboard(state.name)}
                        className="flex items-center gap-3 group"
                      >
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded group-hover:bg-zinc-200 transition-colors">
                          .{state.name}
                        </span>
                        <span className="text-sm text-zinc-600">{state.description}</span>
                        {copiedClass === state.name && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </button>
                      <div className="bg-zinc-50 p-6 rounded-lg">
                        {renderExample(state.example)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(animations).map(([key, category]) => (
              <section key={key} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-200">
                  <h2 className="text-xl font-semibold text-zinc-900">{category.title}</h2>
                </div>
                <div className="p-6 space-y-6">
                  {category.animations.map((animation) => (
                    <div key={animation.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => copyToClipboard(animation.name)}
                          className="flex items-center gap-3 group"
                        >
                          <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded group-hover:bg-zinc-200 transition-colors">
                            .{animation.name}
                          </span>
                          <span className="text-sm text-zinc-600">{animation.description}</span>
                          <span className="text-xs text-zinc-500">({animation.duration})</span>
                          {copiedClass === animation.name && (
                            <span className="text-sm text-green-600">Copiado!</span>
                          )}
                        </button>
                        <button
                          onClick={() => triggerAnimationDemo(animation.name)}
                          className="px-3 py-1 text-sm bg-zinc-900 text-white rounded hover:bg-zinc-700 transition-colors"
                        >
                          Testar
                        </button>
                      </div>
                      <div className="bg-zinc-50 p-8 rounded-lg flex items-center justify-center min-h-[120px]">
                        {animation.name === 'hover-lift' || animation.name === 'hover-scale' || animation.name === 'click-scale' ? (
                          <div className={`${animation.name} px-6 py-3 bg-white border-2 border-zinc-300 rounded-lg cursor-pointer`}>
                            <p className="text-zinc-700 font-medium">
                              {animation.name === 'click-scale' ? 'Clique aqui' : 'Passe o mouse'}
                            </p>
                          </div>
                        ) : (
                          <div 
                            className={`${triggerAnimation === animation.name ? animation.name : ''} px-6 py-3 bg-white border-2 border-zinc-300 rounded-lg`}
                          >
                            <p className="text-zinc-700 font-medium">Elemento Exemplo</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* Scroll Animations Section */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Animações Scroll-Triggered</h2>
                <p className="text-sm text-zinc-600 mt-1">Classes preparadas para serem ativadas via JavaScript no scroll</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <button
                    onClick={() => copyToClipboard('scroll-fade')}
                    className="flex items-center gap-3 group"
                  >
                    <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded group-hover:bg-zinc-200 transition-colors">
                      .scroll-fade
                    </span>
                    <span className="text-sm text-zinc-600">Fade ativado por scroll</span>
                    {copiedClass === 'scroll-fade' && (
                      <span className="text-sm text-green-600">Copiado!</span>
                    )}
                  </button>
                  <div className="bg-zinc-50 p-4 rounded">
                    <p className="text-sm text-zinc-600 mb-2">Classes auxiliares para stagger effect:</p>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3].map((i) => (
                        <button
                          key={i}
                          onClick={() => copyToClipboard(`scroll-fade-delay-${i}`)}
                          className="font-mono text-xs bg-white px-2 py-1 rounded border border-zinc-200 hover:bg-zinc-100"
                        >
                          .scroll-fade-delay-{i}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skeleton Loading Pattern */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Padrões de Loading</h2>
                <p className="text-sm text-zinc-600 mt-1">Exemplos práticos de uso</p>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Card Skeleton */}
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 mb-3">Card Skeleton</h3>
                    <div className="border border-zinc-200 rounded-lg p-4 space-y-3">
                      <div className="skeleton h-40 w-full rounded"></div>
                      <div className="skeleton h-4 w-3/4 rounded"></div>
                      <div className="skeleton h-4 w-full rounded"></div>
                      <div className="skeleton h-4 w-5/6 rounded"></div>
                    </div>
                  </div>
                  
                  {/* List Skeleton */}
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 mb-3">List Skeleton</h3>
                    <div className="border border-zinc-200 rounded-lg p-4 space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="skeleton h-10 w-10 rounded-full"></div>
                          <div className="flex-1 space-y-2">
                            <div className="skeleton h-3 w-1/3 rounded"></div>
                            <div className="skeleton h-3 w-1/2 rounded"></div>
                          </div>
                        </div>
                      ))}
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