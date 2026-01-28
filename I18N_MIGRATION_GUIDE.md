# Centralized i18n Setup Guide

This guide explains how to set up multi-language support using the centralized i18next configuration from holie-vkit.

## Overview

**holie-vkit v1.3.0+** provides a centralized, standardized i18next setup that works across all holie projects:

- **I18nProvider**: Wraps your app with i18next initialization
- **i18n Configuration**: Pre-configured with language detection and localStorage persistence
- **Base Translations**: Support for nl, en, de, fr out of the box
- **Expandable**: Easy to add additional languages and translations

## Quick Start

### 1. Install Dependencies

holie-vkit v1.3.0+ comes with i18next pre-configured. Just ensure it's in your package.json:

```json
{
  "dependencies": {
    "holie-vkit": "^1.3.0",
    "i18next": "^25.6.3",
    "react-i18next": "^16.3.5",
    "i18next-browser-languagedetector": "^8.2.0"
  }
}
```

Run `npm install` to install all dependencies.

### 2. Wrap Your App with I18nProvider

In your `App.tsx` or root component:

```tsx
import { I18nProvider } from 'holie-vkit';

const App = () => (
  <I18nProvider>
    {/* Your app components */}
  </I18nProvider>
);

export default App;
```

### 3. Use Translations in Components

Use the `useTranslation` hook from react-i18next:

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <p>Current language: {i18n.language}</p>
    </div>
  );
};
```

### 4. Create a Language Switcher

```tsx
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
  ];

  return (
    <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.label}
        </option>
      ))}
    </select>
  );
};
```

## Advanced Configuration

### Extending with Custom Languages

If you need languages beyond nl, en, de, fr:

#### Option 1: Use Holie's Custom Hook Pattern (holie example)

Create a custom hook that bridges your translations with i18next:

```tsx
// hooks/useCustomI18n.ts
import { useTranslation } from 'react-i18next';
import { translations, Language } from '@/i18n/translations';

export function useCustomI18n() {
  const { i18n } = useTranslation();
  
  const currentLanguage = (i18n.language?.split('-')[0] as Language) || 'nl';
  const t = translations[currentLanguage];
  
  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('app-language', lang);
  };
  
  return { t, language: currentLanguage, setLanguage, i18n };
}
```

This approach:
- ✅ Preserves your existing TypeScript translation structure
- ✅ Syncs with centralized i18next language detection
- ✅ Maintains localStorage persistence

#### Option 2: Extend i18next Config (scherp-mes-nu example)

If you already have i18next configured with custom languages:

```typescript
// src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import nl from './locales/nl.json';
import en from './locales/en.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json'; // Additional language
// ... import more languages

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      nl: { translation: nl },
      en: { translation: en },
      de: { translation: de },
      fr: { translation: fr },
      es: { translation: es },
      // ... add more languages
    },
    fallbackLng: 'en',
    supportedLngs: ['nl', 'en', 'de', 'fr', 'es'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
```

Then in App.tsx:

```tsx
import i18n from './i18n/config';
import { I18nextProvider } from 'react-i18next';

const App = () => (
  <I18nextProvider i18n={i18n}>
    {/* Your app components */}
  </I18nextProvider>
);
```

### Adding New Languages to Base Config

If you want to extend the centralized holie-vkit i18n config with more languages:

1. Add JSON files to `holie-vkit/src/i18n/locales/`:
   - `es.json` (Spanish)
   - `pt.json` (Portuguese)
   - etc.

2. Update `holie-vkit/src/i18n/config.ts`:

```typescript
import nlCommon from './locales/nl.json';
import enCommon from './locales/en.json';
import deCommon from './locales/de.json';
import frCommon from './locales/fr.json';
import esCommon from './locales/es.json'; // NEW

export type Language = 'nl' | 'en' | 'de' | 'fr' | 'es'; // Updated

export const SUPPORTED_LANGUAGES: Language[] = ['nl', 'en', 'de', 'fr', 'es'];

// In init() resources:
resources: {
  nl: { translation: nlCommon },
  en: { translation: enCommon },
  de: { translation: deCommon },
  fr: { translation: frCommon },
  es: { translation: esCommon }, // NEW
},
```

3. Publish new holie-vkit version and update dependent projects.

## Language Detection

The centralized i18next setup uses automatic language detection with this order:

1. **localStorage** - Previously selected language
2. **navigator.language** - Browser language
3. **HTML tag** - `<html lang="...">` 
4. **Fallback** - 'nl' (Dutch)

To manually change language:

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    // Language is automatically saved to localStorage
  };

  return <button onClick={() => handleLanguageChange('en')}>English</button>;
};
```

## Translation Structure

Base translations are organized with namespaces for scalability:

```json
// locales/nl.json
{
  "common": {
    "welcome": "Welkom",
    "goodbye": "Tot ziens"
  },
  "buttons": {
    "submit": "Verzenden",
    "cancel": "Annuleren"
  },
  "errors": {
    "required": "Dit veld is verplicht",
    "invalid": "Ongeldige invoer"
  }
}
```

Usage:

```tsx
const { t } = useTranslation();

<button>{t('buttons.submit')}</button>
<p>{t('common.welcome')}</p>
<span>{t('errors.required')}</span>
```

## Special Cases

### Supabase Multilingual Routing (eendje)

If your project has Supabase multilingual slug lookups:

1. Keep your custom LanguageContext alongside I18nProvider
2. Use the custom hook pattern (Option 1 above) to sync with i18next
3. Test thoroughly that Supabase queries still work after language switches

Example (eendje):

```tsx
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider> {/* Custom - handles Supabase */}
          <I18nProvider> {/* Centralized - handles UI i18n */}
            {/* Your app */}
          </I18nProvider>
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
```

### Project-Specific Setup (scherp-mes-nu)

If your project already has i18next configured with custom languages:

1. Keep your existing `src/i18n/config.ts`
2. Wrap app with your own i18next configuration
3. Use the same translation keys/structure for consistency
4. Benefit from holie-vkit UI components which expect i18next

```tsx
import i18n from './i18n/config'; // Your custom config
import { I18nextProvider } from 'react-i18next';

const App = () => (
  <I18nextProvider i18n={i18n}>
    {/* Your app */}
  </I18nextProvider>
);
```

## Best Practices

✅ **Do:**
- Use `useTranslation()` hook for all string access
- Keep translation keys organized in namespaces
- Test language switching in all components
- Use localStorage for persistence (automatic with configured setup)
- Add missing translations to all language files

❌ **Don't:**
- Hardcode strings instead of using translations
- Mix translation approaches (custom objects + i18next)
- Store language preference in state alone (use localStorage)
- Forget to test RTL languages (Arabic) if supported

## Migration from Custom Setup to Centralized i18next

### Step 1: Update holie-vkit version
```json
{
  "dependencies": {
    "holie-vkit": "^1.3.0"
  }
}
```

### Step 2: Wrap with I18nProvider
```tsx
// App.tsx
import { I18nProvider } from 'holie-vkit';

const App = () => (
  <I18nProvider>
    {/* Your components */}
  </I18nProvider>
);
```

### Step 3: Replace useLanguage with useTranslation
```tsx
// Before
import { useLanguage } from '@/contexts/LanguageContext';
const { t, setLanguage } = useLanguage();

// After
import { useTranslation } from 'react-i18next';
const { t, i18n } = useTranslation();
i18n.changeLanguage('en'); // replaces setLanguage('en')
```

### Step 4: Test thoroughly
- Verify all components render correctly
- Test language switching
- Check localStorage persistence
- Validate language detection works

## Troubleshooting

### "Translation not found" warnings

**Problem:** Console shows `missing` translation keys

**Solution:**
- Check translation JSON files for typos
- Ensure all languages have the same key structure
- Use `useTranslation('translation')` if using custom namespaces

### Language not persisting

**Problem:** Language resets on page reload

**Solution:**
- Ensure localStorage is enabled in browser
- Check browser DevTools > Application > Local Storage
- Verify i18n.changeLanguage() is being called
- Check for localStorage quota issues

### Hydration mismatch in SSR

**Problem:** React hydration errors with i18next

**Solution:**
- Use `useSuspense: false` in i18next config (already configured in holie-vkit)
- Ensure initial language matches on server and client
- Wait for i18next to initialize before rendering

## Examples in Codebase

- **holie** - Custom TypeScript translations with useHolieI18n hook
- **scherp-mes-nu** - Standalone i18next config with JSON locales
- **eendje** - Custom LanguageContext with Supabase integration (keeping alongside i18next)

Study these implementations for your specific use case.

## Support & Questions

For questions or issues with i18n setup:
1. Check the example projects in this workspace
2. Review [i18next documentation](https://www.i18next.com/)
3. Check [react-i18next documentation](https://react.i18next.com/)
