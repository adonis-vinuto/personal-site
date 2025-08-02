'use client';

import { useEffect, useState } from 'react';

interface NavigationProps {
  sections: string[];
}

export default function Navigation({ sections }: NavigationProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(scrollPosition / windowHeight);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navigation">
      {sections.map((section, index) => (
        <button
          key={section}
          className={`nav-dot ${index === activeSection ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          aria-label={`Ir para seção ${section}`}
          title={section}
        />
      ))}
    </nav>
  );
}