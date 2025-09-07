// src/app/docs/colors/utils/opacityUtils.ts

import { ColorGroup, ColorShade } from '../types';

/**
 * Extrai o valor de opacidade de uma shade string
 * Ex: "50/25" → "25", "50" → "none"
 */
export function extractOpacityFromShade(shade: string): string {
  if (shade.includes('/')) {
    return shade.split('/')[1];
  }
  return 'none';
}

/**
 * Filtra cores por opacidades selecionadas
 */
export function filterColorsByOpacity(
  colorGroups: ColorGroup[], 
  selectedOpacities: string[]
): ColorGroup[] {
  // Se nenhuma opacidade selecionada, mostra todas
  if (selectedOpacities.length === 0) {
    return colorGroups;
  }

  return colorGroups.map(group => ({
    ...group,
    shades: group.shades.filter(shade => {
      const opacityValue = extractOpacityFromShade(shade.shade);
      return selectedOpacities.includes(opacityValue);
    })
  })).filter(group => group.shades.length > 0); // Remove grupos sem cores
}

/**
 * Conta quantas cores têm uma determinada opacidade
 */
export function countColorsByOpacity(
  colorGroups: ColorGroup[], 
  opacity: string
): number {
  return colorGroups.reduce((total, group) => {
    return total + group.shades.filter(shade => {
      const opacityValue = extractOpacityFromShade(shade.shade);
      return opacityValue === opacity;
    }).length;
  }, 0);
}

/**
 * Retorna estatísticas de opacidade para um conjunto de cores
 */
export function getOpacityStats(colorGroups: ColorGroup[]) {
  const stats = {
    none: 0,
    '0': 0,
    '25': 0,
    '50': 0,
    '75': 0,
    '100': 0,
  };

  colorGroups.forEach(group => {
    group.shades.forEach(shade => {
      const opacity = extractOpacityFromShade(shade.shade);
      if (opacity in stats) {
        stats[opacity as keyof typeof stats]++;
      }
    });
  });

  return stats;
}

/**
 * Cria uma versão filtrada de cores especiais por opacidade
 */
export function filterSpecialColorsByOpacity(
  specialColors: ColorShade[], 
  selectedOpacities: string[]
): ColorShade[] {
  if (selectedOpacities.length === 0) {
    return specialColors;
  }

  return specialColors.filter(color => {
    const opacityValue = extractOpacityFromShade(color.shade || color.name);
    return selectedOpacities.includes(opacityValue);
  });
}