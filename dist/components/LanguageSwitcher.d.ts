import React from 'react';
export interface LanguageSwitcherProps {
    languages: {
        code: string;
        label: string;
        flag?: string;
    }[];
    current: string;
    onSelect: (lang: string) => void;
    className?: string;
}
export declare const LanguageSwitcher: React.FC<LanguageSwitcherProps>;
