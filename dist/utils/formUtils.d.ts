export type ArticleCategory = string;
export type LangCode = string;
export interface MultiLanguageFormData {
    [key: string]: string | boolean;
}
export declare const langFlags: Record<string, string>;
export declare const allLanguages: string[];
export declare const createEmptyFormData: () => MultiLanguageFormData;
export declare const isLanguageMissing: (lang: LangCode, formData: MultiLanguageFormData) => boolean;
export declare const getMissingLanguages: (formData: MultiLanguageFormData) => LangCode[];
export declare const generateSlug: (title: string) => string;
