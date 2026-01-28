import { useContext, createContext } from 'react';
export const AnalyticsContext = createContext(null);
export function useAnalytics() {
    const context = useContext(AnalyticsContext);
    if (!context) {
        // Fallback for projects that don't use AnalyticsProvider
        return {
            track: (event, data) => { },
            identify: (userId, properties) => { },
        };
    }
    return context;
}
