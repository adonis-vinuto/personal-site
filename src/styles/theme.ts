/* ===================================================================
   THEME.TS - ALIASES DE CLASSES UTILITÁRIAS (VERSÃO MELHORADA)
   ================================================================= */

/* 
  Este arquivo exporta objetos com classes utilitárias organizadas
  hierarquicamente para facilitar o uso em componentes e evitar repetição.
  Segue o padrão usado por shadcn/ui e outras bibliotecas modernas.
*/

export const theme = {
  /* ===================================================================
     LAYOUT UTILITIES - ORGANIZADOS POR CATEGORIA
     ================================================================= */
  
  layout: {
    // Container patterns
    container: 'mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-16 sm:py-20 lg:py-24',
    
    // Grid patterns
    grid: {
      base: 'grid gap-6',
      cols1: 'grid grid-cols-1 gap-6',
      cols2: 'grid grid-cols-1 gap-6 sm:grid-cols-2',
      cols3: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
      cols4: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
      cols6: 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6',
    },
    
    // Flex patterns
    flex: {
      center: 'flex items-center justify-center',
      between: 'flex items-center justify-between',
      start: 'flex items-center justify-start',
      end: 'flex items-center justify-end',
      col: 'flex flex-col',
      colCenter: 'flex flex-col items-center justify-center',
      colBetween: 'flex flex-col justify-between',
      wrap: 'flex flex-wrap',
    },
    
    // Spacing patterns
    spacing: {
      x2: 'space-x-2',
      x4: 'space-x-4',
      x6: 'space-x-6',
      x8: 'space-x-8',
      y2: 'space-y-2',
      y4: 'space-y-4',
      y6: 'space-y-6',
      y8: 'space-y-8',
      y12: 'space-y-12',
    },
  },
  
  /* ===================================================================
     CARD COMPONENTS - ESTRUTURA HIERÁRQUICA
     ================================================================= */
  
  card: {
    base: 'bg-card text-card-foreground rounded-lg border border-border shadow-sm',
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'text-2xl font-semibold leading-none tracking-tight text-foreground',
    description: 'text-sm text-muted-foreground',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
    
    // Variants
    variants: {
      elevated: 'shadow-md hover:shadow-lg transition-shadow',
      outlined: 'border-2 shadow-none',
      ghost: 'border-none shadow-none bg-transparent',
    },
    
    // Sizes
    sizes: {
      sm: 'p-4 text-sm',
      md: 'p-6',
      lg: 'p-8 text-lg',
    },
  },
  
  /* ===================================================================
     BUTTON COMPONENTS - SEPARAÇÃO CLARA DE RESPONSABILIDADES
     ================================================================= */
  
  button: {
    base: 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    
    // Variants
    variants: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
      success: 'bg-success text-success-foreground hover:bg-success/90',
      warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
    },
    
    // Sizes
    sizes: {
      sm: 'h-9 rounded-md px-3',
      md: 'h-10 px-4 py-2',
      lg: 'h-11 rounded-md px-8',
      xl: 'h-12 rounded-md px-10 text-base',
      icon: 'h-10 w-10',
      iconSm: 'h-8 w-8',
      iconLg: 'h-12 w-12',
    },
  },
  
  /* ===================================================================
     INPUT COMPONENTS
     ================================================================= */
  
  input: {
    base: 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
    
    // Variants
    variants: {
      default: '',
      error: 'border-destructive focus-visible:ring-destructive',
      success: 'border-success focus-visible:ring-success',
    },
    
    // Sizes
    sizes: {
      sm: 'h-8 px-2 text-xs',
      md: 'h-10 px-3 text-sm',
      lg: 'h-12 px-4 text-base',
    },
  },
  
  /* ===================================================================
     NAVIGATION COMPONENTS
     ================================================================= */
  
  nav: {
    menu: 'flex items-center space-x-6',
    item: 'text-sm font-medium transition-colors hover:text-primary',
    itemActive: 'text-sm font-medium text-primary',
    
    // Mobile menu
    mobile: {
      overlay: 'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm',
      panel: 'fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l bg-background p-6 shadow-lg sm:max-w-sm',
      menu: 'flex flex-col space-y-4',
      item: 'text-base font-medium transition-colors hover:text-primary',
    },
    
    // Breadcrumb
    breadcrumb: {
      list: 'flex items-center space-x-2 text-sm text-muted-foreground',
      item: 'hover:text-foreground transition-colors',
      separator: 'text-muted-foreground/50',
      current: 'text-foreground font-medium',
    },
  },
  
  /* ===================================================================
     TYPOGRAPHY UTILITIES - TOKENS SEMÂNTICOS
     ================================================================= */
  
  typography: {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl',
    h2: 'scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight text-foreground',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight text-foreground',
    h5: 'scroll-m-20 text-lg font-semibold tracking-tight text-foreground',
    h6: 'scroll-m-20 text-base font-semibold tracking-tight text-foreground',
    
    p: 'leading-7 text-foreground [&:not(:first-child)]:mt-6',
    lead: 'text-xl text-muted-foreground',
    large: 'text-lg font-semibold text-foreground',
    small: 'text-sm font-medium leading-none text-foreground',
    muted: 'text-sm text-muted-foreground',
    
    // Lists
    list: 'my-6 ml-6 list-disc [&>li]:mt-2 text-foreground',
    listOrdered: 'my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground',
    
    // Code
    code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground',
    pre: 'mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4',
    
    // Links
    link: 'font-medium text-primary underline underline-offset-4 hover:text-primary/80',
  },
  
  /* ===================================================================
     ANIMATION UTILITIES
     ================================================================= */
  
  animation: {
    fadeIn: 'animate-in fade-in-0 duration-200',
    fadeOut: 'animate-out fade-out-0 duration-200',
    slideInFromTop: 'animate-in slide-in-from-top-2 duration-200',
    slideInFromBottom: 'animate-in slide-in-from-bottom-2 duration-200',
    slideInFromLeft: 'animate-in slide-in-from-left-2 duration-200',
    slideInFromRight: 'animate-in slide-in-from-right-2 duration-200',
    scaleIn: 'animate-in zoom-in-95 duration-200',
    scaleOut: 'animate-out zoom-out-95 duration-200',
    
    // Hover animations
    hover: {
      scale: 'hover:scale-105 transition-transform',
      lift: 'hover:-translate-y-1 transition-transform',
      glow: 'hover:shadow-lg transition-shadow',
    },
  },
  
  /* ===================================================================
     STATE UTILITIES
     ================================================================= */
  
  state: {
    loading: 'opacity-50 pointer-events-none animate-pulse',
    disabled: 'opacity-50 cursor-not-allowed',
    hidden: 'sr-only',
    visible: 'not-sr-only',
    focus: 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    
    // Interactive states
    interactive: {
      hover: 'hover:bg-accent hover:text-accent-foreground transition-colors',
      active: 'active:scale-95 transition-transform',
      focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    },
  },
};

/* ===================================================================
   UTILITY FUNCTIONS - MELHORADAS
   ================================================================= */

/**
 * Combina classes CSS de forma segura, removendo duplicatas e valores falsy
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Aplica classes condicionalmente
 */
export function conditional(
  condition: boolean,
  trueClasses: string,
  falseClasses: string = ''
): string {
  return condition ? trueClasses : falseClasses;
}

/**
 * Combina variantes de um componente de forma hierárquica
 */
export function variant(
  base: string,
  variants: Record<string, string>,
  activeVariants: string[]
): string {
  const variantClasses = activeVariants
    .map(variant => variants[variant])
    .filter(Boolean);
  
  return cn(base, ...variantClasses);
}

/**
 * Combina base + variant + size para componentes
 */
export function component(
  base: string,
  variant?: string,
  size?: string,
  variants?: Record<string, string>,
  sizes?: Record<string, string>
): string {
  const classes = [base];
  
  if (variant && variants?.[variant]) {
    classes.push(variants[variant]);
  }
  
  if (size && sizes?.[size]) {
    classes.push(sizes[size]);
  }
  
  return cn(...classes);
}

/* ===================================================================
   EXEMPLOS DE USO MELHORADOS
   ================================================================= */

/*
// Exemplo 1: Card com variant
<div className={cn(theme.card.base, theme.card.variants.elevated)}>
  <div className={theme.card.header}>
    <h3 className={theme.card.title}>Título</h3>
    <p className={theme.card.description}>Descrição</p>
  </div>
  <div className={theme.card.content}>
    Conteúdo do card
  </div>
</div>

// Exemplo 2: Botão com variant e size
<button className={component(
  theme.button.base,
  'primary',
  'lg',
  theme.button.variants,
  theme.button.sizes
)}>
  Clique aqui
</button>

// Exemplo 3: Layout com grid hierárquico
<div className={theme.layout.grid.cols3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Exemplo 4: Tipografia semântica
<h1 className={theme.typography.h1}>Título Principal</h1>
<p className={theme.typography.lead}>Texto de destaque</p>
<p className={theme.typography.muted}>Texto secundário</p>

// Exemplo 5: Navegação mobile
<div className={theme.nav.mobile.overlay}>
  <div className={theme.nav.mobile.panel}>
    <nav className={theme.nav.mobile.menu}>
      <a className={theme.nav.mobile.item}>Home</a>
      <a className={theme.nav.mobile.item}>About</a>
    </nav>
  </div>
</div>
*/