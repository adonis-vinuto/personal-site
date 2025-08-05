import { ReactNode } from 'react';
import { theme, cn } from '@/styles/theme';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section',
        'scroll-snap-align-start',
        'transition-all duration-500 ease-out',
        className
      )}
    >
      <div className={cn(
        'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
        'transition-all duration-300',
        theme.animation.fadeIn
      )}>
        {children}
      </div>
    </section>
  );
}