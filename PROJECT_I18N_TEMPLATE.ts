/**
 * Project i18n Configuration Template
 * 
 * This file shows how to configure i18n for a project using holie-vkit base translations.
 * Projects can:
 * 1. Use holie-vkit base translations for UI
 * 2. Add project-specific content translations
 * 3. Override active languages
 */

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ALL_AVAILABLE_LANGUAGES, type Language } from 'holie-vkit';

// Import holie-vkit base translations
import holieNL from 'holie-vkit/src/i18n/locales/nl.json';
import holieEN from 'holie-vkit/src/i18n/locales/en.json';
import holieDE from 'holie-vkit/src/i18n/locales/de.json';
import holieFR from 'holie-vkit/src/i18n/locales/fr.json';

// Import project-specific content translations
import projectNL from './locales/nl.json';
import projectEN from './locales/en.json';
import projectDE from './locales/de.json';
import projectFR from './locales/fr.json';

// Define which languages this project uses
export const PROJECT_LANGUAGES: Language[] = ['nl', 'en', 'de', 'fr'];
export const DEFAULT_LANGUAGE: Language = 'nl';

// Merge holie-vkit base with project-specific namespaces
const mergeTranslations = (holie: any, project: any) => ({
  ...holie,
  ...project,
});

export const initProjectI18n = () => {
  if (i18next.isInitialized) {
    return i18next;
  }

  i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        nl: { translation: mergeTranslations(holieNL, projectNL) },
        en: { translation: mergeTranslations(holieEN, projectEN) },
        de: { translation: mergeTranslations(holieDE, projectDE) },
        fr: { translation: mergeTranslations(holieFR, projectFR) },
      },
      fallbackLng: DEFAULT_LANGUAGE,
      supportedLngs: PROJECT_LANGUAGES,
      ns: ['translation'],
      defaultNS: 'translation',
      
      detection: {
        order: ['localStorage', 'navigator', 'htmlTag'],
        caches: ['localStorage'],
      },
      
      interpolation: {
        escapeValue: false,
        formatSeparator: ',',
      },
      
      react: {
        useSuspense: false,
        bindI18n: 'languageChanged loaded',
        bindI18nStore: 'added removed',
        transEmptyNodeValue: '',
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
      },
    });

  return i18next;
};

export default initProjectI18n();
