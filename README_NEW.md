# holie-vkit v1.4.0

Shared React component library providing centralized UI components, i18n infrastructure, analytics, and AI hooks for holie, eendje, hapklik, scherp-mes-nu, and related projects.

## Features

### 🌍 Multi-Language Support (10 Languages)
- Centralized i18n system with holie-vkit as single source of truth for UI translations
- Supports 10 languages: Dutch (nl), English (en), German (de), French (fr), Spanish (es), Portuguese (pt), Arabic (ar), Polish (pl), Japanese (ja), Turkish (tr)
- Automatic language detection (localStorage → browser language → default)
- Language persistence across sessions
- Hybrid architecture: holie-vkit provides UI, projects manage content

**Available Components:**
- `I18nProvider` - Wraps your app with i18n support
- `LanguageSwitcher` - UI component for language selection
- Locale files for all 10 languages

**Usage:**
```typescript
import { I18nProvider } from 'holie-vkit';
import { useTranslation } from 'react-i18next';

// In App.tsx
<I18nProvider activeLanguages={['nl', 'en', 'de', 'fr']}>
  <YourApp />
</I18nProvider>

// In any component
function MyComponent() {
  const { t, i18n } = useTranslation();
  return <h1>{t('common.title')}</h1>;
}
```

### 📊 Analytics Hooks
- `useAnalytics` - Track events and page views
- Analytics utilities for tracking user behavior

### 🤖 AI Integration
- `useAICompletion` - Generate AI responses
- AI utility functions

### 🎨 Core UI Components
- Navbar, Footer
- LanguageSwitcher
- Toaster/Toast notifications
- 30+ pre-built components (Button, Card, Dialog, Input, Select, etc.)
- Form components with validation

## Installation

```bash
npm install holie-vkit@latest
```

## Quick Start (5 minutes)

### 1. Initialize i18n in main.tsx
```typescript
import './i18n/config'; // Must be first!
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### 2. Wrap with I18nProvider
```typescript
import { I18nProvider } from 'holie-vkit';

export default function App() {
  return (
    <I18nProvider activeLanguages={['nl', 'en', 'de', 'fr']}>
      <YourApp />
    </I18nProvider>
  );
}
```

### 3. Create locale files
```json
// src/i18n/locales/nl.json
{
  "common": {
    "title": "Mijn App",
    "submit": "Versturen"
  }
}
```

### 4. Use translations in components
```typescript
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>
        English
      </button>
    </div>
  );
}
```

## Documentation

- **[I18N Implementation Guide](./I18N_IMPLEMENTATION_GUIDE.md)** - Complete setup guide for all patterns (standard, hybrid, custom)
- **[I18N Audit Report](./I18N_AUDIT_REPORT.md)** - Technical audit, identified issues, and recommendations
- **[npm Publish Workflow](./NPM_PUBLISH_WORKFLOW.md)** - Step-by-step publish and update instructions

## Available Languages

| Code | Language | Status |
|------|----------|--------|
| nl | Nederlands | ✅ Complete |
| en | English | ✅ Complete |
| de | Deutsch | ✅ Complete |
| fr | Français | ✅ Complete |
| es | Español | ✅ Available |
| pt | Português | ✅ Available |
| ar | العربية | ✅ Available |
| pl | Polski | ✅ Available |
| ja | 日本語 | ✅ Available |
| tr | Türkçe | ✅ Available |

## Architecture

holie-vkit uses a **hybrid i18n architecture**:
- **Centralized (holie-vkit):** UI translations for all components (buttons, labels, errors, common strings)
- **Decentralized (per project):** Content-specific translations managed by each project in their own locale files

This allows:
- ✅ Consistent UI across all projects
- ✅ Projects manage their own content
- ✅ Easy to add new projects without duplicating UI strings
- ✅ Simple to update UI translations globally

See [I18N Implementation Guide](./I18N_IMPLEMENTATION_GUIDE.md) for detailed architecture explanation.

## Import Usage

```typescript
// Components
import { Navbar, Footer, LanguageSwitcher, Button, Card } from 'holie-vkit';

// i18n
import { I18nProvider } from 'holie-vkit';
import type { Language } from 'holie-vkit';

// Hooks
import { useAnalytics } from 'holie-vkit';
import { useAICompletion } from 'holie-vkit';
```

## Development

### Adding New Components
1. Create component in `src/components/`
2. Export from `src/index.ts`
3. Add translations if needed
4. Test in dependent projects

### Updating i18n
1. Edit locale files in `src/i18n/locales/`
2. No code changes needed if using existing keys
3. Run `npm run build` to compile
4. Bump version in package.json
5. Run `npm publish`

### TypeScript
```bash
npm run build  # Compile TypeScript
```

## Known Issues

See [I18N_AUDIT_REPORT.md](./I18N_AUDIT_REPORT.md) for:
- Identified issues (26 total, categorized by severity)
- Recommended fixes and timeline
- Technical debt and improvements

**Critical Issues (v1.4.1 planned):**
- Language type consolidation across projects
- eendje I18nProvider/LanguageProvider sync optimization

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.4.0 | Jan 2026 | Added 6 new languages (es, pt, ar, pl, ja, tr), improved i18n support |
| 1.3.0 | Jan 2026 | Initial i18n implementation with 4 base languages |
| 1.2.2 | Jan 2026 | Component consolidation |
| 1.2.0 | Jan 2026 | Initial dependency upgrades |

## Projects Using holie-vkit

- **holie** - Portfolio platform (custom LanguageContext bridge)
- **scherp-mes-nu** - Scissors sharpening services (hybrid i18n)
- **eendje** - Blog platform (hybrid i18n + Supabase)
- **hapklik** - Activity platform (standard i18n)

## Support

- 📖 Read the [I18N Implementation Guide](./I18N_IMPLEMENTATION_GUIDE.md)
- 🔍 Check the [Audit Report](./I18N_AUDIT_REPORT.md) for known issues
- 📋 Follow the [npm Publish Workflow](./NPM_PUBLISH_WORKFLOW.md) for updates

## License

MIT

---

**Status:** Production Ready (v1.4.0)  
**Build:** TypeScript + React 19 + Vite  
**Languages:** 10 supported  
**Build Time:** ~5 seconds  
**Dependencies:** Minimal (react-i18next, i18next, tailwindcss)
