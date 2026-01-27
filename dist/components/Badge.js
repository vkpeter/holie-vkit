import { jsx as _jsx } from "react/jsx-runtime";
const colorStyles = {
    default: "bg-gray-100 text-gray-800",
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-purple-100 text-purple-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
};
export const Badge = ({ children, color = "default", className = '' }) => {
    return (_jsx("span", { className: `inline-block px-2 py-0.5 rounded text-xs font-medium ${colorStyles[color]} ${className}`, children: children }));
};
