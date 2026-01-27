import { jsx as _jsx } from "react/jsx-runtime";
export const Select = ({ children, ...props }) => _jsx("select", { ...props, children: children });
export const SelectContent = ({ children }) => _jsx("div", { children: children });
export const SelectItem = ({ children, ...props }) => _jsx("option", { ...props, children: children });
export const SelectTrigger = ({ children, ...props }) => _jsx("div", { ...props, children: children });
export const SelectValue = ({ children }) => _jsx("span", { children: children });
