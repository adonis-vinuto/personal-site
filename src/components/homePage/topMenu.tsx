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
      {/* Container com largura máxima e centralização */}
      <div className="menu-container">
        {/* Logo/Brand (opcional - espaço reservado) */}
        <div className="menu-brand">
          {/* Você pode adicionar um logo aqui no futuro */}
        </div>

        {/* Navegação centralizada */}
        <div className="menu-navigation">
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

        {/* Theme Toggle posicionado à direita */}
        <div className="menu-actions">
          <ThemeToggle />
        </div>

        {/* Menu Mobile */}
        <div className="menu-mobile">
          <MobileMenu 
            sections={sections}
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ 
  sections, 
  activeSection, 
  onNavigate 
}: {
  sections: string[];
  activeSection: number;
  onNavigate: (index: number) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (index: number) => {
    onNavigate(index);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`nav-mobile-toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu de navegação"
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <>
          <div 
            className="nav-mobile-overlay active"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="nav-mobile-menu active">
            {sections.map((section, index) => (
              <button
                key={section}
                className={`nav-mobile-item ${index === activeSection ? 'active' : ''}`}
                onClick={() => handleNavigate(index)}
              >
                {section}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}