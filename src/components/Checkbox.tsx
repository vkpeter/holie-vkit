import * as React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ label, className = '', ...props }, ref) => (
  <label className={`inline-flex items-center gap-2 cursor-pointer ${className}`}>
    <input ref={ref} type="checkbox" className="accent-primary" {...props} />
    {label && <span>{label}</span>}
  </label>
));
Checkbox.displayName = 'Checkbox';
