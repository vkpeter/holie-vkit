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

  const ToastComponent = toast ? (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg z-50 ${
        toast.type === "success"
          ? "bg-green-500 text-white"
          : toast.type === "error"
          ? "bg-red-500 text-white"
          : toast.type === "warning"
          ? "bg-yellow-500 text-black"
          : "bg-blue-500 text-white"
      }`}
    >
      {toast.message}
    </div>
  ) : null;

  React.useEffect(() => {
    if (toast && toast.duration !== 0) {
      const timer = setTimeout(() => setToast(null), toast.duration || 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return { showToast, hideToast, ToastComponent };
}
