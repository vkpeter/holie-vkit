import * as React from "react";

export interface ToastOptions {
  message: string;
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
}

export function useToast() {
  const [toast, setToast] = React.useState<ToastOptions | null>(null);
  const showToast = (options: ToastOptions) => setToast(options);
  const hideToast = () => setToast(null);

  React.useEffect(() => {
    if (toast && toast.duration !== 0) {
      const timer = setTimeout(() => setToast(null), toast.duration || 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  let bgClass = "bg-blue-500 text-white";
  if (toast?.type === "success") bgClass = "bg-green-500 text-white";
  else if (toast?.type === "error") bgClass = "bg-red-500 text-white";
  else if (toast?.type === "warning") bgClass = "bg-yellow-500 text-black";

  function ToastComponent() {
    if (!toast) return null;
    return (
      <div className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg z-50 ${bgClass}`}>
        {toast.message}
      </div>
    );
  }

  return { showToast, hideToast, ToastComponent };
}
