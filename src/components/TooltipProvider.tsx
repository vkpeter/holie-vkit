import * as React from "react";

// Simple TooltipProvider wrapper - works with the custom Tooltip component
export const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className = '' }) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <span className="relative inline-block" onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      {children}
      {visible && (
        <span className={`absolute z-50 left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap ${className}`}>{content}</span>
      )}
    </span>
  );
};

