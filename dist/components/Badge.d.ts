import * as React from "react";
export interface BadgeProps {
    children: React.ReactNode;
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "error";
    className?: string;
}
export declare const Badge: React.FC<BadgeProps>;
