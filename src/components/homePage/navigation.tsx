'use client';

import { useEffect, useState } from 'react';

interface NavigationProps {
  sections: string[];
}

export default function Navigation({ sections }: NavigationProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(scrollPosition / windowHeight);
      
      // Atualiza a seção ativa
      setActiveSection(Math.min(currentSection, sections.length - 1));
      
      // Isso melhora a performance e reduz distrações visuais
      const scrollDelta = Math.abs(scrollPosition - lastScrollY);
      
      if (scrollDelta > 50) {
        setIsVisible(false);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => setIsVisible(true), 150);
      }
      
      lastScrollY = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`navigation ${!isVisible ? 'navigation-hidden' : ''}`}
      role="navigation"
      aria-label="Navegação por seções"
    >
      {sections.map((section, index) => (
        <button
          key={section}
          className={`nav-dot nav-dot-${index} ${index === activeSection ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          aria-label={`Ir para seção ${section}`}
          aria-current={index === activeSection ? 'true' : 'false'}
          title={section}
        />
      ))}
    </nav>
  );
}