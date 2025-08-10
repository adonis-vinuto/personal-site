'use client';

import { useEffect } from 'react';

interface SmoothScrollHandlerProps {
  totalSections: number;
}

export default function SmoothScrollHandler({ totalSections }: SmoothScrollHandlerProps) {
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleWheel = (e: WheelEvent) => {
      // Previne scroll múltiplo enquanto já está scrollando
      if (isScrolling) {
        e.preventDefault();
        return;
      }
      
      // Detecta a direção do scroll
      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      
      // Calcula a seção atual
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(currentScrollY / windowHeight);
      
      // Calcula a próxima seção
      let nextSection = currentSection + scrollDirection;
      nextSection = Math.max(0, Math.min(nextSection, totalSections - 1));
      
      // Se não mudou de seção, não faz nada
      if (nextSection === currentSection) {
        return;
      }
      
      // Previne o scroll padrão
      e.preventDefault();
      
      // Marca que está scrollando
      isScrolling = true;
      
      // Scroll para a próxima seção
      const targetPosition = nextSection * windowHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Reset do flag após o scroll terminar
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 1000); // Tempo suficiente para a animação completar
    };
    
    // Adiciona listener com passive: false para poder usar preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [totalSections]);
  
  return null;
}