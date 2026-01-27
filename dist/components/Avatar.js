import { jsx as _jsx } from "react/jsx-runtime";
export const Avatar = ({ src, alt = "Avatar", size = 40, className = '', fallback }) => {
    return (_jsx("span", { className: `inline-flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${className}`, style: { width: size, height: size }, children: src ? (_jsx("img", { src: src, alt: alt, className: "object-cover w-full h-full" })) : (fallback || _jsx("span", { className: "text-gray-500 text-sm", children: "?" })) }));
};
