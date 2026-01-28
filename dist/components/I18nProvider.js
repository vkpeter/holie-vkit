import { jsx as _jsx } from "react/jsx-runtime";
import { I18nextProvider } from 'react-i18next';
import { initializeI18n } from '../i18n/config';
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
export const I18nProvider = ({ children }) => {
    const i18n = initializeI18n();
    return (_jsx(I18nextProvider, { i18n: i18n, children: children }));
};
export { I18nextProvider } from 'react-i18next';
