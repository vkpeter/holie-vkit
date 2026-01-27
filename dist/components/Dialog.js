import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Dialog = ({ open, onClose, title, children, className = '' }) => {
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "fixed inset-0 bg-black/40", onClick: onClose }), _jsxs("div", { className: `relative bg-white rounded shadow-lg p-6 z-10 min-w-[320px] max-w-full ${className}`, children: [title && _jsx("div", { className: "font-semibold text-lg mb-2", children: title }), children, _jsx("button", { className: "absolute top-2 right-2 text-gray-400 hover:text-gray-600", onClick: onClose, "aria-label": "Close", children: "\u00D7" })] })] }));
};
