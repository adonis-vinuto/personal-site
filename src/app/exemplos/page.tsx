'use client';

import { useState } from 'react';

export default function ExamplesPage() {
  const [activeTab, setActiveTab] = useState('typography');

  const tabs = [
    { id: 'typography', label: 'Tipografia', icon: '🔤' },
    { id: 'layout', label: 'Layout', icon: '📐' },
    { id: 'navigation', label: 'Navegação', icon: '🧭' },
    { id: 'hybrid', label: 'Híbrido', icon: '🎨' },
  ];

  return (
    <div className="container-responsive">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="title-h1">Exemplos de Componentes CSS</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Demonstração dos componentes CSS genéricos e Tailwind disponíveis no projeto.
          Testando diretamente no ambiente Next.js.
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className="flex flex-wrap justify-center gap-2 mb-8 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-t-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </nav>

      {/* Content Sections */}
      <div className="min-h-screen">
        {activeTab === 'typography' && <TypographySection />}
        {activeTab === 'layout' && <LayoutSection />}
        {activeTab === 'navigation' && <NavigationSection />}
        {activeTab === 'hybrid' && <HybridSection />}
      </div>
    </div>
  );
}

// Seção de Tipografia
function TypographySection() {
  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🔤 Sistema Tipográfico</h2>
        <p className="text-gray-600 mb-6">
          Testando as classes tipográficas disponíveis no projeto.
        </p>

        {/* Título H1 - Classe em uso */}
        <div className="bg-white p-6 rounded border mb-6">
          <h3 className="text-lg font-semibold mb-3 text-green-700">✅ Em Uso Ativo</h3>
          <h1 className="title-h1">Título H1 Principal</h1>
          <p className="text-sm text-gray-500 mt-2">
            Classe: <code className="bg-gray-200 px-2 py-1 rounded">.title-h1</code>
          </p>
        </div>

        {/* Variáveis CSS disponíveis */}
        <div className="bg-white p-6 rounded border mb-6">
          <h3 className="text-lg font-semibold mb-3 text-yellow-700">⚠️ Disponíveis (Variáveis CSS)</h3>
          <div className="space-y-4">
            <h2 style={{ 
              fontSize: 'var(--size-h2, 1.5rem)', 
              fontWeight: 'var(--weight-h2, 600)',
              lineHeight: 'var(--line-height-h2, 1.3)'
            }}>
              Título H2 (usando variáveis CSS)
            </h2>
            <h3 style={{ 
              fontSize: 'var(--size-h3, 1.25rem)', 
              fontWeight: 'var(--weight-h3, 500)',
              lineHeight: 'var(--line-height-h3, 1.4)'
            }}>
              Título H3 (usando variáveis CSS)
            </h3>
            <p style={{ 
              fontSize: 'var(--size-body-large, 1.125rem)', 
              lineHeight: 'var(--line-height-body-large, 1.6)'
            }}>
              Texto large para introduções e destaques importantes.
            </p>
            <p style={{ 
              fontSize: 'var(--size-body, 1rem)', 
              lineHeight: 'var(--line-height-body, 1.7)'
            }}>
              Texto regular para o corpo principal do conteúdo.
            </p>
            <p style={{ 
              fontSize: 'var(--size-body-small, 0.875rem)', 
              lineHeight: 'var(--line-height-body-small, 1.5)',
              color: 'var(--gray-600, #525252)'
            }}>
              Texto pequeno para metadados e informações auxiliares.
            </p>
          </div>
        </div>

        {/* Comparação com Tailwind */}
        <div className="bg-white p-6 rounded border">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">🎨 Comparação com Tailwind</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">CSS Customizado</h4>
              <h1 className="title-h1 mb-2">Título com CSS Custom</h1>
              <p style={{ fontSize: 'var(--size-body-large)' }}>
                Usando variáveis CSS definidas no projeto.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tailwind CSS</h4>
              <h1 className="text-3xl font-bold mb-2">Título com Tailwind</h1>
              <p className="text-lg">
                Usando classes utilitárias do Tailwind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção de Layout
function LayoutSection() {
  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📐 Sistema de Layout</h2>
        <p className="text-gray-600 mb-6">
          Testando containers e utilitários de layout.
        </p>

        {/* Container Responsivo */}
        <div className="bg-white p-6 rounded border mb-6">
          <h3 className="text-lg font-semibold mb-3 text-green-700">✅ Container Responsivo</h3>
          <div className="container-responsive bg-blue-50 p-4 rounded">
            <h4 className="font-medium mb-2">Exemplo de Container Responsivo</h4>
            <p className="text-gray-600">
              Este container se adapta automaticamente aos diferentes tamanhos de tela.
              Classe: <code className="bg-gray-200 px-2 py-1 rounded">.container-responsive</code>
            </p>
          </div>
        </div>

        {/* Grid com Tailwind */}
        <div className="bg-white p-6 rounded border mb-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">🎨 Grid Responsivo (Tailwind)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-gradient-to-br from-blue-400 to-purple-500 p-4 rounded text-white text-center">
                <h4 className="font-semibold">Grid {num}</h4>
                <p className="text-sm opacity-90">Responsivo</p>
              </div>
            ))}
          </div>
        </div>

        {/* Flexbox */}
        <div className="bg-white p-6 rounded border">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">🎨 Flexbox (Tailwind)</h3>
          <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-gray-100 rounded">
            {['Flex Item 1', 'Flex Item 2', 'Flex Item 3'].map((item, index) => (
              <div key={index} className="bg-white px-4 py-2 rounded shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção de Navegação
function NavigationSection() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['Seção 1', 'Seção 2', 'Seção 3', 'Seção 4'];

  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🧭 Sistema de Navegação</h2>
        <p className="text-gray-600 mb-6">
          Testando o sistema de navegação por pontos que está em uso no projeto.
        </p>

        {/* Navegação por pontos */}
        <div className="bg-white p-6 rounded border mb-6 relative">
          <h3 className="text-lg font-semibold mb-3 text-green-700">✅ Navegação por Pontos</h3>
          
          {/* Simulação da navegação lateral */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`nav-dot w-3 h-3 rounded-full transition-all ${
                  index === currentSection ? 'active bg-gray-700 scale-110' : 'bg-gray-300 hover:bg-gray-500'
                }`}
                title={`Ir para ${sections[index]}`}
              />
            ))}
          </div>

          {/* Conteúdo das seções */}
          <div className="pr-12">
            <h4 className="title-h1 mb-4">{sections[currentSection]}</h4>
            <p className="text-gray-600 mb-4">
              Esta é a {sections[currentSection].toLowerCase()}. O sistema de navegação 
              por pontos permite navegar entre diferentes seções de forma intuitiva.
            </p>
            <div className="bg-gray-100 p-4 rounded">
              <h5 className="font-medium mb-2">Classes CSS em uso:</h5>
              <ul className="text-sm space-y-1">
                <li><code className="bg-gray-200 px-2 py-1 rounded">.nav-dot</code> - Pontos de navegação</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">.active</code> - Estado ativo</li>
                <li><code className="bg-gray-200 px-2 py-1 rounded">.navigation</code> - Container principal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Informações sobre o sistema */}
        <div className="bg-white p-6 rounded border">
          <h3 className="text-lg font-semibold mb-3 text-yellow-700">📊 Estatísticas de Uso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <h4 className="font-semibold text-green-800">Classes Utilizadas</h4>
              <p className="text-2xl font-bold text-green-600">10</p>
              <p className="text-sm text-green-700">de 41 classes</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
              <h4 className="font-semibold text-yellow-800">Taxa de Uso</h4>
              <p className="text-2xl font-bold text-yellow-600">24,4%</p>
              <p className="text-sm text-yellow-700">navigation.css</p>
            </div>
            <div className="bg-red-50 p-4 rounded border border-red-200">
              <h4 className="font-semibold text-red-800">Não Utilizadas</h4>
              <p className="text-2xl font-bold text-red-600">31</p>
              <p className="text-sm text-red-700">classes para limpeza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção Híbrida
function HybridSection() {
  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🎨 Abordagem Híbrida</h2>
        <p className="text-gray-600 mb-6">
          Demonstrando a combinação ideal entre CSS customizado e Tailwind CSS.
        </p>

        {/* Exemplo de card híbrido */}
        <div className="bg-white p-6 rounded border mb-6">
          <h3 className="text-lg font-semibold mb-3 text-blue-700">💡 Card Híbrido Recomendado</h3>
          
          <div className="container-responsive">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-white mb-6">
              <h1 className="title-h1 text-white mb-4">CSS Custom + Tailwind</h1>
              <p className="text-purple-100 text-lg">
                Usando .title-h1 (CSS customizado) com gradiente e spacing do Tailwind.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card com estrutura CSS + styling Tailwind */}
            <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <h3 className="title-h1 text-gray-800 mb-4">Estrutura Híbrida</h3>
              <p className="text-gray-600 mb-4">
                Container responsivo (CSS) + styling Tailwind para cores e efeitos.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors">
                Botão Tailwind
              </button>
            </div>

            {/* Card totalmente Tailwind */}
            <div className="bg-white border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tailwind Puro</h3>
              <p className="text-gray-600 mb-4">
                Usando apenas classes utilitárias do Tailwind CSS.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors">
                Botão Tailwind
              </button>
            </div>
          </div>
        </div>

        {/* Recomendações */}
        <div className="bg-white p-6 rounded border">
          <h3 className="text-lg font-semibold mb-3 text-green-700">✅ Estratégia Recomendada</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">CSS Customizado</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• container-responsive</li>
                <li>• title-h1</li>
                <li>• Sistema de navegação</li>
                <li>• Variáveis CSS (tokens)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">Tailwind CSS</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Botões e formulários</li>
                <li>• Cards e containers</li>
                <li>• Grid e flexbox</li>
                <li>• Cores e spacing</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-2">Híbrido</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Estrutura CSS custom</li>
                <li>• Styling Tailwind</li>
                <li>• Melhor dos dois mundos</li>
                <li>• Máxima flexibilidade</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}