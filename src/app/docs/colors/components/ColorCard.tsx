import React from 'react';

interface ColorCardProps {
  colorName: string;
  shade: string;
  utility: string;
  opacity: string;
  onCopy: (text: string) => void;
  copiedText: string | null;
  baseClass: string; 
}

export function ColorCard({ 
  colorName, 
  shade, 
  utility, 
  opacity, 
  onCopy, 
  copiedText,
  baseClass
}: ColorCardProps) {
  const className = `${utility}-${colorName}-${shade}${opacity !== '100' ? `/${opacity}` : ''}`;
  const opacityDecimal = parseInt(opacity) / 100;
  
  const renderPreview = () => {
    switch (utility) {
      case 'bg':
        return (
          <div className="relative h-20 rounded-lg overflow-hidden">
            <div 
              className={`${baseClass} absolute inset-0`} 
              style={{ opacity: opacityDecimal }}
            />
            <div className="absolute inset-0 border-2 border-zinc-200 rounded-lg" />
          </div>
        );
        
      case 'text':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <span 
              className={`text-2xl font-bold ${baseClass.replace('bg-', 'text-')}`}
              style={{ opacity: opacityDecimal }}
            >
              Aa
            </span>
          </div>
        );
        
      case 'border':
        return (
          <div className="h-20 relative">
            <div 
              className={`absolute inset-0 bg-white rounded-lg border-4 ${baseClass.replace('bg-', 'border-')}`}
              style={{ opacity: opacityDecimal }}
            />
          </div>
        );
        
      case 'outline':
        return (
          <div className="h-20 relative flex items-center justify-center">
            <div 
              className={`w-16 h-16 bg-white rounded-lg outline outline-offset-2 ${baseClass.replace('bg-', 'outline-')}`}
              style={{ opacity: opacityDecimal }}
            />
          </div>
        );
        
      case 'ring':
        return (
          <div className="h-20 relative flex items-center justify-center">
            <div 
              className={`w-16 h-16 bg-white rounded-lg ring-4 ${baseClass.replace('bg-', 'ring-')}`}
              style={{ opacity: opacityDecimal }}
            />
          </div>
        );
        
      case 'shadow':
        return (
          <div className="h-20 relative flex items-center justify-center">
            <div 
              className={`w-16 h-16 bg-white rounded-lg shadow-xl ${baseClass.replace('bg-', 'shadow-')}`}
              style={{ opacity: opacityDecimal }}
            />
          </div>
        );
        
      case 'decoration':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <span 
              className={`text-lg underline decoration-4 ${baseClass.replace('bg-', 'decoration-')}`}
              style={{ opacity: opacityDecimal }}
            >
              Underline
            </span>
          </div>
        );
        
      case 'fill':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <svg 
              className={`w-12 h-12 ${baseClass.replace('bg-', 'fill-')}`}
              viewBox="0 0 24 24"
              style={{ opacity: opacityDecimal }}
            >
              <path d="M12 2L2 7v10c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-10-5z" />
            </svg>
          </div>
        );
        
      case 'stroke':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <svg 
              className={`w-12 h-12 ${baseClass.replace('bg-', 'stroke-')} fill-none`}
              viewBox="0 0 24 24" 
              strokeWidth="2"
              style={{ opacity: opacityDecimal }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </div>
        );
        
      case 'accent':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <input 
              type="checkbox" 
              className={`w-6 h-6 ${baseClass.replace('bg-', 'accent-')}`}
              defaultChecked
              style={{ opacity: opacityDecimal }}
              readOnly
            />
          </div>
        );
        
      case 'caret':
        return (
          <div className="h-20 bg-zinc-50 rounded-lg flex items-center justify-center">
            <input 
              type="text" 
              className={`px-3 py-1 border border-zinc-300 rounded ${baseClass.replace('bg-', 'caret-')}`}
              placeholder="Type here"
              style={{ opacity: opacityDecimal }}
              readOnly
            />
          </div>
        );
        
      default:
        return (
          <div className="relative h-20 rounded-lg overflow-hidden">
            <div className={`${baseClass} absolute inset-0`} style={{ opacity: opacityDecimal }} />
            <div className="absolute inset-0 border-2 border-zinc-200 rounded-lg" />
          </div>
        );
    }
  };

  return (
    <button
      onClick={() => onCopy(className)}
      className="group relative w-full transition-all hover:scale-105"
    >
      {renderPreview()}
      <div className="mt-2 text-left">
        <p className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">
          {shade}
        </p>
        <p className="text-xs text-zinc-500 font-mono break-all">
          {className}
        </p>
      </div>
      {copiedText === className && (
        <div className="absolute inset-0 bg-green-500/20 rounded-lg flex items-center justify-center pointer-events-none animate-in fade-in duration-200">
          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
            Copiado!
          </span>
        </div>
      )}
    </button>
  );
}