export function getTranslation(translations, key, lang, fallback) {
    if (!translations[key])
        return fallback || key;
    return translations[key][lang] || translations[key].en || fallback || key;
}
export function getAvailableLanguages(translations) {
    const langs = new Set();
    Object.values(translations).forEach(obj => {
        Object.keys(obj).forEach(lang => langs.add(lang));
    });
    return Array.from(langs);
}
export function translateAll(translations, lang) {
    const result = {};
    Object.keys(translations).forEach(key => {
        result[key] = getTranslation(translations, key, lang);
    });
    return result;
}
