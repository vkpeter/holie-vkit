import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
export const Popover = ({ trigger, content, className = '' }) => {
    const [open, setOpen] = React.useState(false);
    const popoverRef = React.useRef(null);
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);
    return (_jsxs("span", { className: "relative inline-block", ref: popoverRef, children: [_jsx("span", { onClick: () => setOpen((v) => !v), children: trigger }), open && (_jsx("span", { className: `absolute z-50 left-1/2 -translate-x-1/2 mt-2 px-4 py-2 rounded bg-white border shadow-lg ${className}`, children: content }))] }));
};
