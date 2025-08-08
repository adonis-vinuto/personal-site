'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface TopMenuProps {
  sections: string[];
}

// Patterns de background para cada seção
const sectionPatterns = {
  Bio: {
    backgroundColor: '#DFDBE5',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat'
  },
  Projetos: {
    backgroundColor: '#DFDBE5',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat'
  },
  Carreira: {
    backgroundColor: '#DFDBE5',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat'
  },
  Hobbys: {
    backgroundColor: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 2 2' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='%23333' /%3E%3Crect x='1' y='1' width='1' height='1' fill='%23333' /%3E%3C/svg%3E")`,
    backgroundSize: '40px 40px',
    backgroundRepeat: 'repeat'
  },
  Blog: {
    backgroundColor: '#DFDBE5',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat'
  },
  Contato: {
    backgroundColor: '#DFDBE5',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat'
  },
  // Padrão para seções sem pattern específico
  default: {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat'
  }
};

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

  // Obter pattern da seção ativa
  const getCurrentPattern = () => {
    const currentSectionName = sections[activeSection];
    return sectionPatterns[currentSectionName as keyof typeof sectionPatterns] || sectionPatterns.default;
  };

  const currentPattern = getCurrentPattern();

  return (
    <nav
      className="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-md border-b border-border transition-all duration-500 ease-in-out menu-with-side-patterns"
      style={{
        height: '80px',
        minHeight: '80px',
        maxHeight: '80px',
        backgroundColor: 'var(--background)',
        position: 'relative',
        '--pattern-bg': currentPattern.backgroundColor,
        '--pattern-image': currentPattern.backgroundImage,
        '--pattern-size': currentPattern.backgroundSize,
        '--pattern-repeat': currentPattern.backgroundRepeat
      } as React.CSSProperties}>

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