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

      <Section id="bio" className="gradient-bio">
        <Bio />
      </Section>

      <Section id="projetos" className="gradient-projetos">
        <Projetos />
      </Section>

      <Section id="carreira" className="gradient-carreira">
        <Carreira />
      </Section>

      <Section id="hobbys" className="gradient-hobbys">
        <Hobbys />
      </Section>

      <Section id="blog" className="gradient-blog">
        <Blog />
      </Section>

      <Section id="contato" className="gradient-contato">
        <Contato />
      </Section>
    </main>
  );
}