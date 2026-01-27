import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
export const Tooltip = ({ content, children, className = '' }) => {
    const [visible, setVisible] = React.useState(false);
    return (_jsxs("span", { className: "relative inline-block", onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false), children: [children, visible && (_jsx("span", { className: `absolute z-50 left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap ${className}`, children: content }))] }));
};
