// Type definitions for Google Analytics gtag.js
interface GTagEvent {
  action: string;
  category: string;
  label: string;
  value?: number;
}

interface Window {
  gtag: (
    command: 'config' | 'event',
    targetId: string,
    config?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}

// Extend global Window type
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: {
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
}
