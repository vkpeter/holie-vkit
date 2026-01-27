import * as React from "react";

export interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100, className = '' }) => {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={`w-full bg-gray-200 rounded h-2 ${className}`} role="progressbar" aria-valuenow={value} aria-valuemax={max} aria-valuemin={0}>
      <div className="bg-blue-500 h-2 rounded" style={{ width: `${percent}%` }} />
    </div>
  );
};
