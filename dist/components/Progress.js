import { jsx as _jsx } from "react/jsx-runtime";
export const Progress = ({ value, max = 100, className = '' }) => {
    const percent = Math.min(100, Math.max(0, (value / max) * 100));
    return (_jsx("div", { className: `w-full bg-gray-200 rounded h-2 ${className}`, role: "progressbar", "aria-valuenow": value, "aria-valuemax": max, "aria-valuemin": 0, children: _jsx("div", { className: "bg-blue-500 h-2 rounded", style: { width: `${percent}%` } }) }));
};
