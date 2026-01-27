// Shared form/validation types and helpers from eendje
export type ArticleCategory = string;
export type LangCode = string;
export interface MultiLanguageFormData {
  [key: string]: string | boolean;
}
export const langFlags: Record<string, string> = {
  nl: '🇳🇱', en: '🇬🇧', fr: '🇫🇷', de: '🇩🇪', es: '🇪🇸', pt: '🇵🇹', ar: '🇸🇦', pl: '🇵🇱', ja: '🇯🇵'
};
export const allLanguages = Object.keys(langFlags);
export const createEmptyFormData = (): MultiLanguageFormData => {
  const data: MultiLanguageFormData = {};
  allLanguages.forEach(lang => {
    data[`title_${lang}`] = '';
    data[`excerpt_${lang}`] = '';
    data[`content_${lang}`] = '';
  });
  data.category = '';
  data.featured = false;
  data.published = false;
  data.image_url = '';
  data.instagram_url = '';
  data.tiktok_url = '';
  return data;
};
export const isLanguageMissing = (lang: LangCode, formData: MultiLanguageFormData): boolean => {
  return !formData[`title_${lang}`] && !formData[`excerpt_${lang}`] && !formData[`content_${lang}`];
};
export const getMissingLanguages = (formData: MultiLanguageFormData): LangCode[] => {
  return allLanguages.filter(lang => isLanguageMissing(lang, formData));
};
export const generateSlug = (title: string): string => {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
};
