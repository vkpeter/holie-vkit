// Shared analytics events hook for holie websites
import { useCallback } from 'react';

export type AnalyticsEvent = {
  type: string;
  payload?: Record<string, any>;
};

export function useAnalyticsEvents() {
  // Replace with actual event tracking logic (e.g. send to backend, Google Analytics, etc.)
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Example: window.gtag('event', event.type, event.payload);
    // For now, just log to console
    console.log('[Analytics]', event.type, event.payload || {});
  }, []);

  return { trackEvent };
}
