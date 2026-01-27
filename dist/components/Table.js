import { jsx as _jsx } from "react/jsx-runtime";
export const Table = ({ children, className = '' }) => (_jsx("div", { className: `overflow-x-auto ${className}`, children: _jsx("table", { className: "min-w-full border-collapse", children: children }) }));
export const TableHead = ({ children, className = '' }) => (_jsx("thead", { className: className, children: children }));
export const TableBody = ({ children, className = '' }) => (_jsx("tbody", { className: className, children: children }));
export const TableRow = ({ children, className = '' }) => (_jsx("tr", { className: className, children: children }));
export const TableCell = ({ children, className = '' }) => (_jsx("td", { className: `px-4 py-2 border-b ${className}`, children: children }));
