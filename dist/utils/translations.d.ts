export type Translations = Record<string, Record<string, string>>;
export declare function getTranslation(translations: Translations, key: string, lang: string, fallback?: string): string;
export declare function getAvailableLanguages(translations: Translations): string[];
export declare function translateAll(translations: Translations, lang: string): Record<string, string>;
