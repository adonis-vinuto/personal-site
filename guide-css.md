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
│   ├── globals.css         # Configuração principal e layers
│   ├── components/         # Estilos de componentes (futuro)
│   │   ├── buttons.css     # Variantes de botões
│   │   └── cards.css       # Estilos de cards
│   └── utilities/          # Utilities customizadas (futuro)
│       └── animations.css  # Animações reutilizáveis
```

---

## 🚀 Boas Práticas

### ✅ DO's

- ✅ Use classes do Tailwind sempre que possível
- ✅ Crie componentes para padrões repetitivos
- ✅ Use `cn()` para merge de classes
- ✅ Mantenha especificidade baixa
- ✅ Prefira composição sobre herança
- ✅ Use design tokens para valores consistentes

### ❌ DON'Ts

- ❌ Evite CSS inline com `style={}`
- ❌ Não crie utilities que duplicam Tailwind
- ❌ Evite `!important` exceto em casos específicos
- ❌ Não use classes arbitrárias excessivamente
- ❌ Evite aninhamento profundo de seletores

---

## 📚 Recursos e Referências

### 📖 Documentação

- [Tailwind CSS 4 Docs](https://tailwindcss.com/docs)
- [Next.js CSS Features](https://nextjs.org/docs/app/building-your-application/styling)
- [clsx Documentation](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

### 🛠️ Ferramentas Úteis

- **Tailwind IntelliSense**: Extensão VS Code para autocomplete
- **Tailwind CSS Debug**: Chrome extension para debug
- **Headwind**: Organização automática de classes
- **Tailwind Play**: Playground online

---

<div align="center">
  <sub>Arquitetura CSS mantida com 🎨 e ☕</sub>
</div>