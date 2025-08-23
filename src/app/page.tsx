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
        
        <div className="flex gap-4">
          <Button size="lg">Ver Projetos</Button>
          <Button variant="outline" size="lg">Contato</Button>
        </div>
      </section>

      {/* Cards Section */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8">Projetos Recentes</h2>
        
        <div className="grid-auto-fit">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card hover:shadow-lg transition-shadow">
              <div className="skeleton h-48 rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">Projeto {i}</h3>
              <p className="text-gray-700 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="secondary" size="sm" className="mt-4">
                Ver mais
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <div className="card bg-gradient-to-r from-blue-50 to-purple-50 text-center">
          <h2 className="text-2xl font-bold mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades de colaboração.
          </p>
          <Button size="lg">Entrar em Contato</Button>
        </div>
      </section>
    </main>
  );
}