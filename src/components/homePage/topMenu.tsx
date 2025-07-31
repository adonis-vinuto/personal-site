'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

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

  const handleSocialClick = (platform: string) => {
    switch (platform) {
      case 'instagram':
        window.open('https://www.instagram.com/', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/', '_blank');
        break;
      case 'email':
        // Scroll para o final da tela (seção de contato)
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
        break;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="gradient-top-menu backdrop-blur-sm border-b border-border w-full">
        <div className="w-full px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Logo AV"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
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
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('instagram')}
                className="p-2"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('linkedin')}
                className="p-2"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('github')}
                className="p-2"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleSocialClick('email')}
                className="p-2"
                title="Contato"
              >
                <Mail className="h-4 w-4" />
              </Button>
              <ThemeToggle className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}