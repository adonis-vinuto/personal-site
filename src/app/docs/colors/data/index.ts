// src/app/docs/colors/data/index.ts

import { utilities } from './utilities';

// ✅ Implementados
import { backgroundColors, specialBackgrounds } from './backgrounds';
import { textColors, specialTextColors } from './text';
import { borderColors, specialBorders } from './borders';
import { ringColors, specialRings } from './rings';
import { shadowColors, specialShadows } from './shadows';
import { outlineColors, specialOutlines } from './outlines';
import { decorationColors, specialDecorations } from './decorations';
import { fillColors, specialFills } from './fills';
import { strokeColors, specialStrokes } from './strokes';
import { accentColors, specialAccents } from './accents';
import { caretColors, specialCarets } from './carets';

export { utilities };

// Mapeamento das cores por utility
export const colorsByUtility = {
  // ✅ IMPLEMENTADOS
  bg: {
    colors: backgroundColors,
    specials: specialBackgrounds
  },
  text: {
    colors: textColors,
    specials: specialTextColors
  },
  border: {
    colors: borderColors,
    specials: specialBorders
  },
  ring: {
    colors: ringColors,
    specials: specialRings
  },
  
  shadow: {
    colors: shadowColors,
    specials: specialShadows
  },
  
  outline: {
    colors: outlineColors,
    specials: specialOutlines
  },
  
  decoration: {
    colors: decorationColors,
    specials: specialDecorations
  },
  
  fill: {
    colors: fillColors,
    specials: specialFills
  },
  
  stroke: {
    colors: strokeColors,
    specials: specialStrokes
  },
  
  accent: {
    colors: accentColors,
    specials: specialAccents
  },
  
  caret: {
    colors: caretColors,
    specials: specialCarets
  }
};

// Função helper para pegar dados de uma utility específica
export function getColorsForUtility(utilityId: string) {
  return colorsByUtility[utilityId as keyof typeof colorsByUtility] || { colors: [], specials: [] };
}

// Lista de utilities implementadas (para debugging)
export const implementedUtilities = Object.keys(colorsByUtility);
export const pendingUtilities = utilities
  .filter(u => !implementedUtilities.includes(u.id))
  .map(u => u.id);

// Status de implementação
export const implementationStatus = {
  total: utilities.length,
  implemented: implementedUtilities.length,
  pending: pendingUtilities.length,
  percentage: Math.round((implementedUtilities.length / utilities.length) * 100)
};