import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export const LanguageSwitcher = ({ languages, current, onSelect, className = '', }) => {
    return (_jsx("div", { className: `relative ${className}`, children: _jsx("select", { className: "rounded px-2 py-1 border bg-background text-foreground", value: current, onChange: e => onSelect(e.target.value), "aria-label": "Select language", children: languages.map(lang => (_jsxs("option", { value: lang.code, children: [lang.flag ? `${lang.flag} ` : '', lang.label] }, lang.code))) }) }));
};
