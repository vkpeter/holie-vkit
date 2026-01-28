import React, { ReactNode } from 'react';
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
export declare const I18nProvider: React.FC<I18nProviderProps>;
export { I18nextProvider } from 'react-i18next';
