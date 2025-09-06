import { useState, useCallback } from 'react';

export function useCopyToClipboard(resetDelay = 2000) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), resetDelay);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'absolute';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), resetDelay);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), resetDelay);
    }
  }, [resetDelay]);

  return { 
    copyToClipboard, 
    copiedText 
  };
}