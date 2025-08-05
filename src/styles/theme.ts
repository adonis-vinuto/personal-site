/* ===================================================================
   THEME.TS - SISTEMA MONOCROMÁTICO (VERSÃO 2.0)
   ================================================================= */

/* 
  Sistema de design monocromático com foco em tipografia hierárquica
  e utilidades organizadas para máxima produtividade e consistência.
*/

export const theme = {
  /* ===================================================================
     SISTEMA TIPOGRÁFICO - CLASSES UTILITÁRIAS
     ================================================================= */
  
  typography: {
    // Títulos Hierárquicos
    hero: 'font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl',
    h1: 'font-primary text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl',
    h2: 'font-primary text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-4xl',
    h3: 'font-primary text-xl font-medium leading-tight tracking-tight text-foreground sm:text-2xl lg:text-3xl',
    h4: 'font-primary text-lg font-medium leading-tight text-foreground sm:text-xl lg:text-2xl',
    h5: 'font-primary text-base font-medium leading-tight text-foreground sm:text-lg',
    h6: 'font-primary text-sm font-medium leading-tight text-foreground sm:text-base',
    
    // Corpo de Texto
    lead: 'font-primary text-lg leading-relaxed text-foreground sm:text-xl lg:text-2xl',
    body: 'font-primary text-base leading-relaxed text-foreground',
    bodySmall: 'font-primary text-sm leading-normal text-muted-foreground',
    caption: 'font-primary text-xs font-medium leading-tight tracking-wide uppercase text-subtle',
    
    // Especiais
    code: 'font-mono text-sm leading-normal bg-muted px-1 py-0.5 rounded text-foreground',
    button: 'font-primary text-sm font-medium leading-none tracking-wide',
    
    // Variações de Cor
    muted: 'text-muted-foreground',
    subtle: 'text-subtle',
    disabled: 'text-disabled',
    
    // Links
    link: 'text-foreground hover:text-muted-foreground transition-colors border-b border-transparent hover:border-muted-foreground',
  },
  
  /* ===================================================================
     LAYOUT UTILITIES - ORGANIZADOS POR CATEGORIA
     ================================================================= */
  
  layout: {
    // Container patterns
    container: 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
    section: 'py-16 sm:py-20 lg:py-24',
    sectionFull: 'h-screen flex items-center justify-center relative',
    
    // Grid patterns
    grid: {
      base: 'grid gap-6',
      cols1: 'grid grid-cols-1 gap-6',
      cols2: 'grid grid-cols-1 gap-6 sm:grid-cols-2',
      cols3: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
      cols4: 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4',
      cols6: 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6',
      auto: 'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6',
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
      colStart: 'flex flex-col items-start',
      wrap: 'flex flex-wrap',
      nowrap: 'flex flex-nowrap',
    },
    
    // Spacing patterns
    spacing: {
      x1: 'space-x-1',
      x2: 'space-x-2',
      x3: 'space-x-3',
      x4: 'space-x-4',
      x6: 'space-x-6',
      x8: 'space-x-8',
      y1: 'space-y-1',
      y2: 'space-y-2',
      y3: 'space-y-3',
      y4: 'space-y-4',
      y6: 'space-y-6',
      y8: 'space-y-8',
      y12: 'space-y-12',
      y16: 'space-y-16',
    },
  },
  
  /* ===================================================================
     CARD COMPONENTS - SISTEMA MONOCROMÁTICO
     ================================================================= */
  
  card: {
    base: 'bg-card text-card-foreground rounded-lg border border-border shadow-sm transition-all duration-300',
    header: 'flex flex-col space-y-2 p-6 sm:p-8',
    title: 'text-2xl font-semibold leading-tight tracking-tight text-foreground',
    description: 'text-sm text-muted-foreground leading-relaxed',
    content: 'p-6 pt-0 sm:p-8 sm:pt-0',
    footer: 'flex items-center p-6 pt-0 sm:p-8 sm:pt-0',
    
    // Variants
    variants: {
      default: '',
      elevated: 'shadow-lg hover:shadow-xl hover:-translate-y-1',
      outlined: 'border-2 shadow-none',
      ghost: 'border-none shadow-none bg-transparent',
      interactive: 'hover:shadow-lg hover:-translate-y-1 cursor-pointer',
    },
    
    // Sizes
    sizes: {
      sm: 'p-4 text-sm',
      md: 'p-6',
      lg: 'p-8 text-lg',
      xl: 'p-10 text-xl',
    },
  },
  
  /* ===================================================================
     BUTTON COMPONENTS - SISTEMA MONOCROMÁTICO
     ================================================================= */
  
  button: {
    base: 'inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden',
    
    // Variants
    variants: {
      primary: 'bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-md',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground border border-border',
      outline: 'border border-border bg-transparent hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-foreground underline-offset-4 hover:underline hover:text-muted-foreground',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    },
    
    // Sizes
    sizes: {
      sm: 'h-9 px-3 text-sm',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-11 px-8 text-base',
      xl: 'h-12 px-10 text-lg',
      icon: 'h-10 w-10',
      iconSm: 'h-8 w-8',
      iconLg: 'h-12 w-12',
    },
  },
  
  /* ===================================================================
     INPUT COMPONENTS
     ================================================================= */
  
  input: {
    base: 'flex h-11 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
    
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
     NAVIGATION COMPONENTS - MELHORADOS
     ================================================================= */
  
  nav: {
    // Menu principal
    menu: 'flex items-center space-x-6',
    item: 'text-sm font-medium transition-all hover:text-foreground hover:-translate-y-0.5',
    itemActive: 'text-sm font-semibold text-foreground',
    
    // Navegação lateral (dots)
    dots: {
      container: 'fixed top-1/2 right-8 -translate-y-1/2 z-50 flex flex-col gap-6',
      dot: 'w-3.5 h-3.5 rounded-full border-2 border-subtle bg-transparent cursor-pointer transition-all hover:border-foreground hover:scale-125 relative',
      dotActive: 'bg-foreground border-foreground scale-110',
      dotHover: 'before:absolute before:inset-[-8px] before:rounded-full before:bg-foreground before:opacity-0 before:scale-0 before:transition-all hover:before:opacity-10 hover:before:scale-100',
    },
    
    // Botões de navegação
    buttons: {
      base: 'bg-transparent border-none font-medium px-5 py-3.5 relative transition-all hover:-translate-y-0.5 cursor-pointer overflow-hidden',
      underline: 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-foreground after:transition-all hover:after:w-full active:after:w-full active:after:h-0.5',
      active: 'font-semibold after:w-full after:h-0.5',
    },
    
    // Mobile menu
    mobile: {
      overlay: 'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm',
      panel: 'fixed inset-y-0 right-0 z-50 h-full w-3/4 border-l bg-background p-6 shadow-lg sm:max-w-sm',
      menu: 'flex flex-col space-y-4',
      item: 'text-base font-medium transition-colors hover:text-foreground',
    },
    
    // Breadcrumb
    breadcrumb: {
      list: 'flex items-center space-x-2 text-sm text-muted-foreground',
      item: 'hover:text-foreground transition-colors',
      separator: 'text-subtle',
      current: 'text-foreground font-medium',
    },
  },
  
  /* ===================================================================
     GRADIENTES MONOCROMÁTICOS
     ================================================================= */
  
  gradients: {
    // Seções específicas
    bio: 'bg-gradient-to-br from-ghost-white to-light-gray',
    projetos: 'bg-gradient-to-br from-light-gray to-silver',
    carreira: 'bg-gradient-to-br from-charcoal to-dark-gray text-white',
    hobbys: 'bg-gradient-to-br from-white to-ghost-white',
    blog: 'bg-gradient-to-br from-dark-gray to-charcoal text-white',
    contato: 'bg-gradient-to-br from-near-black to-black text-white',
    
    // Utilitários
    subtle: 'bg-gradient-to-br from-background to-background-secondary',
    medium: 'bg-gradient-to-br from-background-secondary to-background-tertiary',
    strong: 'bg-gradient-to-br from-background-tertiary to-muted',
  },
  
  /* ===================================================================
     ANIMATION UTILITIES
     ================================================================= */
  
  animation: {
    // Transições básicas
    fast: 'transition-all duration-150 ease-out',
    normal: 'transition-all duration-250 ease-out',
    slow: 'transition-all duration-350 ease-out',
    bounce: 'transition-all duration-400 cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    
    // Animações de entrada
    fadeIn: 'animate-in fade-in-0 duration-300',
    fadeOut: 'animate-out fade-out-0 duration-300',
    slideInFromTop: 'animate-in slide-in-from-top-2 duration-300',
    slideInFromBottom: 'animate-in slide-in-from-bottom-2 duration-300',
    slideInFromLeft: 'animate-in slide-in-from-left-2 duration-300',
    slideInFromRight: 'animate-in slide-in-from-right-2 duration-300',
    scaleIn: 'animate-in zoom-in-95 duration-300',
    scaleOut: 'animate-out zoom-out-95 duration-300',
    
    // Hover animations
    hover: {
      lift: 'hover:-translate-y-1 transition-transform duration-250',
      scale: 'hover:scale-105 transition-transform duration-250',
      glow: 'hover:shadow-lg transition-shadow duration-250',
      float: 'hover:-translate-y-0.5 transition-transform duration-200',
    },
    
    // Loading states
    loading: 'opacity-60 pointer-events-none animate-pulse',
    shimmer: 'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent',
  },
  
  /* ===================================================================
     STATE UTILITIES
     ================================================================= */
  
  state: {
    // Visibility
    hidden: 'sr-only',
    visible: 'not-sr-only',
    
    // Interactive states
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    loading: 'opacity-60 pointer-events-none',
    
    // Focus states
    focus: 'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    focusVisible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    
    // Interactive
    interactive: {
      base: 'cursor-pointer transition-all',
      hover: 'hover:bg-accent hover:text-accent-foreground',
      active: 'active:scale-95',
      focus: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    },
  },
  
  /* ===================================================================
     BACKDROP E EFEITOS
     ================================================================= */
  
  effects: {
    blur: 'backdrop-blur-sm',
    blurMd: 'backdrop-blur-md',
    blurLg: 'backdrop-blur-lg',
    
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      inner: 'shadow-inner',
    },
    
    border: {
      subtle: 'border border-border',
      medium: 'border-2 border-border-secondary',
      strong: 'border-2 border-foreground',
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

/**
 * Função para criar classes tipográficas personalizadas
 */
export function typography(
  element: keyof typeof theme.typography,
  additional?: string
): string {
  return cn(theme.typography[element], additional);
}

/**
 * Função para criar gradientes personalizados
 */
export function gradient(
  type: keyof typeof theme.gradients,
  additional?: string
): string {
  return cn(theme.gradients[type], additional);
}

/* ===================================================================
   EXEMPLOS DE USO ATUALIZADOS
   ================================================================= */

/*
// Exemplo 1: Tipografia hierárquica
<h1 className={theme.typography.hero}>Título Principal</h1>
<h2 className={theme.typography.h2}>Subtítulo</h2>
<p className={theme.typography.lead}>Texto de destaque</p>
<p className={theme.typography.body}>Texto normal</p>
<span className={theme.typography.caption}>Legenda</span>

// Exemplo 2: Card com variant e animação
<div className={cn(
  theme.card.base,
  theme.card.variants.elevated,
  theme.animation.hover.lift
)}>
  <div className={theme.card.header}>
    <h3 className={theme.card.title}>Título do Card</h3>
    <p className={theme.card.description}>Descrição</p>
  </div>
  <div className={theme.card.content}>
    Conteúdo do card
  </div>
</div>

// Exemplo 3: Botão com variant e size
<button className={component(
  theme.button.base,
  'primary',
  'lg',
  theme.button.variants,
  theme.button.sizes
)}>
  Clique aqui
</button>

// Exemplo 4: Layout com grid e espaçamento
<div className={cn(theme.layout.grid.cols3, theme.layout.spacing.y8)}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// Exemplo 5: Navegação com dots
<nav className={theme.nav.dots.container}>
  <button className={cn(
    theme.nav.dots.dot,
    theme.nav.dots.dotHover,
    isActive && theme.nav.dots.dotActive
  )} />
</nav>

// Exemplo 6: Seção com gradiente
<section className={cn(
  theme.layout.sectionFull,
  theme.gradients.bio
)}>
  Conteúdo da seção
</section>

// Exemplo 7: Usando funções utilitárias
<h1 className={typography('hero', 'mb-4')}>
  Título com margem
</h1>

<div className={gradient('subtle', 'p-8 rounded-lg')}>
  Container com gradiente sutil
</div>
*/