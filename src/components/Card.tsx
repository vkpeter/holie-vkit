import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, className = '', ...props }, ref) => (
  <div ref={ref} className={`rounded-lg border bg-background text-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
));
Card.displayName = 'Card';

export const CardHeader = ({ children, className = '', ...props }: CardProps) => (
  <div className={`p-4 border-b ${className}`} {...props}>{children}</div>
);
export const CardContent = ({ children, className = '', ...props }: CardProps) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);
export const CardFooter = ({ children, className = '', ...props }: CardProps) => (
  <div className={`p-4 border-t ${className}`} {...props}>{children}</div>
);
