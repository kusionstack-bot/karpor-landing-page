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

// 扩展全局 Window 类型
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
