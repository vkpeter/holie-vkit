// Shared utility functions for all holie websites
import { LOCALE_MAP } from './i18n';
export function formatDate(dateString, language, options) {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime()))
            return dateString;
        const defaultOptions = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
        return date.toLocaleDateString(LOCALE_MAP[language] || language, { ...defaultOptions, ...options });
    }
    catch {
        return dateString;
    }
}
export function formatArticleDate(dateString, language) {
    return formatDate(dateString, language, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}
export function getCategoryTranslation(category, translations, fallback = category) {
    return translations[category] || fallback;
}
export function getLocalizedTitle(title, language, fallback = 'Untitled') {
    if (!title)
        return fallback;
    return title[language] || title.en || fallback;
}
export function getLocalizedContent(content, language, fallback = '') {
    if (!content)
        return fallback;
    return content[language] || content.en || fallback;
}
export function getEmptyStateMessage(language) {
    const messages = {
        nl: 'Nog geen artikelen in deze categorie.',
        en: 'No articles in this category yet.',
        fr: 'Pas encore d\'articles dans cette catégorie.',
        de: 'Noch keine Artikel in dieser Kategorie.',
        es: 'Aún no hay artículos en esta categoría.',
        pt: 'Ainda não há artigos nesta categoria.',
        ar: 'لا توجد مقالات في هذه الفئة بعد.',
        pl: 'Jeszcze brak artykułów w tej kategorii.',
        ja: 'このカテゴリーにはまだ記事がありません。',
        tr: 'Bu kategoride henüz makale yok.',
    };
    return messages[language] || messages.en;
}
export function getArticleCountLabel(language) {
    const labels = {
        nl: 'artikelen',
        en: 'articles',
        fr: 'articles',
        de: 'Artikel',
        es: 'artículos',
        pt: 'artigos',
        ar: 'مقالات',
        pl: 'artykuły',
        ja: '記事',
        tr: 'makale',
    };
    return labels[language] || labels.en;
}
