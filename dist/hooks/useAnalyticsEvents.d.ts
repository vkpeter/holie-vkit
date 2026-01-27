export type AnalyticsEvent = {
    type: string;
    payload?: Record<string, any>;
};
export declare function useAnalyticsEvents(): {
    trackEvent: (event: AnalyticsEvent) => void;
};
