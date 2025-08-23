import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function para combinar classes do Tailwind de forma segura
 * - Usa clsx para concatenar classes condicionalmente
 * - Usa tailwind-merge para resolver conflitos de classes do Tailwind
 * 
 * @example
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4'
 * cn('text-red-500', condition && 'text-blue-500')
 * cn(['text-sm', 'font-bold'], { 'opacity-50': isDisabled })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}