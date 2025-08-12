'use client';

import { useState } from 'react';

export default function TypographyPage() {
  const [activeSection, setActiveSection] = useState('hierarchy');

  const sections = [
    { id: 'hierarchy', label: 'Hierarquia', icon: '📏' },
    { id: 'fonts', label: 'Famílias de Fontes', icon: '🔤' },
    { id: 'scales', label: 'Escalas e Tamanhos', icon: '📐' },
    { id: 'examples', label: 'Exemplos Práticos', icon: '💡' },
  ];

  return (
    <div className="container-responsive">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="title-h1">Sistema Tipográfico Completo</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Demonstração completa do sistema tipográfico estruturado com hierarquias, 
          famílias de fontes, escalas responsivas e exemplos práticos de uso.
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
        {activeSection === 'hierarchy' && <HierarchySection />}
        {activeSection === 'fonts' && <FontsSection />}
        {activeSection === 'scales' && <ScalesSection />}
        {activeSection === 'examples' && <ExamplesSection />}
      </div>
    </div>
  );
}

// Seção de Hierarquia
function HierarchySection() {
  const typographyHierarchy = [
    {
      name: 'Hero Title',
      description: 'Máximo impacto visual para landing pages',
      usage: 'Títulos principais de páginas de destino',
      cssClass: 'hero-title',
      style: {
        fontFamily: 'var(--font-hero)',
        fontSize: 'var(--size-hero)',
        fontWeight: 'var(--weight-hero)',
        lineHeight: 'var(--line-height-hero)',
        letterSpacing: 'var(--letter-spacing-hero)',
      }
    },
    {
      name: 'H1',
      description: 'Títulos principais de seção',
      usage: 'Títulos de seções principais, páginas internas',
      cssClass: 'title-h1',
      style: {
        fontFamily: 'var(--font-h1)',
        fontSize: 'var(--size-h1)',
        fontWeight: 'var(--weight-h1)',
        lineHeight: 'var(--line-height-h1)',
        letterSpacing: 'var(--letter-spacing-h1)',
      }
    },
    {
      name: 'H2',
      description: 'Subtítulos importantes',
      usage: 'Subtítulos de seções, divisões de conteúdo',
      cssClass: 'title-h2',
      style: {
        fontFamily: 'var(--font-h2)',
        fontSize: 'var(--size-h2)',
        fontWeight: 'var(--weight-h2)',
        lineHeight: 'var(--line-height-h2)',
        letterSpacing: 'var(--letter-spacing-h2)',
      }
    },
    {
      name: 'H3',
      description: 'Subtítulos de conteúdo',
      usage: 'Títulos de artigos, cards, componentes',
      cssClass: 'title-h3',
      style: {
        fontFamily: 'var(--font-h3)',
        fontSize: 'var(--size-h3)',
        fontWeight: 'var(--weight-h3)',
        lineHeight: 'var(--line-height-h3)',
        letterSpacing: 'var(--letter-spacing-h3)',
      }
    },
    {
      name: 'H4',
      description: 'Subtítulos menores',
      usage: 'Títulos de subsecções, elementos menores',
      cssClass: 'title-h4',
      style: {
        fontFamily: 'var(--font-h4)',
        fontSize: 'var(--size-h4)',
        fontWeight: 'var(--weight-h4)',
        lineHeight: 'var(--line-height-h4)',
        letterSpacing: 'var(--letter-spacing-h4)',
      }
    },
    {
      name: 'Body Large',
      description: 'Texto de destaque e introduções',
      usage: 'Parágrafos de abertura, texto destacado',
      cssClass: 'text-body-large',
      style: {
        fontFamily: 'var(--font-body-large)',
        fontSize: 'var(--size-body-large)',
        fontWeight: 'var(--weight-body-large)',
        lineHeight: 'var(--line-height-body-large)',
        letterSpacing: 'var(--letter-spacing-body-large)',
      }
    },
    {
      name: 'Body Regular',
      description: 'Texto padrão do sistema',
      usage: 'Parágrafos, conteúdo principal',
      cssClass: 'text-body',
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--size-body)',
        fontWeight: 'var(--weight-body)',
        lineHeight: 'var(--line-height-body)',
        letterSpacing: 'var(--letter-spacing-body)',
      }
    },
    {
      name: 'Body Small',
      description: 'Textos auxiliares e metadados',
      usage: 'Legendas, datas, informações secundárias',
      cssClass: 'text-body-small',
      style: {
        fontFamily: 'var(--font-body-small)',
        fontSize: 'var(--size-body-small)',
        fontWeight: 'var(--weight-body-small)',
        lineHeight: 'var(--line-height-body-small)',
        letterSpacing: 'var(--letter-spacing-body-small)',
      }
    },
    {
      name: 'Caption',
      description: 'Legendas e metadados',
      usage: 'Legendas de imagens, metadados, labels',
      cssClass: 'text-caption',
      style: {
        fontFamily: 'var(--font-caption)',
        fontSize: 'var(--size-caption)',
        fontWeight: 'var(--weight-caption)',
        lineHeight: 'var(--line-height-caption)',
        letterSpacing: 'var(--letter-spacing-caption)',
        textTransform: 'var(--text-transform-caption)' as any,
      }
    }
  ];

  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📏 Hierarquia Tipográfica</h2>
        <p className="text-gray-600 mb-6">
          Sistema estruturado de hierarquia tipográfica com 9 níveis, do hero title ao caption.
          Cada nível tem propósito específico e propriedades otimizadas.
        </p>

        <div className="space-y-6">
          {typographyHierarchy.map((item, index) => (
            <TypographyCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Demonstração de Hierarquia */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">💡 Demonstração de Hierarquia</h3>
        <div className="space-y-4">
          <div style={typographyHierarchy[0].style}>
            Hero Title - Máximo Impacto Visual
          </div>
          <div style={typographyHierarchy[1].style}>
            H1 - Título Principal da Seção
          </div>
          <div style={typographyHierarchy[2].style}>
            H2 - Subtítulo Importante
          </div>
          <div style={typographyHierarchy[3].style}>
            H3 - Subtítulo de Conteúdo
          </div>
          <div style={typographyHierarchy[4].style}>
            H4 - Subtítulo Menor
          </div>
          <div style={typographyHierarchy[5].style}>
            Body Large - Texto de destaque para introduções e parágrafos importantes que precisam de maior visibilidade.
          </div>
          <div style={typographyHierarchy[6].style}>
            Body Regular - Texto padrão para o conteúdo principal. Este é o texto que será mais lido pelos usuários, por isso tem line-height otimizada para conforto de leitura em parágrafos longos.
          </div>
          <div style={typographyHierarchy[7].style}>
            Body Small - Texto auxiliar para informações secundárias, datas e metadados.
          </div>
          <div style={typographyHierarchy[8].style}>
            Caption - Legendas e labels
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção de Famílias de Fontes
function FontsSection() {
  const fontFamilies = [
    {
      name: 'Primary (Inter)',
      variable: '--font-primary',
      description: 'Fonte principal do sistema para textos e interface',
      usage: 'Títulos H1-H4, body text, botões, interface',
      characteristics: 'Legibilidade excepcional, neutro, moderno',
      fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    },
    {
      name: 'Display (Playfair Display)',
      variable: '--font-display',
      description: 'Fonte decorativa para títulos de impacto',
      usage: 'Hero titles, títulos especiais, elementos decorativos',
      characteristics: 'Elegante, serif, alto contraste, impacto visual',
      fallback: '"Times New Roman", serif'
    },
    {
      name: 'Mono (JetBrains Mono)',
      variable: '--font-mono',
      description: 'Fonte monoespaçada para código e dados',
      usage: 'Código, dados técnicos, números, timestamps',
      characteristics: 'Monoespaçada, legibilidade em código, técnica',
      fallback: '"Fira Code", "Courier New", monospace'
    }
  ];

  const specialUseCases = [
    {
      name: 'Hero',
      variable: '--font-hero',
      description: 'Alias para font-display, usado em hero titles',
      actualFont: 'Playfair Display'
    },
    {
      name: 'Button',
      variable: '--font-button',
      description: 'Alias para font-primary, usado em botões',
      actualFont: 'Inter'
    },
    {
      name: 'Code',
      variable: '--font-code',
      description: 'Alias para font-mono, usado em código',
      actualFont: 'JetBrains Mono'
    },
    {
      name: 'Caption',
      variable: '--font-caption',
      description: 'Alias para font-primary, usado em legendas',
      actualFont: 'Inter'
    }
  ];

  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">🔤 Famílias de Fontes</h2>
        <p className="text-gray-600 mb-6">
          Sistema de três famílias de fontes principais com fallbacks robustos e aliases semânticos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {fontFamilies.map((font) => (
            <FontFamilyCard key={font.name} font={font} />
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4 text-gray-700">Aliases Semânticos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {specialUseCases.map((useCase) => (
            <div key={useCase.name} className="bg-white p-4 rounded border">
              <h4 className="font-medium text-gray-800 mb-2">{useCase.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{useCase.description}</p>
              <p className="text-xs text-gray-500">→ {useCase.actualFont}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Demonstração de Fontes */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">💡 Demonstração das Fontes</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-2">Inter (Primary)</h4>
            <div style={{ fontFamily: 'var(--font-primary)' }} className="space-y-2">
              <p className="text-2xl font-bold">The quick brown fox jumps over the lazy dog</p>
              <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-lg">0123456789 !@#$%^&*()</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Playfair Display (Display)</h4>
            <div style={{ fontFamily: 'var(--font-display)' }} className="space-y-2">
              <p className="text-2xl font-bold">The quick brown fox jumps over the lazy dog</p>
              <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-lg">0123456789 !@#$%^&*()</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">JetBrains Mono (Mono)</h4>
            <div style={{ fontFamily: 'var(--font-mono)' }} className="space-y-2">
              <p className="text-2xl font-bold">The quick brown fox jumps over the lazy dog</p>
              <p className="text-lg">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p className="text-lg">abcdefghijklmnopqrstuvwxyz</p>
              <p className="text-lg">0123456789 !@#$%^&*()</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção de Escalas e Tamanhos
function ScalesSection() {
  const sizeTokens = [
    { name: 'size-hero', value: 'clamp(2.5rem, 5vw, 4rem)', description: '40px → 64px responsivo' },
    { name: 'size-h1', value: 'clamp(2rem, 4vw, 3rem)', description: '32px → 48px responsivo' },
    { name: 'size-h2', value: 'clamp(1.5rem, 3vw, 2.25rem)', description: '24px → 36px responsivo' },
    { name: 'size-h3', value: 'clamp(1.25rem, 2.5vw, 1.75rem)', description: '20px → 28px responsivo' },
    { name: 'size-h4', value: 'clamp(1.125rem, 2vw, 1.5rem)', description: '18px → 24px responsivo' },
    { name: 'size-body-large', value: 'clamp(1.125rem, 2vw, 1.25rem)', description: '18px → 20px responsivo' },
    { name: 'size-body', value: 'clamp(0.875rem, 1.5vw, 1rem)', description: '14px → 16px responsivo' },
    { name: 'size-body-small', value: 'clamp(0.75rem, 1.2vw, 0.875rem)', description: '12px → 14px responsivo' },
    { name: 'size-caption', value: '0.75rem', description: '12px fixo' },
    { name: 'size-code', value: '0.875rem', description: '14px fixo' },
    { name: 'size-button', value: '0.875rem', description: '14px fixo' },
  ];

  const weightTokens = [
    { name: 'weight-hero', value: '700', description: 'Bold para máximo impacto' },
    { name: 'weight-h1', value: '700', description: 'Bold para hierarquia clara' },
    { name: 'weight-h2', value: '600', description: 'Semibold para destaque sem ser pesado' },
    { name: 'weight-h3', value: '500', description: 'Medium weight para equilíbrio' },
    { name: 'weight-h4', value: '500', description: 'Medium weight consistente' },
    { name: 'weight-body-large', value: '400', description: 'Regular para conforto de leitura' },
    { name: 'weight-body', value: '400', description: 'Regular weight padrão' },
    { name: 'weight-body-small', value: '400', description: 'Regular para consistency' },
    { name: 'weight-caption', value: '500', description: 'Medium para destaque visual' },
    { name: 'weight-code', value: '400', description: 'Regular para código' },
    { name: 'weight-button', value: '500', description: 'Medium para clareza de ação' },
  ];

  const lineHeightTokens = [
    { name: 'line-height-hero', value: '1.1', description: 'Compacto para impacto visual' },
    { name: 'line-height-h1', value: '1.2', description: 'Equilibrado para legibilidade' },
    { name: 'line-height-h2', value: '1.3', description: 'Confortável para leitura' },
    { name: 'line-height-h3', value: '1.4', description: 'Ótimo para legibilidade' },
    { name: 'line-height-h4', value: '1.4', description: 'Consistente com H3' },
    { name: 'line-height-body-large', value: '1.6', description: 'Confortável para textos longos' },
    { name: 'line-height-body', value: '1.7', description: 'Excelente para parágrafos longos' },
    { name: 'line-height-body-small', value: '1.5', description: 'Compacto mas legível' },
    { name: 'line-height-caption', value: '1.4', description: 'Equilibrado para pequenos textos' },
    { name: 'line-height-code', value: '1.6', description: 'Espaçado para leitura de código' },
    { name: 'line-height-button', value: '1', description: 'Compacto para elementos de interface' },
  ];

  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">📐 Escalas e Tamanhos</h2>
        <p className="text-gray-600 mb-6">
          Sistema responsivo de tamanhos, pesos e espaçamentos otimizado para diferentes dispositivos.
        </p>

        {/* Tamanhos */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Tamanhos (Font Size)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sizeTokens.map((token) => (
              <TokenCard key={token.name} token={token} />
            ))}
          </div>
        </div>

        {/* Pesos */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Pesos (Font Weight)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weightTokens.map((token) => (
              <TokenCard key={token.name} token={token} />
            ))}
          </div>
        </div>

        {/* Line Heights */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Alturas de Linha (Line Height)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lineHeightTokens.map((token) => (
              <TokenCard key={token.name} token={token} />
            ))}
          </div>
        </div>
      </div>

      {/* Demonstração Responsiva */}
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4">💡 Demonstração Responsiva</h3>
        <p className="text-gray-600 mb-6">
          Redimensione a janela para ver como os tamanhos se adaptam responsivamente.
        </p>
        
        <div className="space-y-4">
          <div style={{ fontSize: 'var(--size-hero)' }} className="font-bold">
            Hero Title - Responsivo
          </div>
          <div style={{ fontSize: 'var(--size-h1)' }} className="font-bold">
            H1 Title - Responsivo
          </div>
          <div style={{ fontSize: 'var(--size-h2)' }} className="font-semibold">
            H2 Subtitle - Responsivo
          </div>
          <div style={{ fontSize: 'var(--size-body-large)' }}>
            Body Large - Texto responsivo para introduções e destaques.
          </div>
          <div style={{ fontSize: 'var(--size-body)' }}>
            Body Regular - Texto responsivo para conteúdo principal.
          </div>
        </div>
      </div>
    </section>
  );
}

// Seção de Exemplos Práticos
function ExamplesSection() {
  return (
    <section className="space-y-8">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">💡 Exemplos Práticos</h2>
        <p className="text-gray-600 mb-6">
          Demonstrações práticas de como usar o sistema tipográfico em diferentes contextos.
        </p>

        {/* Exemplo de Artigo */}
        <div className="bg-white p-8 rounded-lg border mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">📄 Exemplo de Artigo</h3>
          
          <article className="space-y-6">
            <header>
              <div style={{ 
                fontFamily: 'var(--font-caption)',
                fontSize: 'var(--size-caption)',
                fontWeight: 'var(--weight-caption)',
                letterSpacing: 'var(--letter-spacing-caption)',
                textTransform: 'uppercase'
              }} className="text-gray-500 mb-2">
                Publicado em 12 de Agosto, 2025
              </div>
              
              <h1 style={{
                fontFamily: 'var(--font-h1)',
                fontSize: 'var(--size-h1)',
                fontWeight: 'var(--weight-h1)',
                lineHeight: 'var(--line-height-h1)',
                letterSpacing: 'var(--letter-spacing-h1)',
              }} className="mb-4">
                Como Implementar um Sistema Tipográfico Eficiente
              </h1>
              
              <p style={{
                fontFamily: 'var(--font-body-large)',
                fontSize: 'var(--size-body-large)',
                fontWeight: 'var(--weight-body-large)',
                lineHeight: 'var(--line-height-body-large)',
              }} className="text-gray-600">
                Um sistema tipográfico bem estruturado é fundamental para criar interfaces 
                consistentes e experiências de leitura agradáveis.
              </p>
            </header>

            <section>
              <h2 style={{
                fontFamily: 'var(--font-h2)',
                fontSize: 'var(--size-h2)',
                fontWeight: 'var(--weight-h2)',
                lineHeight: 'var(--line-height-h2)',
                letterSpacing: 'var(--letter-spacing-h2)',
              }} className="mb-4">
                Hierarquia Visual
              </h2>
              
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--size-body)',
                fontWeight: 'var(--weight-body)',
                lineHeight: 'var(--line-height-body)',
              }} className="mb-4">
                A hierarquia visual é criada através da combinação de tamanho, peso e espaçamento. 
                Cada nível tem um propósito específico e deve ser usado consistentemente.
              </p>

              <h3 style={{
                fontFamily: 'var(--font-h3)',
                fontSize: 'var(--size-h3)',
                fontWeight: 'var(--weight-h3)',
                lineHeight: 'var(--line-height-h3)',
                letterSpacing: 'var(--letter-spacing-h3)',
              }} className="mb-3">
                Implementação Prática
              </h3>
              
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--size-body)',
                fontWeight: 'var(--weight-body)',
                lineHeight: 'var(--line-height-body)',
              }} className="mb-4">
                Para implementar o sistema, use as variáveis CSS definidas ou as classes 
                pré-configuradas. Isso garante consistência e facilita manutenção.
              </p>

              <div className="bg-gray-100 p-4 rounded">
                <code style={{
                  fontFamily: 'var(--font-code)',
                  fontSize: 'var(--size-code)',
                  lineHeight: 'var(--line-height-code)',
                }} className="block">
                  {`/* Usando variáveis CSS */
h1 {
  font-family: var(--font-h1);
  font-size: var(--size-h1);
  font-weight: var(--weight-h1);
  line-height: var(--line-height-h1);
}

/* Ou usando classe pré-definida */
<h1 className="title-h1">Título</h1>`}
                </code>
              </div>
            </section>

            <footer>
              <p style={{
                fontFamily: 'var(--font-body-small)',
                fontSize: 'var(--size-body-small)',
                fontWeight: 'var(--weight-body-small)',
                lineHeight: 'var(--line-height-body-small)',
              }} className="text-gray-500">
                Este artigo demonstra o uso prático do sistema tipográfico em um contexto real.
              </p>
            </footer>
          </article>
        </div>

        {/* Exemplo de Card */}
        <div className="bg-white p-8 rounded-lg border mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">🃏 Exemplo de Card</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div style={{
              fontFamily: 'var(--font-caption)',
              fontSize: 'var(--size-caption)',
              fontWeight: 'var(--weight-caption)',
              letterSpacing: 'var(--letter-spacing-caption)',
              textTransform: 'uppercase'
            }} className="text-gray-500 mb-2">
              Projeto
            </div>
            
            <h3 style={{
              fontFamily: 'var(--font-h3)',
              fontSize: 'var(--size-h3)',
              fontWeight: 'var(--weight-h3)',
              lineHeight: 'var(--line-height-h3)',
            }} className="mb-3">
              Sistema de Design
            </h3>
            
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--size-body)',
              fontWeight: 'var(--weight-body)',
              lineHeight: 'var(--line-height-body)',
            }} className="text-gray-600 mb-4">
              Desenvolvimento de um sistema tipográfico completo com tokens, 
              hierarquias e componentes reutilizáveis.
            </p>
            
            <button style={{
              fontFamily: 'var(--font-button)',
              fontSize: 'var(--size-button)',
              fontWeight: 'var(--weight-button)',
              lineHeight: 'var(--line-height-button)',
              letterSpacing: 'var(--letter-spacing-button)',
            }} className="bg-gray-800 text-white px-4 py-2 rounded">
              Ver Projeto
            </button>
          </div>
        </div>

        {/* Exemplo de Interface */}
        <div className="bg-white p-8 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">🖥️ Exemplo de Interface</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg border">
            <div style={{
              fontFamily: 'var(--font-hero)',
              fontSize: 'var(--size-hero)',
              fontWeight: 'var(--weight-hero)',
              lineHeight: 'var(--line-height-hero)',
              letterSpacing: 'var(--letter-spacing-hero)',
            }} className="text-center mb-6">
              Bem-vindo
            </div>
            
            <div style={{
              fontFamily: 'var(--font-body-large)',
              fontSize: 'var(--size-body-large)',
              fontWeight: 'var(--weight-body-large)',
              lineHeight: 'var(--line-height-body-large)',
            }} className="text-center text-gray-600 mb-8">
              Explore nosso sistema tipográfico completo e descubra como criar 
              interfaces consistentes e legíveis.
            </div>
            
            <div className="flex justify-center gap-4">
              <button style={{
                fontFamily: 'var(--font-button)',
                fontSize: 'var(--size-button)',
                fontWeight: 'var(--weight-button)',
                lineHeight: 'var(--line-height-button)',
                letterSpacing: 'var(--letter-spacing-button)',
              }} className="bg-gray-800 text-white px-6 py-3 rounded">
                Começar Agora
              </button>
              
              <button style={{
                fontFamily: 'var(--font-button)',
                fontSize: 'var(--size-button)',
                fontWeight: 'var(--weight-button)',
                lineHeight: 'var(--line-height-button)',
                letterSpacing: 'var(--letter-spacing-button)',
              }} className="border border-gray-300 text-gray-700 px-6 py-3 rounded">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente para cards de tipografia
function TypographyCard({ item, index }: { item: any; index: number }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getStatusColor = (index: number) => {
    if (index === 1) return 'bg-green-100 border-green-200 text-green-800'; // H1 em uso
    return 'bg-yellow-100 border-yellow-200 text-yellow-800'; // Disponível
  };

  const getStatusText = (index: number) => {
    if (index === 1) return '✅ EM USO';
    return '💡 DISPONÍVEL';
  };

  return (
    <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 border-b bg-gray-50">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <span className={`px-2 py-1 rounded text-xs font-medium border ${getStatusColor(index)}`}>
            {getStatusText(index)}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <p className="text-xs text-gray-500">{item.usage}</p>
      </div>
      
      <div className="p-4">
        <div style={item.style} className="mb-4">
          The quick brown fox jumps over the lazy dog
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => copyToClipboard(`.${item.cssClass}`)}
            className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
            title="Copiar classe CSS"
          >
            Classe
          </button>
          <button
            onClick={() => copyToClipboard(`font-size: var(--size-${item.name.toLowerCase().replace(' ', '-')})`)}
            className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
            title="Copiar variável CSS"
          >
            Variável
          </button>
        </div>
      </div>
    </div>
  );
}

// Componente para famílias de fontes
function FontFamilyCard({ font }: { font: any }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-4 border-b bg-gray-50">
        <h4 className="font-semibold text-gray-800 mb-2">{font.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{font.description}</p>
        <p className="text-xs text-gray-500">{font.characteristics}</p>
      </div>
      
      <div className="p-4">
        <div style={{ fontFamily: `var(${font.variable})` }} className="text-lg mb-4">
          The quick brown fox jumps over the lazy dog
        </div>
        
        <div className="space-y-2 text-xs">
          <div>
            <strong>Uso:</strong> {font.usage}
          </div>
          <div>
            <strong>Fallback:</strong> {font.fallback}
          </div>
        </div>
        
        <button
          onClick={() => copyToClipboard(`var(${font.variable})`)}
          className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors mt-3"
          title="Copiar variável CSS"
        >
          Copiar Variável
        </button>
      </div>
    </div>
  );
}

// Componente para tokens
function TokenCard({ token }: { token: any }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-gray-800 text-sm">{token.name}</h4>
        <button
          onClick={() => copyToClipboard(`var(--${token.name})`)}
          className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
          title="Copiar variável CSS"
        >
          CSS
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-1">{token.value}</p>
      <p className="text-xs text-gray-500">{token.description}</p>
    </div>
  );
}