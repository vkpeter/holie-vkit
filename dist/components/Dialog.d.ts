import * as React from "react";
export interface DialogProps {
    open: boolean;
    onClose: () => void;
    title?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const Dialog: React.FC<DialogProps>;
