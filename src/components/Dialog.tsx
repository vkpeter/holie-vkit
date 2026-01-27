import * as React from "react";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({ open, onClose, title, children, className = '' }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className={`relative bg-white rounded shadow-lg p-6 z-10 min-w-[320px] max-w-full ${className}`}>
        {title && <div className="font-semibold text-lg mb-2">{title}</div>}
        {children}
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600" onClick={onClose} aria-label="Close">×</button>
      </div>
    </div>
  );
};
