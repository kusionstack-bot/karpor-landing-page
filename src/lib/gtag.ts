'use client';

// 这里使用了 gtag.d.ts 中定义的 window.gtag 类型
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    // TypeScript 会检查这里的参数类型
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    // TypeScript 会检查这里的参数类型
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
