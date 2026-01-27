import { jsx as _jsx } from "react/jsx-runtime";
export const Skeleton = ({ width = '100%', height = 16, className = '', style }) => {
    return (_jsx("span", { className: `inline-block bg-gray-200 animate-pulse rounded ${className}`, style: { width, height, ...style } }));
};
