'use client';

import { useState } from 'react';

// Configurações de tipografia do Tailwind 4
const fontSizes = {
  'text-xs': { size: '0.75rem', lineHeight: '1rem', label: 'Extra Small' },
  'text-sm': { size: '0.875rem', lineHeight: '1.25rem', label: 'Small' },
  'text-base': { size: '1rem', lineHeight: '1.5rem', label: 'Base' },
  'text-lg': { size: '1.125rem', lineHeight: '1.75rem', label: 'Large' },
  'text-xl': { size: '1.25rem', lineHeight: '1.75rem', label: 'Extra Large' },
  'text-2xl': { size: '1.5rem', lineHeight: '2rem', label: '2X Large' },
  'text-3xl': { size: '1.875rem', lineHeight: '2.25rem', label: '3X Large' },
  'text-4xl': { size: '2.25rem', lineHeight: '2.5rem', label: '4X Large' },
  'text-5xl': { size: '3rem', lineHeight: '1', label: '5X Large' },
  'text-6xl': { size: '3.75rem', lineHeight: '1', label: '6X Large' },
  'text-7xl': { size: '4.5rem', lineHeight: '1', label: '7X Large' },
  'text-8xl': { size: '6rem', lineHeight: '1', label: '8X Large' },
  'text-9xl': { size: '8rem', lineHeight: '1', label: '9X Large' },
};

const fontWeights = {
  'font-thin': { weight: '100', label: 'Thin' },
  'font-extralight': { weight: '200', label: 'Extra Light' },
  'font-light': { weight: '300', label: 'Light' },
  'font-normal': { weight: '400', label: 'Normal' },
  'font-medium': { weight: '500', label: 'Medium' },
  'font-semibold': { weight: '600', label: 'Semibold' },
  'font-bold': { weight: '700', label: 'Bold' },
  'font-extrabold': { weight: '800', label: 'Extra Bold' },
  'font-black': { weight: '900', label: 'Black' },
};

const lineHeights = {
  'leading-none': { value: '1', label: 'None' },
  'leading-tight': { value: '1.25', label: 'Tight' },
  'leading-snug': { value: '1.375', label: 'Snug' },
  'leading-normal': { value: '1.5', label: 'Normal' },
  'leading-relaxed': { value: '1.625', label: 'Relaxed' },
  'leading-loose': { value: '2', label: 'Loose' },
};

const letterSpacings = {
  'tracking-tighter': { value: '-0.05em', label: 'Tighter' },
  'tracking-tight': { value: '-0.025em', label: 'Tight' },
  'tracking-normal': { value: '0em', label: 'Normal' },
  'tracking-wide': { value: '0.025em', label: 'Wide' },
  'tracking-wider': { value: '0.05em', label: 'Wider' },
  'tracking-widest': { value: '0.1em', label: 'Widest' },
};

const textAlignments = [
  'text-left',
  'text-center',
  'text-right',
  'text-justify'
];

const textTransforms = [
  'uppercase',
  'lowercase',
  'capitalize',
  'normal-case'
];

const fontFamilies = {
  'font-sans': 'Sans Serif',
  'font-serif': 'Serif',
  'font-mono': 'Monospace',
};

// Classes customizadas do projeto
const customTypography = {
  display: {
    'text-display': 'Display',
    'text-hero': 'Hero',
    'h1-fluid': 'H1 Fluid',
    'h2-fluid': 'H2 Fluid',
    'h3-fluid': 'H3 Fluid',
  },
  content: {
    'lead': 'Lead Text',
    'prose': 'Prose Container',
    'blockquote': 'Blockquote',
    'code-inline': 'Inline Code',
    'drop-cap': 'Drop Cap',
    'small-caps': 'Small Caps',
  },
  utilities: {
    'text-gradient': 'Text Gradient',
    'text-balance': 'Text Balance',
    'text-pretty': 'Text Pretty',
    'tabular-nums': 'Tabular Numbers',
    'line-clamp-1': 'Line Clamp 1',
    'line-clamp-2': 'Line Clamp 2',
    'line-clamp-3': 'Line Clamp 3',
  }
};

export default function TypographyDocumentation() {
  const [activeTab, setActiveTab] = useState<'sizes' | 'styles' | 'custom'>('sizes');
  const [sampleText, setSampleText] = useState('The quick brown fox jumps over the lazy dog');
  const [copiedClass, setCopiedClass] = useState<string | null>(null);

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
      
      setCopiedClass(text);
      setTimeout(() => setCopiedClass(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Ainda mostra feedback visual mesmo se falhar
      setCopiedClass(text);
      setTimeout(() => setCopiedClass(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Sistema Tipográfico</h1>
          <p className="text-zinc-600 mt-2">
            Documentação completa de tipografia do Tailwind 4 e classes customizadas
          </p>
        </div>
      </header>

      {/* Controls */}
      <div className="container mx-auto px-4 py-6 space-y-4">
        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-1 inline-flex">
          <button
            onClick={() => setActiveTab('sizes')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'sizes'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Tamanhos
          </button>
          <button
            onClick={() => setActiveTab('styles')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'styles'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Estilos
          </button>
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
        </div>

        {/* Sample Text Input */}
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">
            Texto de Exemplo
          </label>
          <input
            type="text"
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            className="w-full max-w-2xl px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900"
            placeholder="Digite um texto de exemplo..."
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'sizes' && (
          <div className="space-y-6">
            {/* Font Sizes */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Tamanhos de Fonte</h2>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(fontSizes).map(([className, config]) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                            {className}
                          </span>
                          {copiedClass === className && (
                            <span className="text-sm text-green-600">Copiado!</span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-500">
                          {config.label} • {config.size} • Line: {config.lineHeight}
                        </p>
                      </div>
                    </div>
                    <p className={className} style={{ lineHeight: config.lineHeight }}>
                      {sampleText}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'styles' && (
          <div className="space-y-6">
            {/* Font Weights */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Pesos de Fonte</h2>
              </div>
              <div className="p-6 space-y-4">
                {Object.entries(fontWeights).map(([className, config]) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          {className}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {config.label} ({config.weight})
                        </span>
                        {copiedClass === className && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                    </div>
                    <p className={`text-lg mt-2 ${className}`}>
                      {sampleText}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Line Heights */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Altura de Linha</h2>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-4">
                {Object.entries(lineHeights).map(([className, config]) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        {className}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {config.label} ({config.value})
                      </span>
                      {copiedClass === className && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <p className={`text-base ${className} bg-zinc-50 p-2 rounded`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Letter Spacing */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Espaçamento entre Letras</h2>
              </div>
              <div className="p-6 space-y-4">
                {Object.entries(letterSpacings).map(([className, config]) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        {className}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {config.label} ({config.value})
                      </span>
                      {copiedClass === className && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <p className={`text-lg ${className}`}>
                      {sampleText}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Text Alignment */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Alinhamento de Texto</h2>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-4">
                {textAlignments.map((className) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        {className}
                      </span>
                      {copiedClass === className && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <p className={`${className} bg-zinc-50 p-3 rounded`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Text Transform */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Transformação de Texto</h2>
              </div>
              <div className="p-6 grid md:grid-cols-2 gap-4">
                {textTransforms.map((className) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="text-left group hover:bg-zinc-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        {className}
                      </span>
                      {copiedClass === className && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <p className={`text-lg ${className}`}>
                      {sampleText}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Font Families */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Famílias de Fonte</h2>
              </div>
              <div className="p-6 space-y-4">
                {Object.entries(fontFamilies).map(([className, label]) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-3 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        {className}
                      </span>
                      <span className="text-xs text-zinc-500">{label}</span>
                      {copiedClass === className && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <p className={`text-lg ${className}`}>
                      {sampleText}
                    </p>
                  </button>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'custom' && (
          <div className="space-y-6">
            {/* Display Typography */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Tipografia Display</h2>
                <p className="text-sm text-zinc-600 mt-1">Classes para títulos e hero sections</p>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(customTypography.display).map(([className, label]) => (
                  <button
                    key={className}
                    onClick={() => copyToClipboard(className)}
                    className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                        {className}
                      </span>
                      <span className="text-sm text-zinc-600">{label}</span>
                      {copiedClass === className && (
                        <span className="text-sm text-green-600">Copiado!</span>
                      )}
                    </div>
                    <p className={className}>
                      {sampleText}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            {/* Content Typography */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Tipografia de Conteúdo</h2>
                <p className="text-sm text-zinc-600 mt-1">Classes para textos e conteúdo</p>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(customTypography.content).map(([className, label]) => {
                  let example;
                  
                  switch(className) {
                    case 'lead':
                      example = (
                        <p className="lead">
                          Este é um texto de introdução com a classe .lead, usado para destacar 
                          parágrafos importantes no início de artigos ou seções.
                        </p>
                      );
                      break;
                    case 'prose':
                      example = (
                        <div className="prose">
                          <p>Container otimizado para leitura com largura máxima de 65ch.</p>
                          <p>Os parágrafos têm espaçamento automático e a tipografia é otimizada para leitura longa.</p>
                        </div>
                      );
                      break;
                    case 'blockquote':
                      example = (
                        <blockquote className="blockquote">
                          &ldquo;Esta é uma citação estilizada com a classe .blockquote&rdquo;
                          <cite className="blockquote-cite">Autor da Citação</cite>
                        </blockquote>
                      );
                      break;
                    case 'code-inline':
                      example = (
                        <p>
                          Texto com <code className="code-inline">código inline</code> estilizado.
                        </p>
                      );
                      break;
                    case 'drop-cap':
                      example = (
                        <p className="drop-cap">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          A primeira letra é destacada com drop cap.
                        </p>
                      );
                      break;
                    case 'small-caps':
                      example = (
                        <p className="small-caps">
                          Texto em Small Caps para Estilização Especial
                        </p>
                      );
                      break;
                    default:
                      example = <p className={className}>{sampleText}</p>;
                  }
                  
                  return (
                    <button
                      key={className}
                      onClick={() => copyToClipboard(className)}
                      className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          {className}
                        </span>
                        <span className="text-sm text-zinc-600">{label}</span>
                        {copiedClass === className && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                      <div className="bg-zinc-50 p-4 rounded">
                        {example}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Typography Utilities */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Utilitários Tipográficos</h2>
                <p className="text-sm text-zinc-600 mt-1">Classes especiais para efeitos de texto</p>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(customTypography.utilities).map(([className, label]) => {
                  let example;
                  
                  switch(className) {
                    case 'text-gradient':
                      example = (
                        <p className="text-2xl font-bold">
                          <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">
                            Texto com Gradiente
                          </span>
                        </p>
                      );
                      break;
                    case 'text-balance':
                      example = (
                        <p className="text-balance max-w-md">
                          Este texto usa text-balance para melhorar a distribuição das palavras nas linhas.
                        </p>
                      );
                      break;
                    case 'text-pretty':
                      example = (
                        <p className="text-pretty max-w-md">
                          Este texto usa text-pretty para evitar palavras órfãs no final dos parágrafos.
                        </p>
                      );
                      break;
                    case 'tabular-nums':
                      example = (
                        <div className="tabular-nums">
                          <p>123,456.78</p>
                          <p>987,654.32</p>
                          <p>456,789.10</p>
                        </div>
                      );
                      break;
                    case 'line-clamp-1':
                    case 'line-clamp-2':
                    case 'line-clamp-3':
                      const lines = className.split('-')[2];
                      example = (
                        <p className={`${className} max-w-md`}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                          (Truncado em {lines} linha{lines !== '1' ? 's' : ''})
                        </p>
                      );
                      break;
                    default:
                      example = <p className={className}>{sampleText}</p>;
                  }
                  
                  return (
                    <button
                      key={className}
                      onClick={() => copyToClipboard(className)}
                      className="w-full text-left group hover:bg-zinc-50 rounded-lg p-4 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-sm bg-zinc-100 px-2 py-1 rounded">
                          {className}
                        </span>
                        <span className="text-sm text-zinc-600">{label}</span>
                        {copiedClass === className && (
                          <span className="text-sm text-green-600">Copiado!</span>
                        )}
                      </div>
                      <div className="bg-zinc-50 p-4 rounded">
                        {example}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}