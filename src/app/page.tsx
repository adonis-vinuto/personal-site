'use client';

import { Button } from '@/components/button';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container py-20">
        <h1 className="text-5xl font-bold mb-4">
          Olá, sou <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600">Adonis Vinuto</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          Desenvolvedor apaixonado por criar experiências digitais incríveis.
        </p>
        
        <div className="flex gap-4 flex-wrap">
          <Button size="lg">Ver Projetos</Button>
          <Button variant="outline" size="lg">Contato</Button>
          <a href="/docs" className="inline-flex items-center gap-2 px-6 h-12 text-base font-medium text-zinc-700 hover:text-zinc-900 transition-colors">
            📚 Ver Documentação CSS
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}