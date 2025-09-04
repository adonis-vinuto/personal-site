// src/app/docs/page.tsx

import Link from 'next/link';

const documentationPages = [
  {
    title: 'Sistema de Cores',
    description: 'Explore todas as cores do Tailwind 4 e os tokens customizados do projeto',
    href: '/docs/colors',
    icon: '🎨',
    items: [
      'Paleta completa do Tailwind 4',
      'Tokens de cores customizados',
      'Cores semânticas (success, error, warning)',
      'Sistema de backgrounds e bordas'
    ]
  },
  {
    title: 'Sistema Tipográfico',
    description: 'Documentação completa de tipografia, tamanhos, pesos e estilos de texto',
    href: '/docs/typography',
    icon: '📝',
    items: [
      'Escala tipográfica completa',
      'Pesos e estilos de fonte',
      'Classes customizadas (display, hero, prose)',
      'Utilitários de texto especiais'
    ]
  },
  {
    title: 'Sistema de Animações',
    description: 'Animações, transições e efeitos visuais para interfaces dinâmicas',
    href: '/docs/animations',
    icon: '✨',
    items: [
      'Animações de entrada e saída',
      'Estados de loading e skeleton',
      'Efeitos hover e micro-interações',
      'Keyframes customizados e utilities Tailwind'
    ]
  },
  {
    title: 'Sistema de Layout',
    description: 'Sistemas de layout, containers, grids e helpers responsivos',
    href: '/docs/layout',
    icon: '📐',
    items: [
      'Stack patterns (vertical/horizontal)',
      'Grid auto-responsivo',
      'Safe areas para mobile',
      'Containers e seções',
      'Espaçamento fluido responsivo'
    ]
  }
];

export default function DocsIndexPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-zinc-900">Documentação do Sistema de Design</h1>
          <p className="text-lg text-zinc-600 mt-3">
            Guia completo dos componentes CSS e sistema de design do projeto
          </p>
        </div>
      </header>

      {/* Navigation Cards */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {documentationPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden hover:shadow-lg hover:border-zinc-300 transition-all"
            >
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{page.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                      {page.title}
                    </h2>
                    <p className="text-zinc-600 mt-2">
                      {page.description}
                    </p>
                  </div>
                </div>

                {/* Feature List */}
                <div className="mt-6 space-y-2">
                  {page.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-zinc-600">
                      <svg
                        className="w-4 h-4 text-green-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-6 flex items-center text-zinc-900 font-medium">
                  <span>Explorar documentação</span>
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Resources */}
        <section className="mt-16">
          {/* <h2 className="text-2xl font-semibold text-zinc-900 mb-6">Recursos Adicionais</h2> */}
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tailwind Docs */}
            {/* <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔗</span>
                <h3 className="font-semibold text-zinc-900">Tailwind CSS 4</h3>
              </div>
              <p className="text-sm text-zinc-600 mb-4">
                Documentação oficial do Tailwind CSS v4 com todas as classes e configurações.
              </p>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Acessar documentação →
              </a>
            </div> */}

            {/* Project CSS Guide */}
            {/* <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📚</span>
                <h3 className="font-semibold text-zinc-900">Guia de CSS</h3>
              </div>
              <p className="text-sm text-zinc-600 mb-4">
                Arquitetura CSS, padrões de código e boas práticas do projeto.
              </p>
              <Link
                href="/guide-css.md"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Ver guia completo →
              </Link>
            </div> */}

            {/* Component Examples */}
            {/* <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧩</span>
                <h3 className="font-semibold text-zinc-900">Componentes</h3>
              </div>
              <p className="text-sm text-zinc-600 mb-4">
                Exemplos práticos de componentes reutilizáveis do projeto.
              </p>
              <Link
                href="/"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Ver componentes →
              </Link>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}