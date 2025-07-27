'use client';

import { useEffect } from 'react';

interface KeyboardNavigationProps {
  totalSections: number;
}

export default function KeyboardNavigation({ totalSections }: KeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(currentScrollY / windowHeight);
      
      switch (e.key) {
        case 'ArrowDown':
        case 'j':
          e.preventDefault();
          if (currentSection < totalSections - 1) {
            window.scrollTo({
              top: (currentSection + 1) * windowHeight,
              behavior: 'smooth'
            });
          }
          break;
          
        case 'ArrowUp':
        case 'k':
          e.preventDefault();
          if (currentSection > 0) {
            window.scrollTo({
              top: (currentSection - 1) * windowHeight,
              behavior: 'smooth'
            });
          }
          break;
          
        case 'Home':
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          break;
          
        case 'End':
          e.preventDefault();
          window.scrollTo({
            top: (totalSections - 1) * windowHeight,
            behavior: 'smooth'
          });
          break;
          
        // Navegação direta por números
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          e.preventDefault();
          const sectionIndex = parseInt(e.key) - 1;
          if (sectionIndex < totalSections) {
            window.scrollTo({
              top: sectionIndex * windowHeight,
              behavior: 'smooth'
            });
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [totalSections]);

  return null; // Este componente não renderiza nada visualmente
}

