'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface TopMenuProps {
  sections: string[];
}

export default function TopMenu({ sections }: TopMenuProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.round(currentScrollY / windowHeight);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setActiveSection(Math.min(currentSection, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, sections.length]);

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  const handleButtonClick = (buttonName: string) => {
    console.log(`Botão ${buttonName} clicado`);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="bg-background backdrop-blur-sm border-b border-border w-full">
        <div className="w-full px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                  A
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-foreground font-bold text-lg">Adonis Vinuto</h1>
                <Badge variant="secondary" className="text-xs">
                  Desenvolvedor
                </Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {sections.map((section, index) => (
                <Button
                  key={section}
                  variant={index === activeSection ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(index)}
                >
                  {section}
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={() => handleButtonClick('Serviços')}>
                Serviços
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleButtonClick('Portfolio')}>
                Portfolio
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleButtonClick('Sobre')}>
                Sobre
              </Button>
              <Button variant="default" size="sm" onClick={() => handleButtonClick('Contato')}>
                Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}