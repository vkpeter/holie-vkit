import * as React from "react";
export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
