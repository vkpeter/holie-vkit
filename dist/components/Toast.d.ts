import * as React from "react";
export interface ToastProps {
    message: string;
    type?: "info" | "success" | "warning" | "error";
    duration?: number;
    onClose?: () => void;
    className?: string;
}
export declare const Toast: React.FC<ToastProps>;
