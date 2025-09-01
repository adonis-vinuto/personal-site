# 🎨 Guia de Arquitetura CSS e Sistema de Design

---

## 📐 Filosofia de Design

Este projeto adota uma abordagem **utility-first** com o Tailwind CSS 4, combinada com componentes customizados e um sistema de design tokens bem definido. A arquitetura CSS foi pensada para ser:

- **Escalável**: Fácil de adicionar novos componentes sem quebrar existentes
- **Manutenível**: Código CSS organizado e previsível
- **Performática**: Apenas o CSS necessário é incluído no bundle final
- **Consistente**: Design tokens garantem uniformidade visual
- **Acessível**: Foco em contraste, tamanhos adequados e navegação por teclado

---

## 🏗️ Estrutura do Sistema CSS

### 📁 Organização de Arquivos

```
src/
├── styles/
│   ├── globals.css           # Ponto de entrada - importa todos os layers
│   ├── core/                 # 🏛️ FUNDAÇÃO - Configurações base
│   │   ├── theme.css         # Configuração Tailwind v4 + Design Tokens
│   │   ├── tokens.css        # Design Tokens e CSS Custom Properties
│   │   ├── reset.css         # Normalizações complementares
│   │   ├── typography.css    # Sistema tipográfico avançado
│   │   └── layout.css        # Patterns de layout (stack, grid, etc)
│   └── utilities/            # 🔧 UTILITIES - Helpers e modificadores
│       ├── animations.css    # Keyframes e classes de animação
│       ├── helpers.css       # Utilities essenciais (a11y, debug)
│       ├── states.css        # Estados da aplicação (loading, error)
│       └── responsive.css    # Helpers responsivos (safe-area, clamp)
```

### 🎯 Sistema de Layers e Importação

```css
/* globals.css - Ordem de importação otimizada */
@import 'tailwindcss';

/* Core - Fundação do sistema */
@import './core/theme.css';        /* 1º Configuração Tailwind v4 */
@import './core/tokens.css';       /* 2º Design tokens e custom properties */
@import './core/reset.css';        /* 3º Normalizações específicas */
@import './core/typography.css';   /* 4º Sistema tipográfico */
@import './core/layout.css';       /* 5º Patterns de layout */

/* Utilities - Helpers especializados */
@import './utilities/animations.css';   /* 6º Animações e transições */
@import './utilities/helpers.css';      /* 7º Utilities essenciais */
@import './utilities/states.css';       /* 8º Estados da aplicação */
@import './utilities/responsive.css';   /* 9º Helpers responsivos */
```

### 📋 Detalhamento dos Arquivos

#### 🏛️ **Core (Fundação)**

**theme.css**: Configuração unificada do Tailwind v4
- Font families customizadas
- Containers e breakpoints especiais  
- Custom properties para animação
- Extensões do sistema base do Tailwind

**tokens.css**: Design System centralizado
- Paleta de cores consistente (light/dark mode)
- Sistema de z-index organizado
- Tokens tipográficos e de espaçamento
- Variáveis semânticas (success, error, warning, info)

**reset.css**: Normalizações complementares
- Viewport height dinâmica para mobile
- Comportamentos de form melhorados
- Otimizações específicas para touch devices

**typography.css**: Sistema tipográfico avançado
- Escala fluida com `clamp()` 
- Componentes prose otimizados para leitura
- Blockquotes e listas estilizadas
- Utilities únicas (text-gradient, text-balance)

**layout.css**: Patterns de layout modernos
- Stack pattern (vertical/horizontal spacing)
- Grid auto-responsivo
- Scroll patterns com snap points
- Container system otimizado

#### 🔧 **Utilities (Especialização)**

**animations.css**: Sistema de animação completo
- Keyframes essenciais (fadeIn, slideUp, shimmer)
- Skeleton loading states
- Hover effects e micro-interactions
- Scroll-triggered animations

**helpers.css**: Utilities fundamentais
- Classes de acessibilidade (visually-hidden, skip-link)
- Aspect ratios especiais (golden, cinema)
- Debug tools para desenvolvimento

**states.css**: Estados da aplicação
- Loading states (overlays, spinners)
- Error/success states para forms
- Drag & drop interactions
- Selection e status indicators

**responsive.css**: Responsividade avançada
- Safe areas para devices com notch
- Touch targets otimizados
- Container queries
- Fluid typography com clamp()

---

## 🚀 Boas Práticas

### ✅ DO's

- ✅ Use classes do Tailwind sempre que possível
- ✅ **Prefira design tokens**: `var(--cor-primary)` ao invés de cores hardcoded
- ✅ **Use stack patterns**: `.stack-v` para espaçamento vertical consistente
- ✅ **Aproveite fluid typography**: Classes `.text-fluid` para responsividade
- ✅ Use `cn()` para merge inteligente de classes
- ✅ **Implemente estados**: `.is-loading`, `.has-error` para feedback
- ✅ **Safe areas em mobile**: `.safe-top` para dispositivos com notch
- ✅ **Considere acessibilidade**: `.touch-target`, `.visually-hidden`
- ✅ **Animações com propósito**: Use classes de animação para UX

### ❌ DON'Ts

- ❌ Evite CSS inline com `style={}`
- ❌ **Não ignore design tokens**: Evite valores hardcoded 
- ❌ **Não crie utilities redundantes**: Verifique se já existe nos arquivos utilities/
- ❌ Evite `!important` exceto em casos específicos
- ❌ **Não misture responsividade**: Use container queries quando apropriado
- ❌ **Evite animações excessivas**: Performance é prioridade
- ❌ Evite aninhamento profundo de seletores
- ❌ **Não ignore estados**: Loading, error, empty devem ser considerados

### 🎯 Patterns Recomendados

#### Layout Responsivo
```tsx
// ✅ Use patterns de layout
<div className="grid-auto-fit section">
  <div className="stack-v-sm">
    <h2 className="text-fluid-lg">Título</h2>
    <p className="lead">Descrição</p>
  </div>
</div>
```

#### Estados de Componente
```tsx
// ✅ Implemente estados visuais
<div className={cn(
  "card",
  isLoading && "is-loading",
  hasError && "has-error"
)}>
  {children}
</div>
```

#### Responsividade Mobile-First
```tsx
// ✅ Use helpers responsivos específicos
<div className="safe-top mobile-scroll-snap touch-target">
  {/* Conteúdo otimizado para mobile */}
</div>
```

---

## 📚 Recursos e Referências

### 📖 Documentação

- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [Next.js CSS Features](https://nextjs.org/docs/app/building-your-application/styling)
- [clsx Documentation](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

### 📋 Checklist de Implementação

**Antes de adicionar novo CSS:**
- [ ] Existe utility do Tailwind para isso?
- [ ] Posso usar design tokens existentes?
- [ ] É um pattern que se repete? (considere componentizar)
- [ ] Funciona em dark mode?
- [ ] É acessível? (contraste, touch targets)
- [ ] É responsivo? (mobile-first)

**Ao criar novo componente:**
- [ ] Estados de loading/error implementados
- [ ] Animações/transições suaves
- [ ] Touch targets adequados (≥44px)
- [ ] Safe areas consideradas
- [ ] Classes semânticas utilizadas

---

## 🏗️ Evolução do Sistema

Esta arquitetura CSS foi pensada para crescer organicamente:

### 📈 Próximos Passos
- **Components Layer**: Estilos específicos de componentes complexos
- **Themes**: Múltiplos temas além de light/dark
- **Motion**: Sistema de animações mais avançado

### 🔄 Manutenção
- Review dos tokens não utilizados
- Consolidação de patterns repetitivos
- Atualizações do Tailwind CSS

---

<div align="center">
  <sub>Arquitetura CSS mantida com 🎨 e ☕</sub>
</div>