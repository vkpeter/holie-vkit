import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Sheet = ({ open, onClose, children, side = "right", className = '' }) => {
    if (!open)
        return null;
    let positionClass = "right-0 top-0 h-full w-80";
    if (side === "left")
        positionClass = "left-0 top-0 h-full w-80";
    if (side === "top")
        positionClass = "top-0 left-0 w-full h-80";
    if (side === "bottom")
        positionClass = "bottom-0 left-0 w-full h-80";
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex", children: [_jsx("div", { className: "fixed inset-0 bg-black/40", onClick: onClose }), _jsx("div", { className: `fixed bg-white shadow-lg transition-all duration-300 ${positionClass} ${className}`, children: children })] }));
};
