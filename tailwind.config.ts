// No Tailwind 4, a configuração é feita via CSS com @theme
// Este arquivo existe apenas para compatibilidade com tooling

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [], // Detecção automática no Tailwind 4
  theme: {},   // Configurado via @theme no CSS
  plugins: [], // Plugins são importados diretamente no CSS
}

export default config