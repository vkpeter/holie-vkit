import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
const typeStyles = {
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
};
export const Toast = ({ message, type = "info", duration = 3000, onClose, className = '' }) => {
    React.useEffect(() => {
        if (!onClose)
            return;
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [onClose, duration]);
    return (_jsx("div", { className: `fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg z-50 ${typeStyles[type]} ${className}`, children: message }));
};
