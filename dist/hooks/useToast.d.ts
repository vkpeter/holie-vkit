export interface ToastOptions {
    message: string;
    type?: "info" | "success" | "warning" | "error";
    duration?: number;
}
export declare function useToast(): void;
