'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    // Carregar tema do localStorage na inicialização
    useEffect(() => {
        try {
            const savedTheme = localStorage.getItem('theme') as Theme;
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

            const initialTheme = savedTheme || systemTheme;
            setTheme(initialTheme);

            // Aplicar tema imediatamente para evitar flash
            const root = document.documentElement;
            if (initialTheme === 'dark') {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }

            setMounted(true);
        } catch (error) {
            // Fallback se localStorage não estiver disponível
            setTheme('light');
            setMounted(true);
        }
    }, []);

    // Aplicar tema ao documento quando mudado
    useEffect(() => {
        if (mounted) {
            try {
                const root = document.documentElement;

                if (theme === 'dark') {
                    root.classList.add('dark');
                } else {
                    root.classList.remove('dark');
                }

                localStorage.setItem('theme', theme);
            } catch (error) {
                // Ignorar erros de localStorage
                console.warn('Não foi possível salvar o tema no localStorage:', error);
            }
        }
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const handleSetTheme = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    const value = {
        theme,
        toggleTheme,
        setTheme: handleSetTheme,
        mounted
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }
    return context;
}