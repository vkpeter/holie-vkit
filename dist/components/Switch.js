import { jsx as _jsx } from "react/jsx-runtime";
export const Switch = ({ checked, onCheckedChange, ...props }) => (_jsx("input", { type: "checkbox", checked: checked, onChange: e => onCheckedChange(e.target.checked), ...props }));
