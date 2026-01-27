import * as React from "react";
export interface AvatarProps {
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
    fallback?: React.ReactNode;
}
export declare const Avatar: React.FC<AvatarProps>;
