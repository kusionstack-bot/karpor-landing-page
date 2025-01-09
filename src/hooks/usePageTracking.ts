'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '@/lib/gtag';

export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname && typeof window !== 'undefined') {
      const url = pathname + (searchParams?.toString() || '');
      gtag.pageview(url);
    }
  }, [pathname, searchParams]);
};
