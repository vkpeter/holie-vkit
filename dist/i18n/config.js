import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// Import locales
import nlCommon from './locales/nl.json';
import enCommon from './locales/en.json';
import deCommon from './locales/de.json';
import frCommon from './locales/fr.json';
import esCommon from './locales/es.json';
import ptCommon from './locales/pt.json';
import arCommon from './locales/ar.json';
import plCommon from './locales/pl.json';
import jaCommon from './locales/ja.json';
import trCommon from './locales/tr.json';
// All available languages in holie-vkit
export const ALL_AVAILABLE_LANGUAGES = ['nl', 'en', 'de', 'fr', 'es', 'pt', 'ar', 'pl', 'ja', 'tr'];
// Default supported languages (projects can override)
export const SUPPORTED_LANGUAGES = ['nl', 'en', 'de', 'fr'];
export const DEFAULT_LANGUAGE = 'nl';
// Initialize i18next
export const initializeI18n = (activeLanguages) => {
    if (i18next.isInitialized) {
        return i18next;
    }
    const allResources = {
        nl: { translation: nlCommon },
        en: { translation: enCommon },
        de: { translation: deCommon },
        fr: { translation: frCommon },
        es: { translation: esCommon },
        pt: { translation: ptCommon },
        ar: { translation: arCommon },
        pl: { translation: plCommon },
        ja: { translation: jaCommon },
        tr: { translation: trCommon },
    };
    // Use provided active languages or defaults
    const langs = activeLanguages || SUPPORTED_LANGUAGES;
    // Filter resources to only active languages
    const resources = Object.fromEntries(Object.entries(allResources).filter(([lang]) => langs.includes(lang)));
    i18next
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
        resources,
        fallbackLng: DEFAULT_LANGUAGE,
        supportedLngs: langs,
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
