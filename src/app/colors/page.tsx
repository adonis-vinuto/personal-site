'use client';

import { useState } from 'react';

export default function ColorsPage() {
  const [activeSection, setActiveSection] = useState('grayscale');

  const sections = [
    { id: 'grayscale', label: 'Escala de Cinzas', icon: '⚫' },
    { id: 'semantic', label: 'Cores Semânticas', icon: '🎯' },
    { id: 'sections', label: 'Cores por Seção', icon: '📑' },
    { id: 'feedback', label: 'Estados de Feedback', icon: '💬' },
  ];

  return (
    <div className="container-responsive">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="title-h1">Sistema de Cores Completo</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Demonstração completa de todas as cores e tokens disponíveis no sistema de design.
          Explore a paleta monocromática, cores semânticas, paletas por seção e estados de feedback.
        </p>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-2 mb-8 border-b">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
              activeSection === section.id
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {section.icon} {section.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="min-h-screen">
        {activeSection === 'grayscale' && <GrayscaleSection />}
        {activeSection === 'semantic' && <SemanticSection />}
        {activeSection === 'sections' && <SectionsSection />}
        {activeSection === 'feedback' && <FeedbackSection />}
      </div>
    </div>
  );
}

// Seção de Escala de Cinzas
function GrayscaleSection() {
  const grayScale = [
    { name: 'gray-0', value: '#ffffff', description: 'Pure White - Ponto de referência máximo' },
    { name: 'gray-1', value: '#fafafa', description: 'Ghost White - Quase imperceptível' },
    { name: 'gray-2', value: '#f5f5f5', description: 'Light Gray - Backgrounds suaves' },
    { name: 'gray-3', value: '#e5e5e5', description: 'Silver - Separadores sutis' },
    { name: 'gray-4', value: '#a0a0a0', description: 'Medium Gray - Textos secundários' },
    { name: 'gray-5', value: '#6b6b6b', description: 'Dark Gray - Textos principais' },
    { name: 'gray-6', value: '#2a2a2a', description: 'Charcoal - Backgrounds escuros' },
    { name: 'gray-7', value: '#1a1a1a', description: 'Near Black - Quase imperceptível' },
    { name: 'gray-8', value: '#000000', description: 'Pure Black - Ponto de referência mínimo' },
  ];

  const expandedScale = [
    { name: 'gray-50', value: '#fafafa', description: 'Alias semântico para gray-1' },
    { name: 'gray-100', value: '#f5f5f5', description: 'Alias semântico para gray-2' },
    { name: 'gray-200', value: '#e5e5e5', description: 'Alias semântico para gray-3' },
    { name: 'gray-300', value: '#d4d4d4', description: 'Graduação intermediária - hover states' },
    { name: 'gray-400', value: '#a3a3a3', description: 'Graduação intermediária - disabled states' },
    { name: 'gray-500', value: '#737373', description: 'Ponto médio verdadeiro (50% entre extremos)' },
    { name: 'gray-600', value: '#525252', description: 'Graduação intermediária - secondary text' },
    { name: 'gray-700', value: '#404040', description: 'Graduação intermediária - dark backgrounds' },
    { name: 'gray-800', value: '#262626', description: 'Graduação intermediária - darker backgrounds' },
    { name: 'gray-900', value: '#171717', description: 'Graduação intermediária - darkest backgrounds' },
  ];

  return (
    <section className="space-y-8">
      {/* Escala Principal */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">⚫ Escala Principal - 9 Níveis Fundamentais</h2>
        <p className="text-gray-600 mb-6">
          Sistema monocromático base com 9 níveis fundamentais, do branco puro ao preto puro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {grayScale.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </div>

      {/* Escala Expandida */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🎨 Escala Expandida - Graduações Intermediárias</h2>
        <p className="text-gray-600 mb-6">
          Graduações intermediárias para transições suaves e estados específicos de interface.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {expandedScale.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </div>

      {/* Demonstração de Uso */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">💡 Demonstração de Uso</h3>
        <div className="space-y-4">
          {/* Backgrounds */}
          <div>
            <h4 className="font-medium mb-2">Hierarquia de Backgrounds</h4>
            <div className="flex flex-wrap gap-2">
              <div style={{ backgroundColor: 'var(--gray-0)' }} className="p-4 border rounded text-center min-w-24">
                <span className="text-xs">gray-0</span>
              </div>
              <div style={{ backgroundColor: 'var(--gray-1)' }} className="p-4 border rounded text-center min-w-24">
                <span className="text-xs">gray-1</span>
              </div>
              <div style={{ backgroundColor: 'var(--gray-2)' }} className="p-4 border rounded text-center min-w-24">
                <span className="text-xs">gray-2</span>
              </div>
              <div style={{ backgroundColor: 'var(--gray-3)' }} className="p-4 border rounded text-center min-w-24">
                <span className="text-xs">gray-3</span>
              </div>
            </div>
          </div>

          {/* Foregrounds */}
          <div>
            <h4 className="font-medium mb-2">Hierarquia de Textos</h4>
            <div className="bg-white p-4 rounded border space-y-2">
              <p style={{ color: 'var(--gray-8)' }} className="font-semibold">
                Texto principal (gray-8) - Máxima legibilidade
              </p>
              <p style={{ color: 'var(--gray-7)' }}>
                Texto secundário (gray-7) - Importante mas não principal
              </p>
              <p style={{ color: 'var(--gray-5)' }}>
                Texto de apoio (gray-5) - Descrições e detalhes
              </p>
              <p style={{ color: 'var(--gray-4)' }}>
                Texto sutil (gray-4) - Informações auxiliares
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção de Cores Semânticas
function SemanticSection() {
  const semanticColors = [
    {
      category: 'Backgrounds Hierárquicos',
      colors: [
        { name: 'background-primary', var: '--background-primary', description: 'Canvas principal da aplicação' },
        { name: 'background-secondary', var: '--background-secondary', description: 'Cards e elementos flutuantes' },
        { name: 'background-tertiary', var: '--background-tertiary', description: 'Separadores e áreas destacadas' },
        { name: 'background-quaternary', var: '--background-quaternary', description: 'Inputs e elementos interativos' },
        { name: 'background-subtle', var: '--background-subtle', description: 'Elementos quase imperceptíveis' },
      ]
    },
    {
      category: 'Foregrounds Hierárquicos',
      colors: [
        { name: 'foreground-primary', var: '--foreground-primary', description: 'Texto principal, máxima legibilidade' },
        { name: 'foreground-secondary', var: '--foreground-secondary', description: 'Texto secundário importante' },
        { name: 'foreground-tertiary', var: '--foreground-tertiary', description: 'Texto de apoio e descrições' },
        { name: 'foreground-quaternary', var: '--foreground-quaternary', description: 'Texto sutil e auxiliar' },
        { name: 'foreground-disabled', var: '--foreground-disabled', description: 'Estados desabilitados' },
      ]
    },
    {
      category: 'Tokens Semânticos',
      colors: [
        { name: 'background', var: '--background', description: 'Background padrão do sistema' },
        { name: 'foreground', var: '--foreground', description: 'Texto padrão do sistema' },
        { name: 'muted', var: '--muted', description: 'Elementos silenciados' },
        { name: 'muted-foreground', var: '--muted-foreground', description: 'Texto silenciado' },
        { name: 'accent', var: '--accent', description: 'Elementos de destaque' },
        { name: 'accent-foreground', var: '--accent-foreground', description: 'Texto em elementos destacados' },
      ]
    },
    {
      category: 'Componentes',
      colors: [
        { name: 'card', var: '--card', description: 'Background de cards' },
        { name: 'card-foreground', var: '--card-foreground', description: 'Texto em cards' },
        { name: 'popover', var: '--popover', description: 'Elementos flutuantes (tooltips, dropdowns)' },
        { name: 'popover-foreground', var: '--popover-foreground', description: 'Texto em elementos flutuantes' },
      ]
    },
    {
      category: 'Interativos',
      colors: [
        { name: 'primary', var: '--primary', description: 'Ações principais (botões CTA)' },
        { name: 'primary-foreground', var: '--primary-foreground', description: 'Texto em ações principais' },
        { name: 'secondary', var: '--secondary', description: 'Ações secundárias' },
        { name: 'secondary-foreground', var: '--secondary-foreground', description: 'Texto em ações secundárias' },
      ]
    },
    {
      category: 'Bordas e Inputs',
      colors: [
        { name: 'border', var: '--border', description: 'Bordas padrão' },
        { name: 'border-subtle', var: '--border-subtle', description: 'Bordas suaves e discretas' },
        { name: 'border-strong', var: '--border-strong', description: 'Bordas de destaque e separação' },
        { name: 'input', var: '--input', description: 'Background de campos de entrada' },
        { name: 'ring', var: '--ring', description: 'Estados de foco e seleção' },
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🎯 Cores Semânticas</h2>
        <p className="text-gray-600 mb-6">
          Sistema inteligente de tokens semânticos que abstraem conceitos funcionais para facilitar o desenvolvimento.
        </p>

        {semanticColors.map((category) => (
          <div key={category.category} className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.colors.map((color) => (
                <SemanticColorCard key={color.name} color={color} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Demonstração de Uso */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">💡 Demonstração Prática</h3>
        <div className="space-y-6">
          {/* Card Example */}
          <div>
            <h4 className="font-medium mb-3">Exemplo de Card</h4>
            <div 
              style={{ 
                backgroundColor: 'var(--card)', 
                color: 'var(--card-foreground)',
                border: '1px solid var(--border)'
              }} 
              className="p-6 rounded-lg"
            >
              <h5 style={{ color: 'var(--foreground-primary)' }} className="font-semibold mb-2">
                Título do Card
              </h5>
              <p style={{ color: 'var(--foreground-tertiary)' }} className="mb-4">
                Descrição usando foreground-tertiary para texto de apoio.
              </p>
              <button 
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)' 
                }}
                className="px-4 py-2 rounded"
              >
                Ação Principal
              </button>
            </div>
          </div>

          {/* Input Example */}
          <div>
            <h4 className="font-medium mb-3">Exemplo de Input</h4>
            <div className="space-y-2">
              <label style={{ color: 'var(--foreground-secondary)' }} className="block text-sm font-medium">
                Campo de Entrada
              </label>
              <input
                type="text"
                placeholder="Digite algo..."
                style={{ 
                  backgroundColor: 'var(--input)', 
                  border: '1px solid var(--border)',
                  color: 'var(--foreground)'
                }}
                className="w-full px-3 py-2 rounded focus:outline-none focus:ring-2"
                onFocus={(e) => e.target.style.borderColor = 'var(--ring)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção de Cores por Seção
function SectionsSection() {
  const sectionPalettes = [
    {
      name: 'Bio',
      description: 'Paleta clara e acolhedora para apresentação pessoal',
      colors: [
        { name: 'bio-ultra-light', var: '--bio-ultra-light', description: 'Background principal' },
        { name: 'bio-light', var: '--bio-light', description: 'Background secundário' },
        { name: 'bio-medium', var: '--bio-medium', description: 'Elementos de destaque' },
        { name: 'bio-dark', var: '--bio-dark', description: 'Texto secundário' },
        { name: 'bio-ultra-dark', var: '--bio-ultra-dark', description: 'Texto principal' },
      ]
    },
    {
      name: 'Projetos',
      description: 'Paleta neutra para destacar trabalhos e projetos',
      colors: [
        { name: 'projetos-ultra-light', var: '--projetos-ultra-light', description: 'Background principal' },
        { name: 'projetos-light', var: '--projetos-light', description: 'Background secundário' },
        { name: 'projetos-medium', var: '--projetos-medium', description: 'Elementos de destaque' },
        { name: 'projetos-dark', var: '--projetos-dark', description: 'Texto secundário' },
        { name: 'projetos-ultra-dark', var: '--projetos-ultra-dark', description: 'Texto principal' },
      ]
    },
    {
      name: 'Carreira',
      description: 'Paleta escura e profissional para experiências',
      colors: [
        { name: 'carreira-ultra-light', var: '--carreira-ultra-light', description: 'Background principal' },
        { name: 'carreira-light', var: '--carreira-light', description: 'Background secundário' },
        { name: 'carreira-medium', var: '--carreira-medium', description: 'Elementos de destaque' },
        { name: 'carreira-dark', var: '--carreira-dark', description: 'Texto secundário' },
        { name: 'carreira-ultra-dark', var: '--carreira-ultra-dark', description: 'Texto principal' },
      ]
    },
    {
      name: 'Hobbys',
      description: 'Paleta clara e descontraída para interesses pessoais',
      colors: [
        { name: 'hobbys-ultra-light', var: '--hobbys-ultra-light', description: 'Background principal' },
        { name: 'hobbys-light', var: '--hobbys-light', description: 'Background secundário' },
        { name: 'hobbys-medium', var: '--hobbys-medium', description: 'Elementos de destaque' },
        { name: 'hobbys-dark', var: '--hobbys-dark', description: 'Texto secundário' },
        { name: 'hobbys-ultra-dark', var: '--hobbys-ultra-dark', description: 'Texto principal' },
      ]
    },
    {
      name: 'Blog',
      description: 'Paleta média para conteúdo e artigos',
      colors: [
        { name: 'blog-ultra-light', var: '--blog-ultra-light', description: 'Background principal' },
        { name: 'blog-light', var: '--blog-light', description: 'Background secundário' },
        { name: 'blog-medium', var: '--blog-medium', description: 'Elementos de destaque' },
        { name: 'blog-dark', var: '--blog-dark', description: 'Texto secundário' },
        { name: 'blog-ultra-dark', var: '--blog-ultra-dark', description: 'Texto principal' },
      ]
    },
    {
      name: 'Contato',
      description: 'Paleta escura e impactante para chamadas de ação',
      colors: [
        { name: 'contato-ultra-light', var: '--contato-ultra-light', description: 'Background principal' },
        { name: 'contato-light', var: '--contato-light', description: 'Background secundário' },
        { name: 'contato-medium', var: '--contato-medium', description: 'Elementos de destaque' },
        { name: 'contato-dark', var: '--contato-dark', description: 'Texto secundário' },
        { name: 'contato-ultra-dark', var: '--contato-ultra-dark', description: 'Texto principal' },
      ]
    }
  ];

  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📑 Paletas por Seção</h2>
        <p className="text-gray-600 mb-6">
          Cada seção do site possui sua própria paleta harmonizada, criando identidade visual única 
          mantendo consistência com o sistema global.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sectionPalettes.map((section) => (
            <SectionPaletteCard key={section.name} section={section} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Seção de Estados de Feedback
function FeedbackSection() {
  const feedbackStates = [
    { 
      name: 'Destructive', 
      var: '--destructive', 
      foregroundVar: '--destructive-foreground',
      description: 'Vermelho para erros e ações destrutivas',
      example: 'Erro ao salvar o arquivo'
    },
    { 
      name: 'Success', 
      var: '--success', 
      foregroundVar: '--success-foreground',
      description: 'Verde para sucessos e confirmações',
      example: 'Dados salvos com sucesso!'
    },
    { 
      name: 'Warning', 
      var: '--warning', 
      foregroundVar: '--warning-foreground',
      description: 'Amarelo para avisos e atenção',
      example: 'Atenção: Verifique os dados'
    },
    { 
      name: 'Info', 
      var: '--info', 
      foregroundVar: '--info-foreground',
      description: 'Azul para informações e dicas',
      example: 'Dica: Use Ctrl+S para salvar'
    }
  ];

  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">💬 Estados de Feedback</h2>
        <p className="text-gray-600 mb-6">
          Cores funcionais para comunicar estados e feedback ao usuário de forma clara e acessível.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {feedbackStates.map((state) => (
            <FeedbackStateCard key={state.name} state={state} />
          ))}
        </div>
      </div>

      {/* Demonstração de Uso */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">💡 Exemplos de Uso</h3>
        <div className="space-y-4">
          {feedbackStates.map((state) => (
            <div
              key={state.name}
              style={{ 
                backgroundColor: `var(${state.var})`, 
                color: `var(${state.foregroundVar})` 
              }}
              className="p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">{state.name}:</span>
                <span>{state.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente para exibir cores individuais
function ColorCard({ color }: { color: { name: string; value: string; description: string } }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const isLight = color.value === '#ffffff' || color.value === '#fafafa' || color.value === '#f5f5f5';

  return (
    <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
      <div 
        style={{ backgroundColor: color.value }}
        className={`h-20 border-b ${isLight ? 'border-gray-200' : ''}`}
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-800">{color.name}</h4>
          <button
            onClick={() => copyToClipboard(`var(--${color.name})`)}
            className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
            title="Copiar variável CSS"
          >
            CSS
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-2">{color.value}</p>
        <p className="text-xs text-gray-500">{color.description}</p>
      </div>
    </div>
  );
}

// Componente para cores semânticas
function SemanticColorCard({ color }: { color: { name: string; var: string; description: string } }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
      <div 
        style={{ backgroundColor: `var(${color.var})` }}
        className="h-16 border-b"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-800 text-sm">{color.name}</h4>
          <button
            onClick={() => copyToClipboard(color.var)}
            className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
            title="Copiar variável CSS"
          >
            CSS
          </button>
        </div>
        <p className="text-xs text-gray-500">{color.description}</p>
      </div>
    </div>
  );
}

// Componente para paletas de seção
function SectionPaletteCard({ section }: { section: any }) {
  return (
    <div className="bg-white rounded-lg border overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-gray-800">{section.name}</h3>
        <p className="text-sm text-gray-600">{section.description}</p>
      </div>
      
      {/* Demonstração da paleta */}
      <div 
        style={{ backgroundColor: `var(${section.colors[0].var})` }}
        className="p-6"
      >
        <div 
          style={{ backgroundColor: `var(${section.colors[1].var})` }}
          className="p-4 rounded-lg"
        >
          <h4 
            style={{ color: `var(${section.colors[4].var})` }}
            className="font-semibold mb-2"
          >
            Seção {section.name}
          </h4>
          <p 
            style={{ color: `var(${section.colors[3].var})` }}
            className="text-sm mb-3"
          >
            Exemplo de texto usando a paleta da seção {section.name.toLowerCase()}.
          </p>
          <div 
            style={{ backgroundColor: `var(${section.colors[2].var})` }}
            className="px-3 py-1 rounded text-xs inline-block"
          >
            Elemento de destaque
          </div>
        </div>
      </div>

      {/* Lista de cores */}
      <div className="p-4">
        <div className="grid grid-cols-5 gap-2">
          {section.colors.map((color: any) => (
            <div key={color.name} className="text-center">
              <div 
                style={{ backgroundColor: `var(${color.var})` }}
                className="h-8 w-full rounded border mb-1"
              />
              <p className="text-xs text-gray-500">{color.name.split('-').pop()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente para estados de feedback
function FeedbackStateCard({ state }: { state: any }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
      <div 
        style={{ backgroundColor: `var(${state.var})` }}
        className="h-16 border-b"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-800">{state.name}</h4>
          <button
            onClick={() => copyToClipboard(state.var)}
            className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
            title="Copiar variável CSS"
          >
            CSS
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-2">{state.description}</p>
        <div 
          style={{ 
            backgroundColor: `var(${state.var})`, 
            color: `var(${state.foregroundVar})` 
          }}
          className="text-xs p-2 rounded"
        >
          {state.example}
        </div>
      </div>
    </div>
  );
}