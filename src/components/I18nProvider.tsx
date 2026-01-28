import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { initializeI18n } from '../i18n/config';

interface I18nProviderProps {
  children: ReactNode;
}

/**
 * I18nProvider - Centralized i18n provider for all holie projects
 * 
 * Usage:
 * ```tsx
 * import { I18nProvider } from 'holie-vkit';
 * 
 * <I18nProvider>
 *   <App />
 * </I18nProvider>
 * ```
 */
export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const i18n = initializeI18n();
  
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
};

export { I18nextProvider } from 'react-i18next';
