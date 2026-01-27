import * as React from "react";
export interface AlertProps {
    children: React.ReactNode;
    type?: "info" | "success" | "warning" | "error";
    className?: string;
}
export declare const Alert: React.FC<AlertProps>;
