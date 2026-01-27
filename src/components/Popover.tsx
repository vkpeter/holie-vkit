import * as React from "react";

export interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}

export const Popover: React.FC<PopoverProps> = ({ trigger, content, className = '' }) => {
  const [open, setOpen] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <span className="relative inline-block" ref={popoverRef}>
      <span onClick={() => setOpen((v) => !v)}>{trigger}</span>
      {open && (
        <span className={`absolute z-50 left-1/2 -translate-x-1/2 mt-2 px-4 py-2 rounded bg-white border shadow-lg ${className}`}>{content}</span>
      )}
    </span>
  );
};
