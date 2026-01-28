import { useContext, createContext } from 'react';

type AnalyticsContextType = {
  track: (event: string, data?: Record<string, any>) => void;
  identify: (userId: string, properties?: Record<string, any>) => void;
} | null;

export const AnalyticsContext = createContext<AnalyticsContextType>(null);

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (!context) {
    // Fallback for projects that don't use AnalyticsProvider
    return {
      track: (event: string, data?: any) => {},
      identify: (userId: string, properties?: any) => {},
    };
  }
  return context;
}
