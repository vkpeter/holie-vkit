import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Import locales
import nlCommon from './locales/nl.json';
import enCommon from './locales/en.json';
import deCommon from './locales/de.json';
import frCommon from './locales/fr.json';
// Supported languages
export const SUPPORTED_LANGUAGES = ['nl', 'en', 'de', 'fr'];
export const DEFAULT_LANGUAGE = 'nl';
// Initialize i18next
export const initializeI18n = () => {
    if (i18next.isInitialized) {
        return i18next;
    }
    i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
        resources: {
            nl: { translation: nlCommon },
            en: { translation: enCommon },
            de: { translation: deCommon },
            fr: { translation: frCommon },
        },
        fallbackLng: DEFAULT_LANGUAGE,
        supportedLngs: SUPPORTED_LANGUAGES,
        ns: ['translation'],
        defaultNS: 'translation',
        // Language detector options
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },
        // String interpolation options
        interpolation: {
            escapeValue: false, // React already escapes values
            formatSeparator: ',',
        },
        // Performance optimization: lazy load translations only when needed
        react: {
            useSuspense: false, // Disable suspense for SSR compatibility
            bindI18n: 'languageChanged loaded',
            bindI18nStore: 'added removed',
            transEmptyNodeValue: '',
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
        },
    });
    return i18next;
};
export default initializeI18n();
