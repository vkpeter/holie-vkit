import * as React from "react";
export interface ProgressProps {
    value: number;
    max?: number;
    className?: string;
}
export declare const Progress: React.FC<ProgressProps>;
