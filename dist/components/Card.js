import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
export const Card = React.forwardRef(({ children, className = '', ...props }, ref) => (_jsx("div", { ref: ref, className: `rounded-lg border bg-background text-foreground shadow-sm ${className}`, ...props, children: children })));
Card.displayName = 'Card';
export const CardHeader = ({ children, className = '', ...props }) => (_jsx("div", { className: `p-4 border-b ${className}`, ...props, children: children }));
export const CardContent = ({ children, className = '', ...props }) => (_jsx("div", { className: `p-4 ${className}`, ...props, children: children }));
export const CardFooter = ({ children, className = '', ...props }) => (_jsx("div", { className: `p-4 border-t ${className}`, ...props, children: children }));
export const CardTitle = ({ children, className = '', ...props }) => (_jsx("h3", { className: `text-2xl font-semibold leading-none tracking-tight ${className}`, ...props, children: children }));
export const CardDescription = ({ children, className = '', ...props }) => (_jsx("p", { className: `text-sm text-muted-foreground ${className}`, ...props, children: children }));
