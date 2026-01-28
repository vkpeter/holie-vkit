# holie-vkit i18n Implementation Guide

**Version:** 1.4.0  
**Last Updated:** January 28, 2026  
**Status:** Production Ready

---

## Table of Contents
1. [Quick Start](#quick-start)
2. [Architecture Overview](#architecture-overview)
3. [Setup Instructions](#setup-instructions)
4. [Usage Patterns](#usage-patterns)
5. [Advanced Configuration](#advanced-configuration)
6. [Troubleshooting](#troubleshooting)
7. [Migration Guide](#migration-guide)

---

## Quick Start

### Installation (5 minutes)

```bash
# 1. Install holie-vkit
npm install holie-vkit@latest

# 2. Initialize in main.tsx
import './i18n/config';  // Initialize i18next before React
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

# 3. Wrap App with I18nProvider
import { I18nProvider } from 'holie-vkit';

export default function App() {
  return (
    <I18nProvider activeLanguages={['nl', 'en', 'de', 'fr']}>
      <YourAppContent />
    </I18nProvider>
  );
}

# 4. Use translations in components
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <p>{t('common.description')}</p>
      
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="nl">Nederlands</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
```

### Available Languages

**Included in holie-vkit v1.4.0:**
- `nl` - Nederlands (Dutch) ✅
- `en` - English ✅
- `de` - Deutsch (German) ✅
- `fr` - Français (French) ✅
- `es` - Español (Spanish) ✅
- `pt` - Português (Portuguese/Brazilian) ✅
- `ar` - العربية (Arabic) ✅
- `pl` - Polski (Polish) ✅
- `ja` - 日本語 (Japanese) ✅
- `tr` - Türkçe (Turkish) ✅

---

## Architecture Overview

### Hybrid i18n System

holie-vkit provides **centralized UI translations** while projects manage **content-specific translations**.

```
┌─────────────────────────────────────────────────────┐
│           holie-vkit (npm package)                  │
│                                                     │
│  ✅ Base UI strings (10 languages)                  │
│  ✅ Common components (buttons, labels, errors)     │
│  ✅ Layout components (Navbar, Footer)              │
│  ✅ Shared hooks (useTranslation)                   │
│                                                     │
│  i18n/config.ts                                    │
│  i18n/locales/*.json (nl,en,de,fr,es,pt,ar,pl,ja,tr)
└─────────────────────────────────────────────────────┘
                          ▲
                          │
                     imports from
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
    ┌───▼────┐      ┌───▼────┐      ┌───▼────┐
    │  holie  │      │ scherp- │     │ eendje  │
    │         │      │ mes-nu  │     │         │
    │ Custom: │      │ Hybrid: │     │ Hybrid+ │
    │ - TS    │      │ - UI    │     │ - UI    │
    │ - Hooks │      │ - Content│     │ - Content
    │         │      │         │     │ - Supabase
    └───┬────┘      └───┬────┘      └───┬────┘
        │                │                 │
        │ Custom         │ Project         │ Project
        │ translations   │ locales         │ locales
        │ + Supabase     │ JSON            │ + Database
        │                │                 │
```

### Translation Flow

```
User switches language
  ↓
i18n.changeLanguage('en')
  ↓
Browser localStorage updated
  ↓
I18nProvider detects change
  ↓
All useTranslation() hooks re-render
  ↓
New language strings rendered
```

### Two-Layer Systems (like eendje)

```
Layer 1: UI Translations
  I18nProvider
    └─ Uses holie-vkit locales
       └─ Admin panel, buttons, navigation

Layer 2: Content Translations
  Custom LanguageProvider
    └─ Uses project database (Supabase)
       └─ Articles, pages, user content

Both layers sync language selection via localStorage
```

---

## Setup Instructions

### For New Projects (Option 1: Standard Setup)

**Time:** 15 minutes

```bash
# 1. Create project structure
src/
├── i18n/
│   ├── config.ts
│   └── locales/
│       ├── nl.json
│       ├── en.json
│       ├── de.json
│       └── fr.json
├── App.tsx
└── main.tsx

# 2. Create src/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import nlLocale from './locales/nl.json';
import enLocale from './locales/en.json';
import deLocale from './locales/de.json';
import frLocale from './locales/fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'nl',
    supportedLngs: ['nl', 'en', 'de', 'fr'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      nl: { translation: nlLocale },
      en: { translation: enLocale },
      de: { translation: deLocale },
      fr: { translation: frLocale },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

# 3. Update main.tsx
import './i18n/config'; // MUST be first!
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

# 4. Update App.tsx
import { I18nProvider } from 'holie-vkit';

export default function App() {
  return (
    <I18nProvider activeLanguages={['nl', 'en', 'de', 'fr']}>
      {/* Your app content */}
    </I18nProvider>
  );
}

# 5. Create locale files (JSON)
# src/i18n/locales/nl.json
{
  "common": {
    "title": "Mijn App",
    "description": "Dit is mijn beschrijving"
  }
}

# 6. Use in components
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <select onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option value="nl">Nederlands</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}
```

### For Hybrid Projects with Custom Content (Option 2: Like eendje)

**Time:** 30 minutes

```bash
# 1. Setup Layer 1: UI (from holie-vkit)
# Follow Option 1 above

# 2. Setup Layer 2: Content (Custom LanguageProvider)

# src/contexts/LanguageContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export interface LanguageContextType {
  language: string;
  switchLanguage: (lang: string) => Promise<void>;
  contentTranslations: any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();
  const [contentTranslations, setContentTranslations] = useState({});

  const switchLanguage = async (lang: string) => {
    // Change UI language
    await i18n.changeLanguage(lang);
    
    // Fetch content in new language
    const data = await fetch(`/api/content/${lang}`).then(r => r.json());
    setContentTranslations(data);
    
    // Update localStorage
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    // Initialize with current language
    const currentLang = i18n.language;
    switchLanguage(currentLang);
  }, []);

  return (
    <LanguageContext.Provider value={{ language: i18n.language, switchLanguage, contentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

# 3. Stack both providers in App.tsx
import { I18nProvider } from 'holie-vkit';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <I18nProvider activeLanguages={['nl', 'en', 'de', 'fr', 'es', 'pt', 'ar', 'pl', 'ja', 'tr']}>
      <LanguageProvider>
        {/* Your app content */}
      </LanguageProvider>
    </I18nProvider>
  );
}

# 4. Use both in components
import { useTranslation } from 'react-i18next';
import { useLanguage } from './contexts/LanguageContext';

export function Article() {
  const { t } = useTranslation(); // UI strings from holie-vkit
  const { contentTranslations } = useLanguage(); // Content from database
  
  return (
    <div>
      <h1>{contentTranslations.articleTitle}</h1> {/* Custom content */}
      <button>{t('common.submit')}</button> {/* holie-vkit string */}
    </div>
  );
}
```

---

## Usage Patterns

### Pattern 1: Simple Component Translation

```typescript
import { useTranslation } from 'react-i18next';

export function Button() {
  const { t } = useTranslation();
  
  return <button>{t('common.submit')}</button>;
}
```

### Pattern 2: Language Switching

```typescript
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  return (
    <select 
      value={i18n.language} 
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="nl">Dutch</option>
      <option value="en">English</option>
      <option value="de">German</option>
      <option value="fr">French</option>
    </select>
  );
}
```

### Pattern 3: Interpolation (Variables)

```json
// locales/en.json
{
  "greeting": "Hello, {{name}}!"
}
```

```typescript
export function Greeting() {
  const { t } = useTranslation();
  
  return <h1>{t('greeting', { name: 'John' })}</h1>;
  // Output: "Hello, John!"
}
```

### Pattern 4: Pluralization

```json
// locales/en.json
{
  "items": {
    "one": "You have {{count}} item",
    "other": "You have {{count}} items"
  }
}
```

```typescript
export function ItemCount() {
  const { t } = useTranslation();
  
  return <p>{t('items', { count: 5 })}</p>;
  // Output: "You have 5 items"
}
```

### Pattern 5: Custom Hook (like holie)

```typescript
// hooks/useHolieI18n.ts
import { useTranslation } from 'react-i18next';
import { holieTranslations } from '../i18n/translations';

export function useHolieI18n() {
  const { i18n } = useTranslation();
  const language = i18n.language as 'nl' | 'en' | 'fr' | 'de';
  
  return holieTranslations[language] || holieTranslations.nl;
}

// Usage in components
export function MyComponent() {
  const t = useHolieI18n();
  
  return <h1>{t.pages.home.title}</h1>;
}
```

---

## Advanced Configuration

### Config with All 10 Languages

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import nlLocale from './locales/nl.json';
import enLocale from './locales/en.json';
import deLocale from './locales/de.json';
import frLocale from './locales/fr.json';
import esLocale from './locales/es.json';
import ptLocale from './locales/pt.json';
import arLocale from './locales/ar.json';
import plLocale from './locales/pl.json';
import jaLocale from './locales/ja.json';
import trLocale from './locales/tr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'nl',
    supportedLngs: ['nl', 'en', 'de', 'fr', 'es', 'pt', 'ar', 'pl', 'ja', 'tr'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      nl: { translation: nlLocale },
      en: { translation: enLocale },
      de: { translation: deLocale },
      fr: { translation: frLocale },
      es: { translation: esLocale },
      pt: { translation: ptLocale },
      ar: { translation: arLocale },
      pl: { translation: plLocale },
      ja: { translation: jaLocale },
      tr: { translation: trLocale },
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
```

### Namespace Organization (Future)

```json
// locales/en.json with namespaces
{
  "common": {
    "title": "My App",
    "submit": "Submit"
  },
  "auth": {
    "login": "Login",
    "register": "Register"
  },
  "forms": {
    "email": "Email address",
    "password": "Password"
  }
}
```

```typescript
// Usage with namespaces
const { t: tCommon } = useTranslation('common');
const { t: tAuth } = useTranslation('auth');

return (
  <>
    <h1>{tCommon('title')}</h1>
    <button>{tAuth('login')}</button>
  </>
);
```

---

## Troubleshooting

### Issue: Strings show as "translation:key.name" instead of actual text

**Cause:** Translation key doesn't exist in JSON file

**Solution:**
```json
// Check that key exists in all locale files:
{
  "common": {
    "title": "Title"  // ← This must exist
  }
}
```

```typescript
// Use existing keys:
const { t } = useTranslation();
console.log(t('common.title')); // ✅ Works
console.log(t('common.nonexistent')); // ❌ Shows key as fallback
```

**Prevention:**
```typescript
// Add validation:
export const AVAILABLE_KEYS = {
  COMMON_TITLE: 'common.title',
  COMMON_SUBMIT: 'common.submit',
} as const;

const { t } = useTranslation();
t(AVAILABLE_KEYS.COMMON_TITLE); // Type-safe!
```

---

### Issue: Language doesn't persist after page reload

**Cause:** localStorage not working or disabled

**Solution:**
```typescript
// Verify localStorage is set:
localStorage.setItem('i18nextLng', 'en');
console.log(localStorage.getItem('i18nextLng')); // Should print 'en'

// Check detection order in config:
detection: {
  order: ['localStorage', 'navigator', 'htmlTag'],
  caches: ['localStorage'], // ← Must include localStorage
}
```

---

### Issue: Switching language doesn't update all components

**Cause:** useTranslation() not called correctly

**Solution:**
```typescript
// Wrong: Doesn't respond to language changes
function BadComponent() {
  const { t } = useTranslation();
  const text = t('common.title'); // Called outside component
  
  return <div>{text}</div>; // Static, doesn't re-render
}

// Correct: Re-renders when language changes
function GoodComponent() {
  const { t } = useTranslation();
  
  return <div>{t('common.title')}</div>; // Called in render
}
```

---

### Issue: I18nProvider is not wrapping everything

**Cause:** Provider placed too deep in component tree

**Solution:**
```typescript
// Wrong: Only children of I18nProvider get translations
function App() {
  return (
    <Header /> {/* Can't use i18n here */}
    <I18nProvider>
      <Main /> {/* Can use i18n here */}
    </I18nProvider>
  );
}

// Correct: Wraps entire app
function App() {
  return (
    <I18nProvider>
      <Header /> {/* Can use i18n */}
      <Main /> {/* Can use i18n */}
    </I18nProvider>
  );
}
```

---

## Migration Guide

### From v1.3.0 → v1.4.0 (Current)

**What's New:**
- 6 new languages (es, pt, ar, pl, ja, tr)
- Extended language support parameter
- Improved I18nProvider error handling

**Migration Steps:**

```bash
# 1. Update package.json
npm install holie-vkit@1.4.0

# 2. No code changes needed if using 4 languages!
# Your existing setup continues to work

# 3. Optional: Activate extended languages
// App.tsx
<I18nProvider activeLanguages={['nl', 'en', 'de', 'fr', 'es', 'pt']}>
  {/* Now supports Portuguese, Spanish, etc. */}
</I18nProvider>

# 4. Build and test
npm run build
npm run dev
```

**Backward Compatibility:**
- ✅ Existing projects work without changes
- ✅ 4-language default still available
- ✅ All old API calls still work
- ✅ No breaking changes

---

### From Custom i18n → holie-vkit i18n

**For holie (custom TypeScript):**

```typescript
// Before: Custom useHolieI18n hook
import { useHolieI18n } from './hooks/useHolieI18n';
const t = useHolieI18n();
return <h1>{t.pages.home.title}</h1>;

// After: holie-vkit with custom bridge
// Keep useHolieI18n but have it sync with holie-vkit
export function useHolieI18n() {
  const { i18n } = useTranslation();
  const language = i18n.language as 'nl' | 'en' | 'fr' | 'de';
  
  return holieTranslations[language] || holieTranslations.nl;
}
```

**For simple projects:**

```bash
# Before: No i18n
function App() {
  return <div>Hello</div>;
}

# After: Full i18n support
# 1. npm install holie-vkit
# 2. Add I18nProvider
# 3. Update locale files
# 4. Use useTranslation()
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.4.0 | Jan 2026 | Added 6 new languages (es, pt, ar, pl, ja, tr), improved i18n config |
| 1.3.0 | Jan 2026 | Initial i18n implementation, 4 base languages |
| 1.2.2 | Jan 2026 | Component consolidation |
| 1.2.0 | Jan 2026 | Dependency upgrades |

---

## Support & Contributing

Found a bug? Have a feature request?

1. Check the [I18N_AUDIT_REPORT.md](./I18N_AUDIT_REPORT.md) for known issues
2. Open an issue on GitHub
3. Submit a pull request with fixes

---

**Last Updated:** January 28, 2026  
**Maintained by:** Development Team  
**License:** MIT
