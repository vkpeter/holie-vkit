import * as React from "react";

export interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
}

export const Sheet: React.FC<SheetProps> = ({ open, onClose, children, side = "right", className = '' }) => {
  if (!open) return null;
  let positionClass = "right-0 top-0 h-full w-80";
  if (side === "left") positionClass = "left-0 top-0 h-full w-80";
  if (side === "top") positionClass = "top-0 left-0 w-full h-80";
  if (side === "bottom") positionClass = "bottom-0 left-0 w-full h-80";
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className={`fixed bg-white shadow-lg transition-all duration-300 ${positionClass} ${className}`}>
        {children}
      </div>
    </div>
  );
};
