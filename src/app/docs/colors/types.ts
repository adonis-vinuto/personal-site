export interface ColorShade {
  shade: string;
  class: string;
  hex?: string;
}

export interface ColorGroup {
  name: string;
  shades: Record<string, string>;
}

export interface ColorUtility {
  utility: string;
  label: string;
  description: string;
  example: string;
  demoType: 'background' | 'text' | 'border' | 'shadow' | 'ring' | 'decoration' | 'outline' | 'special';
}

export interface OpacityModifier {
  value: string;
  label: string;
  percentage: number;
}

export type ColorMappings = Record<string, Record<string, Record<string, string>>>;

export interface SpecialColor {
  name: string;
  label: string;
  class: string;
}