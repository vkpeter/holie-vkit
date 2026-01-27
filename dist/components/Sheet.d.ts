import * as React from "react";
export interface SheetProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: "left" | "right" | "top" | "bottom";
    className?: string;
}
export declare const Sheet: React.FC<SheetProps>;
