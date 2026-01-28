type I18nContextType = {
    t: (key: string, ...args: any[]) => string;
    language: string;
    setLanguage: (lang: string) => void;
} | null;
export declare const I18nContext: import("react").Context<I18nContextType>;
export declare function useI18n(): {
    t: (key: string, ...args: any[]) => string;
    language: string;
    setLanguage: (lang: string) => void;
};
export {};
