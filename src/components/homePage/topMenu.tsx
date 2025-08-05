'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">

          {/* Navegação Principal - Centralizada */}
          <div className="flex items-center space-x-1">
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

          {/* Toggle de Tema - Posição Absoluta no Canto Direito */}
          <div className="absolute right-0 flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}