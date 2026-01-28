export type Language = 'nl' | 'en' | 'de' | 'fr' | 'es' | 'pt' | 'ar' | 'pl' | 'ja' | 'tr';
export declare const ALL_AVAILABLE_LANGUAGES: Language[];
export declare const SUPPORTED_LANGUAGES: Language[];
export declare const DEFAULT_LANGUAGE: Language;
export declare const initializeI18n: (activeLanguages?: Language[]) => import("i18next").i18n;
declare const _default: import("i18next").i18n;
export default _default;
