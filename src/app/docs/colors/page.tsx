'use client';

import { useState } from 'react';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

// Mapeamento completo das cores do Tailwind para evitar classes dinâmicas
const colorClasses: Record<string, Record<string, string>> = {
  slate: {
    '50': 'bg-slate-50',
    '100': 'bg-slate-100',
    '200': 'bg-slate-200',
    '300': 'bg-slate-300',
    '400': 'bg-slate-400',
    '500': 'bg-slate-500',
    '600': 'bg-slate-600',
    '700': 'bg-slate-700',
    '800': 'bg-slate-800',
    '900': 'bg-slate-900',
    '950': 'bg-slate-950',
  },
  gray: {
    '50': 'bg-gray-50',
    '100': 'bg-gray-100',
    '200': 'bg-gray-200',
    '300': 'bg-gray-300',
    '400': 'bg-gray-400',
    '500': 'bg-gray-500',
    '600': 'bg-gray-600',
    '700': 'bg-gray-700',
    '800': 'bg-gray-800',
    '900': 'bg-gray-900',
    '950': 'bg-gray-950',
  },
  zinc: {
    '50': 'bg-zinc-50',
    '100': 'bg-zinc-100',
    '200': 'bg-zinc-200',
    '300': 'bg-zinc-300',
    '400': 'bg-zinc-400',
    '500': 'bg-zinc-500',
    '600': 'bg-zinc-600',
    '700': 'bg-zinc-700',
    '800': 'bg-zinc-800',
    '900': 'bg-zinc-900',
    '950': 'bg-zinc-950',
  },
  neutral: {
    '50': 'bg-neutral-50',
    '100': 'bg-neutral-100',
    '200': 'bg-neutral-200',
    '300': 'bg-neutral-300',
    '400': 'bg-neutral-400',
    '500': 'bg-neutral-500',
    '600': 'bg-neutral-600',
    '700': 'bg-neutral-700',
    '800': 'bg-neutral-800',
    '900': 'bg-neutral-900',
    '950': 'bg-neutral-950',
  },
  stone: {
    '50': 'bg-stone-50',
    '100': 'bg-stone-100',
    '200': 'bg-stone-200',
    '300': 'bg-stone-300',
    '400': 'bg-stone-400',
    '500': 'bg-stone-500',
    '600': 'bg-stone-600',
    '700': 'bg-stone-700',
    '800': 'bg-stone-800',
    '900': 'bg-stone-900',
    '950': 'bg-stone-950',
  },
  red: {
    '50': 'bg-red-50',
    '100': 'bg-red-100',
    '200': 'bg-red-200',
    '300': 'bg-red-300',
    '400': 'bg-red-400',
    '500': 'bg-red-500',
    '600': 'bg-red-600',
    '700': 'bg-red-700',
    '800': 'bg-red-800',
    '900': 'bg-red-900',
    '950': 'bg-red-950',
  },
  orange: {
    '50': 'bg-orange-50',
    '100': 'bg-orange-100',
    '200': 'bg-orange-200',
    '300': 'bg-orange-300',
    '400': 'bg-orange-400',
    '500': 'bg-orange-500',
    '600': 'bg-orange-600',
    '700': 'bg-orange-700',
    '800': 'bg-orange-800',
    '900': 'bg-orange-900',
    '950': 'bg-orange-950',
  },
  amber: {
    '50': 'bg-amber-50',
    '100': 'bg-amber-100',
    '200': 'bg-amber-200',
    '300': 'bg-amber-300',
    '400': 'bg-amber-400',
    '500': 'bg-amber-500',
    '600': 'bg-amber-600',
    '700': 'bg-amber-700',
    '800': 'bg-amber-800',
    '900': 'bg-amber-900',
    '950': 'bg-amber-950',
  },
  yellow: {
    '50': 'bg-yellow-50',
    '100': 'bg-yellow-100',
    '200': 'bg-yellow-200',
    '300': 'bg-yellow-300',
    '400': 'bg-yellow-400',
    '500': 'bg-yellow-500',
    '600': 'bg-yellow-600',
    '700': 'bg-yellow-700',
    '800': 'bg-yellow-800',
    '900': 'bg-yellow-900',
    '950': 'bg-yellow-950',
  },
  lime: {
    '50': 'bg-lime-50',
    '100': 'bg-lime-100',
    '200': 'bg-lime-200',
    '300': 'bg-lime-300',
    '400': 'bg-lime-400',
    '500': 'bg-lime-500',
    '600': 'bg-lime-600',
    '700': 'bg-lime-700',
    '800': 'bg-lime-800',
    '900': 'bg-lime-900',
    '950': 'bg-lime-950',
  },
  green: {
    '50': 'bg-green-50',
    '100': 'bg-green-100',
    '200': 'bg-green-200',
    '300': 'bg-green-300',
    '400': 'bg-green-400',
    '500': 'bg-green-500',
    '600': 'bg-green-600',
    '700': 'bg-green-700',
    '800': 'bg-green-800',
    '900': 'bg-green-900',
    '950': 'bg-green-950',
  },
  emerald: {
    '50': 'bg-emerald-50',
    '100': 'bg-emerald-100',
    '200': 'bg-emerald-200',
    '300': 'bg-emerald-300',
    '400': 'bg-emerald-400',
    '500': 'bg-emerald-500',
    '600': 'bg-emerald-600',
    '700': 'bg-emerald-700',
    '800': 'bg-emerald-800',
    '900': 'bg-emerald-900',
    '950': 'bg-emerald-950',
  },
  teal: {
    '50': 'bg-teal-50',
    '100': 'bg-teal-100',
    '200': 'bg-teal-200',
    '300': 'bg-teal-300',
    '400': 'bg-teal-400',
    '500': 'bg-teal-500',
    '600': 'bg-teal-600',
    '700': 'bg-teal-700',
    '800': 'bg-teal-800',
    '900': 'bg-teal-900',
    '950': 'bg-teal-950',
  },
  cyan: {
    '50': 'bg-cyan-50',
    '100': 'bg-cyan-100',
    '200': 'bg-cyan-200',
    '300': 'bg-cyan-300',
    '400': 'bg-cyan-400',
    '500': 'bg-cyan-500',
    '600': 'bg-cyan-600',
    '700': 'bg-cyan-700',
    '800': 'bg-cyan-800',
    '900': 'bg-cyan-900',
    '950': 'bg-cyan-950',
  },
  sky: {
    '50': 'bg-sky-50',
    '100': 'bg-sky-100',
    '200': 'bg-sky-200',
    '300': 'bg-sky-300',
    '400': 'bg-sky-400',
    '500': 'bg-sky-500',
    '600': 'bg-sky-600',
    '700': 'bg-sky-700',
    '800': 'bg-sky-800',
    '900': 'bg-sky-900',
    '950': 'bg-sky-950',
  },
  blue: {
    '50': 'bg-blue-50',
    '100': 'bg-blue-100',
    '200': 'bg-blue-200',
    '300': 'bg-blue-300',
    '400': 'bg-blue-400',
    '500': 'bg-blue-500',
    '600': 'bg-blue-600',
    '700': 'bg-blue-700',
    '800': 'bg-blue-800',
    '900': 'bg-blue-900',
    '950': 'bg-blue-950',
  },
  indigo: {
    '50': 'bg-indigo-50',
    '100': 'bg-indigo-100',
    '200': 'bg-indigo-200',
    '300': 'bg-indigo-300',
    '400': 'bg-indigo-400',
    '500': 'bg-indigo-500',
    '600': 'bg-indigo-600',
    '700': 'bg-indigo-700',
    '800': 'bg-indigo-800',
    '900': 'bg-indigo-900',
    '950': 'bg-indigo-950',
  },
  violet: {
    '50': 'bg-violet-50',
    '100': 'bg-violet-100',
    '200': 'bg-violet-200',
    '300': 'bg-violet-300',
    '400': 'bg-violet-400',
    '500': 'bg-violet-500',
    '600': 'bg-violet-600',
    '700': 'bg-violet-700',
    '800': 'bg-violet-800',
    '900': 'bg-violet-900',
    '950': 'bg-violet-950',
  },
  purple: {
    '50': 'bg-purple-50',
    '100': 'bg-purple-100',
    '200': 'bg-purple-200',
    '300': 'bg-purple-300',
    '400': 'bg-purple-400',
    '500': 'bg-purple-500',
    '600': 'bg-purple-600',
    '700': 'bg-purple-700',
    '800': 'bg-purple-800',
    '900': 'bg-purple-900',
    '950': 'bg-purple-950',
  },
  fuchsia: {
    '50': 'bg-fuchsia-50',
    '100': 'bg-fuchsia-100',
    '200': 'bg-fuchsia-200',
    '300': 'bg-fuchsia-300',
    '400': 'bg-fuchsia-400',
    '500': 'bg-fuchsia-500',
    '600': 'bg-fuchsia-600',
    '700': 'bg-fuchsia-700',
    '800': 'bg-fuchsia-800',
    '900': 'bg-fuchsia-900',
    '950': 'bg-fuchsia-950',
  },
  pink: {
    '50': 'bg-pink-50',
    '100': 'bg-pink-100',
    '200': 'bg-pink-200',
    '300': 'bg-pink-300',
    '400': 'bg-pink-400',
    '500': 'bg-pink-500',
    '600': 'bg-pink-600',
    '700': 'bg-pink-700',
    '800': 'bg-pink-800',
    '900': 'bg-pink-900',
    '950': 'bg-pink-950',
  },
  rose: {
    '50': 'bg-rose-50',
    '100': 'bg-rose-100',
    '200': 'bg-rose-200',
    '300': 'bg-rose-300',
    '400': 'bg-rose-400',
    '500': 'bg-rose-500',
    '600': 'bg-rose-600',
    '700': 'bg-rose-700',
    '800': 'bg-rose-800',
    '900': 'bg-rose-900',
    '950': 'bg-rose-950',
  },
};

// Tokens customizados do projeto
const customTokens = {
  backgrounds: [
    { name: '--cor-bg', label: 'Background Principal', value: 'var(--cor-bg)' },
    { name: '--cor-bg-subtle', label: 'Background Sutil', value: 'var(--cor-bg-subtle)' },
    { name: '--cor-bg-muted', label: 'Background Muted', value: 'var(--cor-bg-muted)' },
  ],
  text: [
    { name: '--cor-text', label: 'Texto Principal', value: 'var(--cor-text)' },
    { name: '--cor-text-muted', label: 'Texto Secundário', value: 'var(--cor-text-muted)' },
    { name: '--cor-text-subtle', label: 'Texto Sutil', value: 'var(--cor-text-subtle)' },
  ],
  borders: [
    { name: '--cor-border', label: 'Borda Padrão', value: 'var(--cor-border)' },
    { name: '--cor-border-strong', label: 'Borda Forte', value: 'var(--cor-border-strong)' },
  ],
  primary: [
    { name: '--cor-primary', label: 'Cor Primária', value: 'var(--cor-primary)' },
    { name: '--cor-primary-hover', label: 'Primária Hover', value: 'var(--cor-primary-hover)' },
  ],
  semantic: {
    success: [
      { shade: '100', class: 'bg-green-100' },
      { shade: '300', class: 'bg-green-300' },
      { shade: '500', class: 'bg-green-500' },
      { shade: '600', class: 'bg-green-600' },
      { shade: '700', class: 'bg-green-700' },
    ],
    error: [
      { shade: '100', class: 'bg-red-100' },
      { shade: '300', class: 'bg-red-300' },
      { shade: '500', class: 'bg-red-500' },
      { shade: '600', class: 'bg-red-600' },
      { shade: '700', class: 'bg-red-700' },
    ],
    warning: [
      { shade: '100', class: 'bg-yellow-100' },
      { shade: '300', class: 'bg-yellow-300' },
      { shade: '500', class: 'bg-yellow-500' },
      { shade: '600', class: 'bg-yellow-600' },
      { shade: '700', class: 'bg-yellow-700' },
    ],
    info: [
      { shade: '100', class: 'bg-blue-100' },
      { shade: '300', class: 'bg-blue-300' },
      { shade: '500', class: 'bg-blue-500' },
      { shade: '600', class: 'bg-blue-600' },
      { shade: '700', class: 'bg-blue-700' },
    ],
  }
};

// Color utilities documentation
const colorUtilities = [
  {
    utility: 'bg-*',
    description: 'Define a cor de fundo de um elemento',
    example: 'bg-blue-500',
    demo: 'bg-blue-500',
  },
  {
    utility: 'text-*',
    description: 'Define a cor do texto de um elemento',
    example: 'text-blue-500',
    demo: 'text-blue-500',
  },
  {
    utility: 'decoration-*',
    description: 'Define a cor da decoração de texto (underline, line-through, etc.)',
    example: 'decoration-blue-500',
    demo: 'underline decoration-blue-500',
  },
  {
    utility: 'border-*',
    description: 'Define a cor da borda de um elemento',
    example: 'border-blue-500',
    demo: 'border-2 border-blue-500',
  },
  {
    utility: 'outline-*',
    description: 'Define a cor do outline de um elemento',
    example: 'outline-blue-500',
    demo: 'outline outline-2 outline-blue-500',
  },
  {
    utility: 'shadow-*',
    description: 'Define a cor da sombra de um elemento',
    example: 'shadow-blue-500/50',
    demo: 'shadow-lg shadow-blue-500/50',
  },
  {
    utility: 'inset-shadow-*',
    description: 'Define a cor da sombra interna de um elemento',
    example: 'inset-shadow-blue-500/50',
    demo: 'shadow-inner inset-shadow-blue-500/50',
  },
  {
    utility: 'ring-*',
    description: 'Define a cor do ring shadow de um elemento',
    example: 'ring-blue-500',
    demo: 'ring-2 ring-blue-500',
  },
  {
    utility: 'inset-ring-*',
    description: 'Define a cor do ring shadow interno de um elemento',
    example: 'inset-ring-blue-500',
    demo: 'ring-2 ring-inset inset-ring-blue-500',
  },
  {
    utility: 'accent-*',
    description: 'Define a cor de destaque de controles de formulário (checkboxes, radio buttons)',
    example: 'accent-blue-500',
    demo: 'accent-blue-500',
  },
  {
    utility: 'caret-*',
    description: 'Define a cor do cursor (caret) em campos de formulário',
    example: 'caret-blue-500',
    demo: 'caret-blue-500',
  },
  {
    utility: 'fill-*',
    description: 'Define a cor de preenchimento de elementos SVG',
    example: 'fill-blue-500',
    demo: 'fill-blue-500',
  },
  {
    utility: 'stroke-*',
    description: 'Define a cor do traço de elementos SVG',
    example: 'stroke-blue-500',
    demo: 'stroke-blue-500',
  },
];

// Opacity modifiers
const opacityModifiers = [
  { value: '0', label: 'Totalmente transparente' },
  { value: '5', label: '5% de opacidade' },
  { value: '10', label: '10% de opacidade' },
  { value: '15', label: '15% de opacidade' },
  { value: '20', label: '20% de opacidade' },
  { value: '25', label: '25% de opacidade' },
  { value: '30', label: '30% de opacidade' },
  { value: '35', label: '35% de opacidade' },
  { value: '40', label: '40% de opacidade' },
  { value: '45', label: '45% de opacidade' },
  { value: '50', label: '50% de opacidade' },
  { value: '55', label: '55% de opacidade' },
  { value: '60', label: '60% de opacidade' },
  { value: '65', label: '65% de opacidade' },
  { value: '70', label: '70% de opacidade' },
  { value: '75', label: '75% de opacidade' },
  { value: '80', label: '80% de opacidade' },
  { value: '85', label: '85% de opacidade' },
  { value: '90', label: '90% de opacidade' },
  { value: '95', label: '95% de opacidade' },
  { value: '100', label: '100% de opacidade (opaco)' },
];

export default function ColorsPage() {
  const [activeTab, setActiveTab] = useState<'tailwind' | 'utilities' | 'opacity' | 'custom'>('tailwind');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOpacity, setSelectedOpacity] = useState('50');
  const { copyToClipboard, copiedText } = useCopyToClipboard(2000);

  const filteredColors = Object.entries(colorClasses).filter(([name]) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-zinc-900">Sistema de Cores</h1>
          <p className="text-zinc-600 mt-2">
            Documentação completa das cores do Tailwind 4 e tokens customizados
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-zinc-200 p-1 inline-flex flex-wrap">
          <button
            onClick={() => setActiveTab('tailwind')}
            className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'tailwind'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Cores Tailwind
          </button>
          <button
            onClick={() => setActiveTab('utilities')}
            className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'utilities'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Utilities
          </button>
          <button
            onClick={() => setActiveTab('opacity')}
            className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'opacity'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Opacidade
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-4 sm:px-6 py-2 rounded-md font-medium transition-colors ${
              activeTab === 'custom'
                ? 'bg-zinc-900 text-white'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Tokens Custom
          </button>
        </div>

        {/* Search (apenas para Tailwind) */}
        {activeTab === 'tailwind' && (
          <div className="mt-6">
            <input
              type="text"
              placeholder="Buscar cor... (ex: blue, red, green)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-12">
        {activeTab === 'tailwind' ? (
          <div className="space-y-8">
            {filteredColors.map(([colorName, shades]) => (
              <div key={colorName} className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-zinc-200">
                  <h2 className="text-xl font-semibold capitalize text-zinc-900">{colorName}</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {Object.entries(shades).map(([shade, className]) => {
                      
                      return (
                        <button
                          key={shade}
                          onClick={() => copyToClipboard(className)}
                          className="group relative"
                        >
                          <div
                            className={`${className} h-20 rounded-lg shadow-sm group-hover:shadow-md transition-shadow relative overflow-hidden`}
                          >
                            {copiedText === className && (
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <span className="text-white text-sm font-medium">Copiado!</span>
                              </div>
                            )}
                          </div>
                          <div className="mt-2 text-left">
                            <p className="text-sm font-medium text-zinc-900">{shade}</p>
                            <p className="text-xs text-zinc-500 font-mono">{className}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : activeTab === 'utilities' ? (
          <div className="space-y-6">
            {/* Introdução */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Utilities de Cor</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  O Tailwind oferece várias utilities para aplicar cores em diferentes propriedades CSS
                </p>
              </div>
              <div className="p-6">
                <div className="prose max-w-none text-zinc-600">
                  <p>
                    Todas as cores disponíveis no Tailwind podem ser usadas com essas utilities. 
                    A sintaxe padrão é <code className="bg-zinc-100 px-2 py-1 rounded text-zinc-900">[utility]-[cor]-[shade]</code>.
                  </p>
                  <p className="mt-2">
                    Por exemplo: <code className="bg-zinc-100 px-2 py-1 rounded text-zinc-900">bg-blue-500</code>, 
                    {' '}<code className="bg-zinc-100 px-2 py-1 rounded text-zinc-900">text-red-600</code>, 
                    {' '}<code className="bg-zinc-100 px-2 py-1 rounded text-zinc-900">border-green-400</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Tabela de Utilities */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900">Lista de Utilities</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50 border-b border-zinc-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Utility
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Descrição
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Exemplo
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Demo
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {colorUtilities.map((utility) => (
                      <tr key={utility.utility} className="hover:bg-zinc-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => copyToClipboard(utility.utility)}
                            className="font-mono text-sm text-zinc-900 hover:text-blue-600 transition-colors"
                          >
                            {utility.utility}
                            {copiedText === utility.utility && (
                              <span className="ml-2 text-xs text-green-600">Copiado!</span>
                            )}
                          </button>
                        </td>
                        <td className="px-6 py-4 text-sm text-zinc-600">
                          {utility.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <code className="bg-zinc-100 px-2 py-1 rounded text-xs text-zinc-900">
                            {utility.example}
                          </code>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center">
                            {utility.utility === 'bg-*' && (
                              <div className="w-16 h-16 bg-blue-500 rounded-lg shadow-sm" />
                            )}
                            {utility.utility === 'text-*' && (
                              <p className="text-blue-500 font-semibold text-lg">Texto</p>
                            )}
                            {utility.utility === 'decoration-*' && (
                              <p className="underline decoration-blue-500 decoration-2 text-lg">Texto</p>
                            )}
                            {utility.utility === 'border-*' && (
                              <div className="w-16 h-16 bg-white border-2 border-blue-500 rounded-lg" />
                            )}
                            {utility.utility === 'outline-*' && (
                              <div className="w-16 h-16 bg-white outline outline-2 outline-blue-500 rounded-lg" />
                            )}
                            {utility.utility === 'shadow-*' && (
                              <div className="w-16 h-16 bg-white rounded-lg shadow-lg shadow-blue-500/50" />
                            )}
                            {utility.utility === 'inset-shadow-*' && (
                              <div className="w-16 h-16 bg-zinc-100 rounded-lg shadow-inner shadow-blue-500/50" />
                            )}
                            {utility.utility === 'ring-*' && (
                              <div className="w-16 h-16 bg-white rounded-lg ring-2 ring-blue-500" />
                            )}
                            {utility.utility === 'inset-ring-*' && (
                              <div className="w-16 h-16 bg-white rounded-lg ring-2 ring-inset ring-blue-500" />
                            )}
                            {utility.utility === 'accent-*' && (
                              <input type="checkbox" className="w-5 h-5 accent-blue-500" defaultChecked />
                            )}
                            {utility.utility === 'caret-*' && (
                              <input 
                                type="text" 
                                className="px-2 py-1 border border-zinc-300 rounded caret-blue-500" 
                                placeholder="Digite aqui"
                                style={{ caretColor: 'rgb(59 130 246)' }}
                              />
                            )}
                            {utility.utility === 'fill-*' && (
                              <svg className="w-8 h-8 fill-blue-500" viewBox="0 0 20 20">
                                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3.5a1.5 1.5 0 010 3H14a1 1 0 00-1 1v3.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1H5.5a1.5 1.5 0 010-3H9a1 1 0 001-1v-.5z" />
                              </svg>
                            )}
                            {utility.utility === 'stroke-*' && (
                              <svg className="w-8 h-8 stroke-blue-500 fill-none" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                              </svg>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cores especiais */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900">Cores Especiais</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-medium text-zinc-900 mb-2">Cores Adicionais</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-black rounded shadow-sm" />
                      <div>
                        <p className="text-sm font-medium">black</p>
                        <code className="text-xs text-zinc-500">*-black</code>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white border border-zinc-300 rounded shadow-sm" />
                      <div>
                        <p className="text-sm font-medium">white</p>
                        <code className="text-xs text-zinc-500">*-white</code>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-transparent border-2 border-dashed border-zinc-300 rounded" />
                      <div>
                        <p className="text-sm font-medium">transparent</p>
                        <code className="text-xs text-zinc-500">*-transparent</code>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-10 h-10 rounded shadow-sm" 
                        style={{ 
                          background: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                          backgroundSize: '10px 10px',
                          backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px'
                        }}
                      />
                      <div>
                        <p className="text-sm font-medium">current</p>
                        <code className="text-xs text-zinc-500">*-current</code>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-zinc-600">
                    <strong>current</strong> usa a cor do texto atual (currentColor), útil para herança de cor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : activeTab === 'opacity' ? (
          <div className="space-y-6">
            {/* Introdução */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Ajustando Opacidade</h2>
                <p className="text-sm text-zinc-600 mt-1">
                  Controle a opacidade das cores usando modificadores de opacidade
                </p>
              </div>
              <div className="p-6">
                <div className="prose max-w-none text-zinc-600">
                  <p>
                    Você pode controlar a opacidade de qualquer utility de cor adicionando um modificador de opacidade.
                    Use a sintaxe <code className="bg-zinc-100 px-2 py-1 rounded text-zinc-900">[utility]-[cor]-[shade]/[opacidade]</code>.
                  </p>
                  <p className="mt-2">
                    Por exemplo: <code className="bg-zinc-100 px-2 py-1 rounded text-zinc-900">bg-blue-500/50</code> 
                    {' '}aplica um background azul com 50% de opacidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Demonstração Interativa */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900">Demonstração Interativa</h3>
              </div>
              <div className="p-6">
                {/* Seletor de Opacidade */}
                <div className="mb-6">
                  <label htmlFor="opacity-select" className="block text-sm font-medium text-zinc-700 mb-2">
                    Selecione a opacidade:
                  </label>
                  <select 
                    id="opacity-select"
                    value={selectedOpacity}
                    onChange={(e) => setSelectedOpacity(e.target.value)}
                    className="w-full max-w-xs px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900"
                  >
                    {opacityModifiers.map((mod) => (
                      <option key={mod.value} value={mod.value}>
                        {mod.value} - {mod.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid de exemplos */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Background */}
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Background com Opacidade</h4>
                    <div className="space-y-3">
                      <button
                        onClick={() => copyToClipboard(`bg-blue-500/${selectedOpacity}`)}
                        className="w-full group"
                      >
                        <div 
                          className={`p-6 rounded-lg bg-blue-500 transition-all`}
                          style={{ opacity: parseInt(selectedOpacity) / 100 }}
                        >
                          <p className="text-white font-medium">
                            bg-blue-500/{selectedOpacity}
                          </p>
                        </div>
                        {copiedText === `bg-blue-500/${selectedOpacity}` && (
                          <p className="text-sm text-green-600 mt-2">Copiado!</p>
                        )}
                      </button>
                      <div className="bg-zinc-100 p-3 rounded">
                        <code className="text-sm">bg-blue-500/{selectedOpacity}</code>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Texto com Opacidade</h4>
                    <div className="space-y-3">
                      <button
                        onClick={() => copyToClipboard(`text-blue-500/${selectedOpacity}`)}
                        className="w-full group"
                      >
                        <div className="p-6 rounded-lg bg-zinc-50">
                          <p 
                            className={`text-blue-500 font-bold text-2xl transition-all`}
                            style={{ opacity: parseInt(selectedOpacity) / 100 }}
                          >
                            Texto com Opacidade
                          </p>
                        </div>
                        {copiedText === `text-blue-500/${selectedOpacity}` && (
                          <p className="text-sm text-green-600 mt-2">Copiado!</p>
                        )}
                      </button>
                      <div className="bg-zinc-100 p-3 rounded">
                        <code className="text-sm">text-blue-500/{selectedOpacity}</code>
                      </div>
                    </div>
                  </div>

                  {/* Border */}
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Borda com Opacidade</h4>
                    <div className="space-y-3">
                      <button
                        onClick={() => copyToClipboard(`border-blue-500/${selectedOpacity}`)}
                        className="w-full group"
                      >
                        <div 
                          className={`p-6 rounded-lg bg-white border-4 border-blue-500 transition-all`}
                          style={{ borderColor: `rgba(59, 130, 246, ${parseInt(selectedOpacity) / 100})` }}
                        >
                          <p className="text-zinc-900 font-medium">
                            border-blue-500/{selectedOpacity}
                          </p>
                        </div>
                        {copiedText === `border-blue-500/${selectedOpacity}` && (
                          <p className="text-sm text-green-600 mt-2">Copiado!</p>
                        )}
                      </button>
                      <div className="bg-zinc-100 p-3 rounded">
                        <code className="text-sm">border-blue-500/{selectedOpacity}</code>
                      </div>
                    </div>
                  </div>

                  {/* Shadow */}
                  <div>
                    <h4 className="font-medium text-zinc-900 mb-3">Sombra com Opacidade</h4>
                    <div className="space-y-3">
                      <button
                        onClick={() => copyToClipboard(`shadow-blue-500/${selectedOpacity}`)}
                        className="w-full group"
                      >
                        <div 
                          className="p-6 rounded-lg bg-white shadow-xl transition-all"
                          style={{ 
                            boxShadow: `0 20px 25px -5px rgba(59, 130, 246, ${parseInt(selectedOpacity) / 100 * 0.5}), 0 10px 10px -5px rgba(59, 130, 246, ${parseInt(selectedOpacity) / 100 * 0.25})` 
                          }}
                        >
                          <p className="text-zinc-900 font-medium">
                            shadow-blue-500/{selectedOpacity}
                          </p>
                        </div>
                        {copiedText === `shadow-blue-500/${selectedOpacity}` && (
                          <p className="text-sm text-green-600 mt-2">Copiado!</p>
                        )}
                      </button>
                      <div className="bg-zinc-100 p-3 rounded">
                        <code className="text-sm">shadow-blue-500/{selectedOpacity}</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Valores de Opacidade */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900">Valores de Opacidade Disponíveis</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {opacityModifiers.map((mod) => (
                    <button
                      key={mod.value}
                      onClick={() => copyToClipboard(`/${mod.value}`)}
                      className="group text-center"
                    >
                      <div 
                        className="w-full h-20 bg-blue-500 rounded-lg mb-2 transition-all group-hover:scale-105"
                        style={{ opacity: parseInt(mod.value) / 100 }}
                      />
                      <p className="text-sm font-medium text-zinc-900">/{mod.value}</p>
                      {copiedText === `/${mod.value}` && (
                        <p className="text-xs text-green-600">Copiado!</p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Exemplos Práticos */}
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-900">Exemplos Práticos</h3>
              </div>
              <div className="p-6 space-y-6">
                {/* Overlay */}
                <div>
                  <h4 className="font-medium text-zinc-900 mb-3">Overlay com Transparência</h4>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img 
                      src="https://via.placeholder.com/800x400/3b82f6/ffffff?text=Imagem+de+Fundo" 
                      alt="Background"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <p className="text-white text-xl font-bold">bg-black/50</p>
                    </div>
                  </div>
                </div>

                {/* Gradiente com Opacidade */}
                <div>
                  <h4 className="font-medium text-zinc-900 mb-3">Gradiente com Opacidade Variável</h4>
                  <div className="h-32 rounded-lg bg-gradient-to-r from-blue-500/100 via-blue-500/50 to-blue-500/0">
                    <div className="h-full flex items-center justify-center">
                      <p className="text-white font-bold">from-blue-500/100 via-blue-500/50 to-blue-500/0</p>
                    </div>
                  </div>
                </div>

                {/* Glass Effect */}
                <div>
                  <h4 className="font-medium text-zinc-900 mb-3">Efeito Glass (Glassmorphism)</h4>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl">
                        <p className="text-white font-bold">bg-white/30 backdrop-blur-md</p>
                        <p className="text-white/80 text-sm mt-2">border-white/20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Backgrounds */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Backgrounds</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.backgrounds.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-24 h-24 rounded-lg border-2 border-zinc-300 shadow-sm group-hover:shadow-md transition-shadow"
                        style={{ backgroundColor: token.value }}
                      />
                      <div className="text-left flex-1">
                        <p className="font-semibold text-zinc-900">{token.label}</p>
                        <p className="text-sm text-zinc-600 font-mono">{token.name}</p>
                        {copiedText === token.name && (
                          <p className="text-sm text-green-600 mt-1">Copiado!</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Text Colors */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Cores de Texto</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.text.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-24 bg-white rounded-lg border-2 border-zinc-300 shadow-sm group-hover:shadow-md transition-shadow flex items-center justify-center">
                        <span style={{ color: token.value }} className="text-2xl font-bold">Aa</span>
                      </div>
                      <div className="text-left flex-1">
                        <p className="font-semibold text-zinc-900">{token.label}</p>
                        <p className="text-sm text-zinc-600 font-mono">{token.name}</p>
                        {copiedText === token.name && (
                          <p className="text-sm text-green-600 mt-1">Copiado!</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Borders */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Bordas</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.borders.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-24 h-24 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                        style={{ border: `3px solid ${token.value}` }}
                      />
                      <div className="text-left flex-1">
                        <p className="font-semibold text-zinc-900">{token.label}</p>
                        <p className="text-sm text-zinc-600 font-mono">{token.name}</p>
                        {copiedText === token.name && (
                          <p className="text-sm text-green-600 mt-1">Copiado!</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Primary Colors */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Cores Primárias</h2>
              </div>
              <div className="p-6 space-y-4">
                {customTokens.primary.map((token) => (
                  <button
                    key={token.name}
                    onClick={() => copyToClipboard(token.name)}
                    className="w-full group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-24 h-24 rounded-lg shadow-sm group-hover:shadow-md transition-shadow"
                        style={{ backgroundColor: token.value }}
                      />
                      <div className="text-left flex-1">
                        <p className="font-semibold text-zinc-900">{token.label}</p>
                        <p className="text-sm text-zinc-600 font-mono">{token.name}</p>
                        {copiedText === token.name && (
                          <p className="text-sm text-green-600 mt-1">Copiado!</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Semantic Colors */}
            <section className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-zinc-200">
                <h2 className="text-xl font-semibold text-zinc-900">Cores Semânticas</h2>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(customTokens.semantic).map(([type, shades]) => (
                  <div key={type}>
                    <h3 className="text-lg font-medium text-zinc-900 capitalize mb-3">{type}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {shades.map((item) => {
                        const varName = `--color-${type}-${item.shade}`;
                        return (
                          <button
                            key={varName}
                            onClick={() => copyToClipboard(varName)}
                            className="group"
                          >
                            <div
                              className={`${item.class} h-16 rounded-lg shadow-sm group-hover:shadow-md transition-shadow`}
                            />
                            <p className="text-xs text-zinc-600 font-mono mt-2">{item.shade}</p>
                            {copiedText === varName && (
                              <p className="text-xs text-green-600">Copiado!</p>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}