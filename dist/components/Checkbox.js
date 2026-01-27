import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
export const Checkbox = React.forwardRef(({ label, className = '', ...props }, ref) => (_jsxs("label", { className: `inline-flex items-center gap-2 cursor-pointer ${className}`, children: [_jsx("input", { ref: ref, type: "checkbox", className: "accent-primary", ...props }), label && _jsx("span", { children: label })] })));
Checkbox.displayName = 'Checkbox';
