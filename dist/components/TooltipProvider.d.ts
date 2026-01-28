import * as React from "react";
export declare const TooltipProvider: React.FC<{
    children: React.ReactNode;
}>;
export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
