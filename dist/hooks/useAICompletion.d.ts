type AICompletionContextType = {
    complete: (prompt: string, options?: Record<string, any>) => Promise<string>;
    isLoading: boolean;
    error: Error | null;
} | null;
export declare const AICompletionContext: import("react").Context<AICompletionContextType>;
export declare function useAICompletion(): {
    complete: (prompt: string, options?: Record<string, any>) => Promise<string>;
    isLoading: boolean;
    error: Error | null;
};
export {};
