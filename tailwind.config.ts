import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

const config: Config = {
  // Configuração do modo escuro
  darkMode: 'class',

  // Arquivos onde o Tailwind deve procurar por classes utilizadas
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
        SISTEMA DE CORES HARMONIZADO
        ===================================================================
      */

      colors: {
        // Cores fundamentais que trabalham automaticamente com modo escuro
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        // Hierarquia de backgrounds para diferentes níveis de profundidade
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',
        'background-quaternary': 'var(--background-quaternary)',
        'background-subtle': 'var(--background-subtle)',

        // Hierarquia de foregrounds para diferentes níveis de importância
        'foreground-primary': 'var(--foreground-primary)',
        'foreground-secondary': 'var(--foreground-secondary)',
        'foreground-tertiary': 'var(--foreground-tertiary)',
        'foreground-quaternary': 'var(--foreground-quaternary)',
        'foreground-disabled': 'var(--foreground-disabled)',

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

        // Componentes específicos
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },

        // Estados de feedback - sempre funcionais
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        info: {
          DEFAULT: 'var(--info)',
          foreground: 'var(--info-foreground)',
        },

        // Elementos de interface
        border: 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
        input: 'var(--input)',
        ring: 'var(--ring)',

        /* TOKENS ESPECÍFICOS DE SEÇÃO */

        // Seção Bio
        bio: {
          'ultra-light': 'var(--bio-ultra-light)',
          light: 'var(--bio-light)',
          medium: 'var(--bio-medium)',
          dark: 'var(--bio-dark)',
          'ultra-dark': 'var(--bio-ultra-dark)',
          background: 'var(--bio-background)',
          'background-secondary': 'var(--bio-background-secondary)',
          foreground: 'var(--bio-foreground)',
          'foreground-muted': 'var(--bio-foreground-muted)',
          accent: 'var(--bio-accent)',
        },

        // Seção Projetos
        projetos: {
          'ultra-light': 'var(--projetos-ultra-light)',
          light: 'var(--projetos-light)',
          medium: 'var(--projetos-medium)',
          dark: 'var(--projetos-dark)',
          'ultra-dark': 'var(--projetos-ultra-dark)',
          background: 'var(--projetos-background)',
          'background-secondary': 'var(--projetos-background-secondary)',
          foreground: 'var(--projetos-foreground)',
          'foreground-muted': 'var(--projetos-foreground-muted)',
          accent: 'var(--projetos-accent)',
        },

        // Seção Carreira
        carreira: {
          'ultra-light': 'var(--carreira-ultra-light)',
          light: 'var(--carreira-light)',
          medium: 'var(--carreira-medium)',
          dark: 'var(--carreira-dark)',
          'ultra-dark': 'var(--carreira-ultra-dark)',
          background: 'var(--carreira-background)',
          'background-secondary': 'var(--carreira-background-secondary)',
          foreground: 'var(--carreira-foreground)',
          'foreground-muted': 'var(--carreira-foreground-muted)',
          accent: 'var(--carreira-accent)',
        },

        // Seção Hobbys
        hobbys: {
          'ultra-light': 'var(--hobbys-ultra-light)',
          light: 'var(--hobbys-light)',
          medium: 'var(--hobbys-medium)',
          dark: 'var(--hobbys-dark)',
          'ultra-dark': 'var(--hobbys-ultra-dark)',
          background: 'var(--hobbys-background)',
          'background-secondary': 'var(--hobbys-background-secondary)',
          foreground: 'var(--hobbys-foreground)',
          'foreground-muted': 'var(--hobbys-foreground-muted)',
          accent: 'var(--hobbys-accent)',
        },

        // Seção Blog
        blog: {
          'ultra-light': 'var(--blog-ultra-light)',
          light: 'var(--blog-light)',
          medium: 'var(--blog-medium)',
          dark: 'var(--blog-dark)',
          'ultra-dark': 'var(--blog-ultra-dark)',
          background: 'var(--blog-background)',
          'background-secondary': 'var(--blog-background-secondary)',
          foreground: 'var(--blog-foreground)',
          'foreground-muted': 'var(--blog-foreground-muted)',
          accent: 'var(--blog-accent)',
        },

        // Seção Contato
        contato: {
          'ultra-light': 'var(--contato-ultra-light)',
          light: 'var(--contato-light)',
          medium: 'var(--contato-medium)',
          dark: 'var(--contato-dark)',
          'ultra-dark': 'var(--contato-ultra-dark)',
          background: 'var(--contato-background)',
          'background-secondary': 'var(--contato-background-secondary)',
          foreground: 'var(--contato-foreground)',
          'foreground-muted': 'var(--contato-foreground-muted)',
          accent: 'var(--contato-accent)',
        },

        // Sidebar
        sidebar: {
          DEFAULT: 'var(--sidebar)',
          foreground: 'var(--sidebar-foreground)',
          primary: 'var(--sidebar-primary)',
          'primary-foreground': 'var(--sidebar-primary-foreground)',
          accent: 'var(--sidebar-accent)',
          'accent-foreground': 'var(--sidebar-accent-foreground)',
          border: 'var(--sidebar-border)',
          ring: 'var(--sidebar-ring)',
        },

        // Charts
        chart: {
          1: 'var(--chart-1)',
          2: 'var(--chart-2)',
          3: 'var(--chart-3)',
          4: 'var(--chart-4)',
          5: 'var(--chart-5)',
        },

        // Cores customizadas para compatibilidade com classes existentes
        'ghost-white': 'var(--gray-1)',      // #fafafa
        'light-gray': 'var(--gray-2)',       // #f5f5f5
        'silver': 'var(--gray-3)',           // #e5e5e5
        'charcoal': 'var(--gray-6)',         // #2a2a2a
        'dark-gray': 'var(--gray-5)',        // #6b6b6b
        'near-black': 'var(--gray-7)',       // #1a1a1a
        'white': 'var(--gray-0)',            // #ffffff
        'black': 'var(--gray-8)',            // #000000

        // Paleta base de cinzas
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
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
      },

      /* 
        ===================================================================
        SISTEMA DE ESPAÇAMENTOS HARMONIZADO
        ===================================================================
      */

      spacing: {
        // Mapeando nosso sistema harmônico de espaçamentos
        'space-0': 'var(--space-0)',    // 0
        'space-1': 'var(--space-1)',    // 4px
        'space-2': 'var(--space-2)',    // 8px
        'space-3': 'var(--space-3)',    // 12px
        'space-4': 'var(--space-4)',    // 16px
        'space-5': 'var(--space-5)',    // 20px
        'space-6': 'var(--space-6)',    // 24px
        'space-8': 'var(--space-8)',    // 32px
        'space-10': 'var(--space-10)',  // 40px
        'space-12': 'var(--space-12)',  // 48px
        'space-16': 'var(--space-16)',  // 64px
        'space-20': 'var(--space-20)',  // 80px
        'space-24': 'var(--space-24)',  // 96px
        'space-32': 'var(--space-32)',  // 128px

        // Espaçamentos adicionais para casos específicos
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '128': '32rem',    // 512px
      },

      /* 
        ===================================================================
        SISTEMA TIPOGRÁFICO HARMONIZADO
        ===================================================================
      */

      fontFamily: {
        // Mapeando nossas famílias tipográficas específicas
        primary: 'var(--font-primary)',
        display: 'var(--font-display)',
        mono: 'var(--font-mono)',
        
        // Tipografia específica para cada contexto
        hero: 'var(--font-hero)',
        h1: 'var(--font-h1)',
        h2: 'var(--font-h2)',
        h3: 'var(--font-h3)',
        h4: 'var(--font-h4)',
        body: 'var(--font-body)',
        'body-large': 'var(--font-body-large)',
        'body-small': 'var(--font-body-small)',
        caption: 'var(--font-caption)',
        code: 'var(--font-code)',
        button: 'var(--font-button)',

        // Aliases convencionais do Tailwind
        sans: 'var(--font-primary)',
        serif: 'var(--font-display)',

        // Mantendo fallbacks robustos
        system: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },

      /* 
        ===================================================================
        TAMANHOS TIPOGRÁFICOS HARMONIZADOS
        ===================================================================
      */

      fontSize: {
        // Mapeando todos os nossos tokens tipográficos
        'size-hero': ['var(--size-hero)', { lineHeight: 'var(--line-height-hero)', letterSpacing: 'var(--letter-spacing-hero)', fontWeight: 'var(--weight-hero)' }],
        'size-h1': ['var(--size-h1)', { lineHeight: 'var(--line-height-h1)', letterSpacing: 'var(--letter-spacing-h1)', fontWeight: 'var(--weight-h1)' }],
        'size-h2': ['var(--size-h2)', { lineHeight: 'var(--line-height-h2)', letterSpacing: 'var(--letter-spacing-h2)', fontWeight: 'var(--weight-h2)' }],
        'size-h3': ['var(--size-h3)', { lineHeight: 'var(--line-height-h3)', letterSpacing: 'var(--letter-spacing-h3)', fontWeight: 'var(--weight-h3)' }],
        'size-h4': ['var(--size-h4)', { lineHeight: 'var(--line-height-h4)', letterSpacing: 'var(--letter-spacing-h4)', fontWeight: 'var(--weight-h4)' }],
        'size-body-large': ['var(--size-body-large)', { lineHeight: 'var(--line-height-body-large)', letterSpacing: 'var(--letter-spacing-body-large)', fontWeight: 'var(--weight-body-large)' }],
        'size-body': ['var(--size-body)', { lineHeight: 'var(--line-height-body)', letterSpacing: 'var(--letter-spacing-body)', fontWeight: 'var(--weight-body)' }],
        'size-body-small': ['var(--size-body-small)', { lineHeight: 'var(--line-height-body-small)', letterSpacing: 'var(--letter-spacing-body-small)', fontWeight: 'var(--weight-body-small)' }],
        'size-caption': ['var(--size-caption)', { lineHeight: 'var(--line-height-caption)', letterSpacing: 'var(--letter-spacing-caption)', fontWeight: 'var(--weight-caption)', textTransform: 'var(--text-transform-caption)' }],
        'size-code': ['var(--size-code)', { lineHeight: 'var(--line-height-code)', letterSpacing: 'var(--letter-spacing-code)', fontWeight: 'var(--weight-code)' }],
        'size-button': ['var(--size-button)', { lineHeight: 'var(--line-height-button)', letterSpacing: 'var(--letter-spacing-button)', fontWeight: 'var(--weight-button)' }],

        // Aliases simples para casos específicos
        'hero': 'var(--size-hero)',
        'h1': 'var(--size-h1)',
        'h2': 'var(--size-h2)',
        'h3': 'var(--size-h3)',
        'h4': 'var(--size-h4)',
        'body-large': 'var(--size-body-large)',
        'body': 'var(--size-body)',
        'body-small': 'var(--size-body-small)',
        'caption': 'var(--size-caption)',
        'code': 'var(--size-code)',
        'button': 'var(--size-button)',
      },

      /* 
        ===================================================================
        PESOS TIPOGRÁFICOS
        ===================================================================
      */

      fontWeight: {
        'hero': 'var(--weight-hero)',
        'h1': 'var(--weight-h1)',
        'h2': 'var(--weight-h2)',
        'h3': 'var(--weight-h3)',
        'h4': 'var(--weight-h4)',
        'body-large': 'var(--weight-body-large)',
        'body': 'var(--weight-body)',
        'body-small': 'var(--weight-body-small)',
        'caption': 'var(--weight-caption)',
        'code': 'var(--weight-code)',
        'button': 'var(--weight-button)',
      },

      /* 
        ===================================================================
        ALTURAS DE LINHA
        ===================================================================
      */

      lineHeight: {
        'hero': 'var(--line-height-hero)',
        'h1': 'var(--line-height-h1)',
        'h2': 'var(--line-height-h2)',
        'h3': 'var(--line-height-h3)',
        'h4': 'var(--line-height-h4)',
        'body-large': 'var(--line-height-body-large)',
        'body': 'var(--line-height-body)',
        'body-small': 'var(--line-height-body-small)',
        'caption': 'var(--line-height-caption)',
        'code': 'var(--line-height-code)',
        'button': 'var(--line-height-button)',
      },

      /* 
        ===================================================================
        ESPAÇAMENTO ENTRE LETRAS
        ===================================================================
      */

      letterSpacing: {
        'hero': 'var(--letter-spacing-hero)',
        'h1': 'var(--letter-spacing-h1)',
        'h2': 'var(--letter-spacing-h2)',
        'h3': 'var(--letter-spacing-h3)',
        'h4': 'var(--letter-spacing-h4)',
        'body-large': 'var(--letter-spacing-body-large)',
        'body': 'var(--letter-spacing-body)',
        'body-small': 'var(--letter-spacing-body-small)',
        'caption': 'var(--letter-spacing-caption)',
        'code': 'var(--letter-spacing-code)',
        'button': 'var(--letter-spacing-button)',
      },

      /*
        ===================================================================
        BORDER RADIUS HARMONIZADO
        ===================================================================
      */

      borderRadius: {
        // Mapeando nosso sistema de border radius
        'radius-sm': 'var(--radius-sm)',
        'radius-md': 'var(--radius-md)',
        'radius-lg': 'var(--radius-lg)',
        'radius-xl': 'var(--radius-xl)',
        'radius-full': 'var(--radius-full)',

        // Aliases para conveniência
        lg: 'var(--radius)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        xl: 'var(--radius-xl)',
        full: 'var(--radius-full)',
      },

      /* 
        ===================================================================
        SISTEMA DE SOMBRAS HARMONIZADO
        ===================================================================
      */

      boxShadow: {
        // Mapeando nosso sistema completo de sombras
        'shadow-sm': 'var(--shadow-sm)',
        'shadow': 'var(--shadow)',
        'shadow-md': 'var(--shadow-md)',
        'shadow-lg': 'var(--shadow-lg)',
        'shadow-xl': 'var(--shadow-xl)',

        // Aliases padrão do Tailwind
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },

      /* 
        ===================================================================
        SISTEMA DE TRANSIÇÕES HARMONIZADO
        ===================================================================
      */

      transitionDuration: {
        // Mapeando nossas durações harmônicas
        fast: 'var(--transition-fast)',
        normal: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
        'very-slow': 'var(--transition-very-slow)',
      },

      transitionTimingFunction: {
        // Mapeando nossas curvas de easing específicas
        'ease-enter': 'var(--ease-enter)',
        'ease-exit': 'var(--ease-exit)',
        'ease-bounce': 'var(--ease-bounce)',
        'ease-back': 'var(--ease-back)',
      },

      /* 
        ===================================================================
        ANIMAÇÕES AVANÇADAS HARMONIZADAS
        ===================================================================
      */

      keyframes: {
        // Animações para componentes de interface
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        // Animações de entrada e saída
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },

        // Animações de movimento
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        // Animações de loading e feedback
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'skeleton-shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },

        // Animações específicas para navegação
        'nav-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'nav-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },

      animation: {
        // Aplicando as animações com timings apropriados
        'accordion-down': 'accordion-down var(--transition-normal) ease-out',
        'accordion-up': 'accordion-up var(--transition-normal) ease-out',
        'fade-in': 'fade-in var(--transition-normal) var(--ease-enter)',
        'fade-out': 'fade-out var(--transition-fast) var(--ease-exit)',
        'slide-in-from-top': 'slide-in-from-top var(--transition-normal) var(--ease-enter)',
        'slide-in-from-bottom': 'slide-in-from-bottom var(--transition-normal) var(--ease-enter)',
        'slide-in-from-left': 'slide-in-from-left var(--transition-normal) var(--ease-enter)',
        'slide-in-from-right': 'slide-in-from-right var(--transition-normal) var(--ease-enter)',
        'spin': 'spin var(--transition-normal) linear infinite',
        'shimmer': 'shimmer var(--transition-very-slow) linear infinite',
        'skeleton-shimmer': 'skeleton-shimmer var(--transition-very-slow) infinite',
        'nav-pulse': 'nav-pulse var(--transition-slow) ease-in-out infinite',
        'nav-bounce': 'nav-bounce var(--transition-bounce) infinite',
      },

      /*
        ===================================================================
        BREAKPOINTS PERSONALIZADOS
        =================================================================
      */

      screens: {
        'xs': '475px',      // Para dispositivos muito pequenos
        'sm': '640px',      // Padrão do Tailwind
        'md': '768px',      // Padrão do Tailwind  
        'lg': '1024px',     // Padrão do Tailwind
        'xl': '1280px',     // Padrão do Tailwind
        '2xl': '1536px',    // Padrão do Tailwind
        '3xl': '1600px',    // Para telas muito grandes
      },

      /*
        ===================================================================
        ALTURA E LARGURA ESPECÍFICAS
        =================================================================
      */

      height: {
        'section': '100vh',
        'min-section': '100vh',
      },

      minHeight: {
        'section': '100vh',
      },

      /*
        ===================================================================
        Z-INDEX HIERÁRQUICO
        =================================================================
      */

      zIndex: {
        'nav': '50',
        'modal': '100',
        'toast': '1000',
        'tooltip': '1001',
      },
    },
  },

  /*
    ===================================================================
    PLUGINS
    ===================================================================
  */

  plugins: [
    // Plugin para animações avançadas e estados
    tailwindcssAnimate,
  ],
}

export default config