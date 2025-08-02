'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/theme-context';

// Ícones SVG simples para sol e lua
const SunIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
);

const MoonIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

// Ícone de loading simples
const LoadingIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin"
    >
        <path d="M21 12a9 9 0 11-6.219-8.56" />
    </svg>
);

interface ThemeToggleProps {
    className?: string;
    variant?: 'default' | 'outline' | 'ghost' | 'secondary';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

export function ThemeToggle({
    className = '',
    variant = 'outline',
    size = 'icon'
}: ThemeToggleProps) {
    const { theme, toggleTheme, mounted } = useTheme();

    // Mostrar ícone de loading enquanto não estiver montado
    if (!mounted) {
        return (
            <Button
                variant={variant}
                size={size}
                className={`transition-all duration-300 ${className}`}
                disabled
                aria-label="Carregando tema"
            >
                <LoadingIcon />
                <span className="sr-only">Carregando tema</span>
            </Button>
        );
    }

    return (
        <Button
            variant={variant}
            size={size}
            onClick={toggleTheme}
            className={`transition-all duration-300 hover:scale-105 ${className}`}
            aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
            title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
            {theme === 'light' ? (
                <MoonIcon />
            ) : (
                <SunIcon />
            )}
            <span className="sr-only">
                Alternar tema
            </span>
        </Button>
    );
}