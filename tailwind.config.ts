import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  darkMode: 'class',
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      /* 
        ===================================================================
        CORES ESSENCIAIS
        ===================================================================
      */
      colors: {
        // Cores fundamentais
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        // Cores semânticas principais
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },

        // Componentes básicos
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        ring: 'var(--ring)',

        // Estados essenciais
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },

        // Escala de cinzas simplificada (apenas as essenciais)
        gray: {
          0: 'var(--gray-0)',
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
          6: 'var(--gray-6)',
          7: 'var(--gray-7)',
          8: 'var(--gray-8)',
        },
      },

      /* 
        ===================================================================
        ESPAÇAMENTOS ESSENCIAIS
        ===================================================================
      */
      spacing: {
        'space-1': 'var(--space-1)',
        'space-2': 'var(--space-2)',
        'space-3': 'var(--space-3)',
        'space-4': 'var(--space-4)',
        'space-6': 'var(--space-6)',
        'space-8': 'var(--space-8)',
        'space-12': 'var(--space-12)',
        'space-16': 'var(--space-16)',
        'space-24': 'var(--space-24)',
      },

      /* 
        ===================================================================
        TIPOGRAFIA ESSENCIAL
        ===================================================================
      */
      fontFamily: {
        primary: 'var(--font-primary)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
      },

      /* 
        ===================================================================
        BORDER RADIUS ESSENCIAL
        ===================================================================
      */
      borderRadius: {
        lg: 'var(--radius)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
      },

      /* 
        ===================================================================
        SOMBRAS ESSENCIAIS
        ===================================================================
      */
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },

      /* 
        ===================================================================
        TRANSIÇÕES ESSENCIAIS
        ===================================================================
      */
      transitionDuration: {
        normal: 'var(--transition-normal)',
      },

      /* 
        ===================================================================
        ALTURA ESPECÍFICA
        ===================================================================
      */
      height: {
        'section': '100vh',
      },

      minHeight: {
        'section': '100vh',
      },

      /* 
        ===================================================================
        Z-INDEX BÁSICO
        ===================================================================
      */
      zIndex: {
        'nav': '50',
      },
    },
  },

  plugins: [
    tailwindcssAnimate,
  ],
}

export default config