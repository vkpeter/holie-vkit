import * as React from "react";
export interface SkeletonProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Skeleton: React.FC<SkeletonProps>;
