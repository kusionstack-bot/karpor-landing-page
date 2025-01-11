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
    // GA4 format
    window.gtag('event', action, {
      // Custom parameters
      category,
      label,
      value,
      interaction_type: category,
      item_name: label,
    });
  }
};
