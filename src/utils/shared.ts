// Shared utility functions for all holie websites
import { LOCALE_MAP } from './i18n';

export function formatDate(dateString: string, language: string, options?: Intl.DateTimeFormatOptions): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    const defaultOptions: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    };
    return date.toLocaleDateString(
      (LOCALE_MAP as any)[language] || language,
      { ...defaultOptions, ...options }
    );
  } catch {
    return dateString;
  }
}

export function formatArticleDate(dateString: string, language: string): string {
  return formatDate(dateString, language, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getCategoryTranslation(category: string, translations: any, fallback: string = category): string {
  return translations[category as keyof typeof translations] || fallback;
}

export function getLocalizedTitle(title: Record<string, string> | undefined, language: string, fallback: string = 'Untitled'): string {
  if (!title) return fallback;
  return title[language] || title.en || fallback;
}

export function getLocalizedContent(content: Record<string, string> | undefined, language: string, fallback: string = ''): string {
  if (!content) return fallback;
  return content[language] || content.en || fallback;
}

export function getEmptyStateMessage(language: string): string {
  const messages: Record<string, string> = {
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

export function getArticleCountLabel(language: string): string {
  const labels: Record<string, string> = {
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
