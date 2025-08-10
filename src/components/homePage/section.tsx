import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, className = '', children }: SectionProps) {
  const sectionClasses = ['section', className].filter(Boolean).join(' ');

  return (
    <section
      id={id}
      className={sectionClasses}
    >
      {children}
    </section>
  );
}