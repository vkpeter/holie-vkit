import * as React from "react";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export declare const CardHeader: ({ children, className, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const CardContent: ({ children, className, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const CardFooter: ({ children, className, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const CardTitle: ({ children, className, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
export declare const CardDescription: ({ children, className, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
