'use client';

// Using window.gtag type defined in gtag.d.ts
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    // TypeScript will check parameter types
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
    // TypeScript will check parameter types
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
