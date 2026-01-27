// Shared translation helpers for holie websites
export type Translations = Record<string, Record<string, string>>;

export function getTranslation(translations: Translations, key: string, lang: string, fallback?: string): string {
  if (!translations[key]) return fallback || key;
  return translations[key][lang] || translations[key].en || fallback || key;
}

export function getAvailableLanguages(translations: Translations): string[] {
  const langs = new Set<string>();
  Object.values(translations).forEach(obj => {
    Object.keys(obj).forEach(lang => langs.add(lang));
  });
  return Array.from(langs);
}

export function translateAll(translations: Translations, lang: string): Record<string, string> {
  const result: Record<string, string> = {};
  Object.keys(translations).forEach(key => {
    result[key] = getTranslation(translations, key, lang);
  });
  return result;
}
