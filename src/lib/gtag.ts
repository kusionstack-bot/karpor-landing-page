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

// https://developers.google.com/analytics/devguides/collection/ga4/events?client_type=gtag
export const event = ({ 
  name,
  params = {}
}: {
  name: string;
  params?: Record<string, any>;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', name, {
      ...params,
      // Additional recommended GA4 parameters
      page_location: window.location.href,
      page_title: document.title
    });
  }
};
