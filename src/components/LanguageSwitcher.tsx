
import React from 'react';

export interface LanguageSwitcherProps {
  languages: { code: string; label: string; flag?: string }[];
  current: string;
  onSelect: (lang: string) => void;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  languages,
  current,
  onSelect,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        className="rounded px-2 py-1 border bg-background text-foreground"
        value={current}
        onChange={e => onSelect(e.target.value)}
        aria-label="Select language"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.flag ? `${lang.flag} ` : ''}{lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};
