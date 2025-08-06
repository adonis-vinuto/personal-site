'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface TopMenuProps {
  sections: string[];
}

export default function TopMenu({ sections }: TopMenuProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamanho da tela com JavaScript
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar no carregamento
    checkScreenSize();

    // Adicionar listener para mudanças de tamanho
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(scrollPosition / windowHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      style={{ height: '80px', minHeight: '80px', maxHeight: '80px' }}>

      <div className="w-full px-4 sm:px-6 lg:px-8" style={{ height: '100%' }}>

        {/* Renderização condicional baseada em JavaScript */}
        {!isMobile ? (
          // LAYOUT DESKTOP - Telas grandes
          <div className="relative flex items-center justify-between"
            style={{ height: '80px', minHeight: '80px', maxHeight: '80px' }}>

            {/* Placeholder invisível à esquerda para balancear o layout */}
            <div className="w-1/3" />

            {/* Navegação Principal - Centralizada visualmente */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1">
              {sections.map((section, index) => (
                <Button
                  key={section}
                  variant="ghost"
                  className={`nav-button ${index === activeSection ? 'active' : ''}`}
                  onClick={() => scrollToSection(index)}
                >
                  {section}
                </Button>
              ))}
            </div>

            {/* Toggle de Tema - À direita */}
            <div className="flex items-center justify-end">
              <div style={{ marginRight: '1rem', marginTop: '0.5rem' }}>
                <ThemeToggle />
              </div>
            </div>
          </div>
        ) : (
          // LAYOUT MOBILE - Telas pequenas
          <div className="flex items-center justify-between w-full"
            style={{ height: '80px', minHeight: '80px', maxHeight: '80px' }}>

            {/* Seção ativa atual (apenas indicativa, não clicável) */}
            <div className="flex-1 flex justify-center">
              <div className="text-lg font-semibold text-foreground">
                {sections[activeSection]}
              </div>
            </div>

            {/* ThemeToggle à direita */}
            <div className="flex items-center justify-end">
              <div style={{ marginRight: '1rem' }}>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}