'use client';

import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ui/theme-toggle';

interface TopMenuProps {
  sections: string[];
}

export default function TopMenu({ sections }: TopMenuProps) {
  const [activeSection, setActiveSection] = useState(0);

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
    <nav 
      className="menu-with-side-patterns"
      data-active-section={sections[activeSection]?.toLowerCase()}
    >
      <div className="menu-container">
        {/* 
          Em telas grandes: mostra os botões de navegação
          Em telas pequenas: mostra apenas o nome da seção atual
        */}
        
        {/* Navegação Desktop - Botões centralizados */}
        <div className="menu-navigation-desktop">
          <div className="nav-menu">
            {sections.map((section, index) => (
              <button
                key={section}
                className={`nav-button ${index === activeSection ? 'active' : ''}`}
                onClick={() => scrollToSection(index)}
                aria-label={`Ir para seção ${section}`}
                aria-current={index === activeSection ? 'page' : undefined}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* 
          Indicador Mobile - Nome da Seção Atual
          Este elemento só aparece em telas pequenas
          Ele mostra onde o usuário está, como uma placa de sinalização
        */}
        <div className="menu-section-indicator">
          <span className="section-indicator-label">
            {sections[activeSection]}
          </span>
        </div>

        {/* Theme Toggle - Sempre visível à direita */}
        <div className="menu-actions">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}