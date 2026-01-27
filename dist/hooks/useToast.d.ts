export interface ToastOptions {
    message: string;
    type?: "info" | "success" | "warning" | "error";
    duration?: number;
}
export declare function useToast(): {
    showToast: (options: ToastOptions) => void;
    hideToast: () => void;
    ToastComponent: () => import("react/jsx-runtime").JSX.Element | null;
};
