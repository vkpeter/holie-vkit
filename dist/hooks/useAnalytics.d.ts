type AnalyticsContextType = {
    track: (event: string, data?: Record<string, any>) => void;
    identify: (userId: string, properties?: Record<string, any>) => void;
} | null;
export declare const AnalyticsContext: import("react").Context<AnalyticsContextType>;
export declare function useAnalytics(): {
    track: (event: string, data?: Record<string, any>) => void;
    identify: (userId: string, properties?: Record<string, any>) => void;
};
export {};
