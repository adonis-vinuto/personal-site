import { ColorUtility, SpecialColor, ColorMappings } from './types';

export const COLOR_UTILITIES: ColorUtility[] = [
  {
    utility: 'bg',
    label: 'Background',
    description: 'Cor de fundo',
    example: 'bg-blue-500',
    demoType: 'background'
  },
  {
    utility: 'text',
    label: 'Text',
    description: 'Cor do texto',
    example: 'text-blue-500',
    demoType: 'text'
  },
  {
    utility: 'border',
    label: 'Border',
    description: 'Cor da borda',
    example: 'border-blue-500',
    demoType: 'border'
  },
  {
    utility: 'outline',
    label: 'Outline',
    description: 'Cor do outline',
    example: 'outline-blue-500',
    demoType: 'outline'
  },
  {
    utility: 'ring',
    label: 'Ring',
    description: 'Cor do ring shadow',
    example: 'ring-blue-500',
    demoType: 'ring'
  },
  {
    utility: 'shadow',
    label: 'Shadow',
    description: 'Cor da sombra',
    example: 'shadow-blue-500',
    demoType: 'shadow'
  },
  {
    utility: 'decoration',
    label: 'Decoration',
    description: 'Cor da decoração de texto',
    example: 'decoration-blue-500',
    demoType: 'decoration'
  },
  {
    utility: 'fill',
    label: 'Fill',
    description: 'Cor de preenchimento SVG',
    example: 'fill-blue-500',
    demoType: 'special'
  },
  {
    utility: 'stroke',
    label: 'Stroke',
    description: 'Cor do traço SVG',
    example: 'stroke-blue-500',
    demoType: 'special'
  },
  {
    utility: 'accent',
    label: 'Accent',
    description: 'Cor de destaque de controles',
    example: 'accent-blue-500',
    demoType: 'special'
  },
  {
    utility: 'caret',
    label: 'Caret',
    description: 'Cor do cursor',
    example: 'caret-blue-500',
    demoType: 'special'
  }
];

function generateColorVariations(colorName: string) {
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  const utilities = ['bg', 'text', 'border', 'outline', 'ring', 'shadow', 'decoration', 'fill', 'stroke', 'accent', 'caret'];
  
  const colorData: Record<string, Record<string, string>> = {};
  
  utilities.forEach(utility => {
    colorData[utility] = {};
    shades.forEach(shade => {
      colorData[utility][shade] = `${utility}-${colorName}-${shade}`;
    });
  });
  
  return colorData;
}

export const COLOR_MAPPINGS: ColorMappings = {
  
  slate: generateColorVariations('slate'),
  gray: generateColorVariations('gray'),
  zinc: generateColorVariations('zinc'),
  neutral: generateColorVariations('neutral'),
  stone: generateColorVariations('stone'),
  
  
  red: generateColorVariations('red'),
  orange: generateColorVariations('orange'),
  amber: generateColorVariations('amber'),
  yellow: generateColorVariations('yellow'),
  lime: generateColorVariations('lime'),
  green: generateColorVariations('green'),
  emerald: generateColorVariations('emerald'),
  teal: generateColorVariations('teal'),
  cyan: generateColorVariations('cyan'),
  sky: generateColorVariations('sky'),
  blue: generateColorVariations('blue'),
  indigo: generateColorVariations('indigo'),
  violet: generateColorVariations('violet'),
  purple: generateColorVariations('purple'),
  fuchsia: generateColorVariations('fuchsia'),
  pink: generateColorVariations('pink'),
  rose: generateColorVariations('rose')
};

export const SPECIAL_COLORS: SpecialColor[] = [
  { name: 'black', label: 'Black', class: 'bg-black' },
  { name: 'white', label: 'White', class: 'bg-white' },
  { name: 'transparent', label: 'Transparent', class: 'bg-transparent' },
  { name: 'current', label: 'Current Color', class: 'bg-current' }
];

export const COLOR_NAMES = Object.keys(COLOR_MAPPINGS);

export const COLOR_SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

export const OPACITY_VALUES = [
  { value: '0', label: '0%' },
  { value: '5', label: '5%' },
  { value: '10', label: '10%' },
  { value: '15', label: '15%' },
  { value: '20', label: '20%' },
  { value: '25', label: '25%' },
  { value: '30', label: '30%' },
  { value: '35', label: '35%' },
  { value: '40', label: '40%' },
  { value: '45', label: '45%' },
  { value: '50', label: '50%' },
  { value: '55', label: '55%' },
  { value: '60', label: '60%' },
  { value: '65', label: '65%' },
  { value: '70', label: '70%' },
  { value: '75', label: '75%' },
  { value: '80', label: '80%' },
  { value: '85', label: '85%' },
  { value: '90', label: '90%' },
  { value: '95', label: '95%' },
  { value: '100', label: '100%' }
];