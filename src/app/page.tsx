'use client';

import Navigation from '@/components/homePage/navigation';
import TopMenu from '@/components/homePage/topMenu';
import KeyboardNavigation from '@/components/homePage/keyboardNavigation';
import Section from '@/components/homePage/section';
import Bio from '@/components/sections/bio';
import Projetos from '@/components/sections/projetos';
import Carreira from '@/components/sections/carreira';
import Hobbys from '@/components/sections/hobbys';
import Blog from '@/components/sections/blog';
import Contato from '@/components/sections/contato';

export default function Home() {
  const sections = ['Bio', 'Projetos', 'Carreira', 'Hobbys', 'Blog', 'Contato'];

  return (
    <main className="relative">
      <TopMenu sections={sections} />
      <Navigation sections={sections} />
      <KeyboardNavigation totalSections={sections.length} />

      {/* Bio - Claro para médio */}
      <Section
        id="bio"
        className="bg-gradient-to-br from-ghost-white to-light-gray text-foreground"
      >
        <Bio />
      </Section>

      {/* Projetos - Médio claro */}
      <Section
        id="projetos"
        className="bg-gradient-to-br from-light-gray to-silver text-foreground"
      >
        <Projetos />
      </Section>

      {/* Carreira - Escuro */}
      <Section
        id="carreira"
        className="bg-gradient-to-br from-charcoal to-dark-gray text-white"
      >
        <Carreira />
      </Section>

      {/* Hobbys - Muito claro */}
      <Section
        id="hobbys"
        className="bg-gradient-to-br from-white to-ghost-white text-foreground"
      >
        <Hobbys />
      </Section>

      {/* Blog - Médio escuro */}
      <Section
        id="blog"
        className="bg-gradient-to-br from-dark-gray to-charcoal text-white"
      >
        <Blog />
      </Section>

      {/* Contato - Muito escuro (preparado para footer) */}
      <Section
        id="contato"
        className="bg-gradient-to-br from-near-black to-black text-white footer-section"
      >
        <div className="footer-content">
          <Contato />
        </div>

        {/* Área preparada para footer futuro */}
        <div className="footer-info border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/60">
                © 2024 Adonis Vinuto. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-4 text-sm text-white/60">
                <span>Desenvolvido com ❤️</span>
                <span>•</span>
                <span>Next.js & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}