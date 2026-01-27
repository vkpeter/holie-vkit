import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
export function useToast() {
    const [toast, setToast] = React.useState(null);
    const showToast = (options) => setToast(options);
    const hideToast = () => setToast(null);
    React.useEffect(() => {
        if (toast && toast.duration !== 0) {
            const timer = setTimeout(() => setToast(null), toast.duration || 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);
    let bgClass = "bg-blue-500 text-white";
    if ((toast === null || toast === void 0 ? void 0 : toast.type) === "success")
        bgClass = "bg-green-500 text-white";
    else if ((toast === null || toast === void 0 ? void 0 : toast.type) === "error")
        bgClass = "bg-red-500 text-white";
    else if ((toast === null || toast === void 0 ? void 0 : toast.type) === "warning")
        bgClass = "bg-yellow-500 text-black";
    function ToastComponent() {
        if (!toast)
            return null;
        return (_jsx("div", { className: `fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg z-50 ${bgClass}`, children: toast.message }));
    }
    return { showToast, hideToast, ToastComponent };
}
