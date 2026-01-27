export declare function formatDate(dateString: string, language: string, options?: Intl.DateTimeFormatOptions): string;
export declare function formatArticleDate(dateString: string, language: string): string;
export declare function getCategoryTranslation(category: string, translations: any, fallback?: string): string;
export declare function getLocalizedTitle(title: Record<string, string> | undefined, language: string, fallback?: string): string;
export declare function getLocalizedContent(content: Record<string, string> | undefined, language: string, fallback?: string): string;
export declare function getEmptyStateMessage(language: string): string;
export declare function getArticleCountLabel(language: string): string;
