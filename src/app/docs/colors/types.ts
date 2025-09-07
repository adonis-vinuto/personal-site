export interface ColorShade {
  name: string;
  shade: string;
  className: string;
  description?: string;
}

export interface ColorGroup {
  name: string;
  label: string;
  shades: ColorShade[];
}

export interface UtilityConfig {
  id: string;
  label: string;
  description: string;
  example: string;
  demoType: 'background' | 'text' | 'border' | 'shadow' | 'ring' | 'decoration' | 'outline' | 'fill' | 'stroke' | 'accent' | 'caret';
}