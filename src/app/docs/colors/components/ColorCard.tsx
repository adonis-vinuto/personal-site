// src/app/docs/colors/components/ColorCard.tsx

import React from 'react';
import { ColorShade, UtilityConfig } from '../types';

interface ColorCardProps {
  shade: ColorShade;
  utility: UtilityConfig;
  onCopy: (text: string) => void;
  copiedText: string | null;
}

export function ColorCard({ shade, utility, onCopy, copiedText }: ColorCardProps) {
  const renderPreview = () => {
    switch (utility.demoType) {
      case 'background':
        return (
          <div className={`h-20 rounded-lg ${shade.className} ${shade.name === 'white' ? 'border-2 border-zinc-200' : ''}`} />
        );
        
      case 'text':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <span className={`text-2xl font-bold ${shade.className}`}>Aa</span>
          </div>
        );
        
      case 'border':
        return (
          <div className={`h-20 bg-white rounded-lg border-4 ${shade.className}`} />
        );
        
      case 'outline':
        return (
          <div className="h-20 flex items-center justify-center">
            <div className={`w-16 h-16 bg-white rounded-lg outline outline-offset-2 outline-4 ${shade.className}`} />
          </div>
        );
        
      case 'ring':
        return (
          <div className="h-20 flex items-center justify-center">
            <div className={`w-16 h-16 bg-white rounded-lg ring-4 ${shade.className}`} />
          </div>
        );
        
      case 'shadow':
        return (
          <div className="h-20 flex items-center justify-center">
            <div className={`w-16 h-16 bg-white rounded-lg shadow-xl ${shade.className}`} />
          </div>
        );
        
      case 'decoration':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <span className={`text-lg underline decoration-4 ${shade.className}`}>Underline</span>
          </div>
        );
        
      case 'fill':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <svg className={`w-12 h-12 ${shade.className}`} viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-10-5z" />
            </svg>
          </div>
        );
        
      case 'stroke':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <svg className={`w-12 h-12 ${shade.className} fill-none`} viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </div>
        );
        
      case 'accent':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <input type="checkbox" className={`w-6 h-6 ${shade.className}`} defaultChecked readOnly />
          </div>
        );
        
      case 'caret':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <input 
              type="text" 
              className={`px-3 py-1 border border-zinc-300 rounded ${shade.className}`}
              placeholder="Type here"
              readOnly
            />
          </div>
        );
        
      default:
        return (
          <div className={`h-20 rounded-lg ${shade.className} ${shade.name === 'white' ? 'border-2 border-zinc-200' : ''}`} />
        );
    }
  };

  // Handle special colors display
  const renderSpecialPreview = () => {
    if (shade.name === 'transparent') {
      return <div className="h-20 rounded-lg border-2 border-dashed border-zinc-300 bg-transparent" />;
    }
    
    if (shade.name === 'current') {
      return (
        <div 
          className="h-20 rounded-lg border-2 border-zinc-300" 
          style={{ 
            background: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0, 0 5px, 5px -5px, -5px 0px'
          }}
        />
      );
    }
    
    return renderPreview();
  };

  return (
    <button
      onClick={() => onCopy(shade.className)}
      className="group relative w-full transition-all hover:scale-105"
    >
      {shade.name === 'transparent' || shade.name === 'current' ? renderSpecialPreview() : renderPreview()}
      
      <div className="mt-2 text-left">
        <p className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">
          {shade.shade || shade.name}
        </p>
        <p className="text-xs text-zinc-500 font-mono break-all">
          {shade.className}
        </p>
      </div>
      
      {copiedText === shade.className && (
        <div className="absolute inset-0 bg-green-500/20 rounded-lg flex items-center justify-center pointer-events-none animate-in fade-in duration-200">
          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
            Copiado!
          </span>
        </div>
      )}
    </button>
  );
}