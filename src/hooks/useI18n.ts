import { useContext, createContext } from 'react';

type I18nContextType = {
  t: (key: string, ...args: any[]) => string;
  language: string;
  setLanguage: (lang: string) => void;
} | null;

export const I18nContext = createContext<I18nContextType>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    // Fallback for projects that don't use I18nProvider
    return {
      t: (key: string) => key,
      language: 'en',
      setLanguage: () => {},
    };
  }
  return context;
}
