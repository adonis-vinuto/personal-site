'use client';

import { useEffect, useCallback } from 'react';

interface KeyboardNavigationProps {
  totalSections: number;
}

export default function KeyboardNavigation({ totalSections }: KeyboardNavigationProps) {
  // Memoiza a função de navegação para evitar recriações desnecessárias
  const navigateToSection = useCallback((sectionIndex: number) => {
    // Valida o índice da seção
    if (sectionIndex < 0 || sectionIndex >= totalSections) {
      return;
    }

    const windowHeight = window.innerHeight;
    const targetPosition = sectionIndex * windowHeight;
    
    const sectionElement = document.querySelectorAll('section')[sectionIndex];
    if (sectionElement) {
      sectionElement.setAttribute('tabindex', '-1');
      sectionElement.focus();
      
      setTimeout(() => {
        sectionElement.removeAttribute('tabindex');
      }, 100);
    }

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }, [totalSections]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || 
          target.tagName === 'TEXTAREA' || 
          target.tagName === 'SELECT' ||
          target.isContentEditable) {
        return;
      }

      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(currentScrollY / windowHeight);

      const preventDefaultKeys = [
        'ArrowDown', 'ArrowUp', 'j', 'k', 'Home', 'End',
        '1', '2', '3', '4', '5', '6', '7', '8', '9'
      ];

      if (preventDefaultKeys.includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        // Navegação sequencial
        case 'ArrowDown':
        case 'j':
        case 'J':
          navigateToSection(Math.min(currentSection + 1, totalSections - 1));
          break;

        case 'ArrowUp':
        case 'k':
        case 'K':
          navigateToSection(Math.max(currentSection - 1, 0));
          break;

        // Navegação para extremos
        case 'Home':
          navigateToSection(0);
          break;

        case 'End':
          navigateToSection(totalSections - 1);
          break;

        // Navegação direta por números (1-9)
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          const sectionIndex = parseInt(e.key) - 1;
          navigateToSection(sectionIndex);
          break;
        default:
          break;
      }
    };

    // Adiciona o listener com opções para melhor performance
    window.addEventListener('keydown', handleKeyPress, { passive: false });

    // Cleanup ao desmontar o componente
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [totalSections, navigateToSection]);

  // Este componente não renderiza nada visualmente
  return null;
}