import * as React from "react";
export interface PopoverProps {
    trigger: React.ReactNode;
    content: React.ReactNode;
    className?: string;
}
export declare const Popover: React.FC<PopoverProps>;
