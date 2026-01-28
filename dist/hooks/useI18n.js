import { useContext, createContext } from 'react';
export const I18nContext = createContext(null);
export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        // Fallback for projects that don't use I18nProvider
        return {
            t: (key) => key,
            language: 'en',
            setLanguage: () => { },
        };
    }
    return context;
}
