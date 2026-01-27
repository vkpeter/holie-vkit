export interface AICompletionOptions {
    prompt: string;
    model?: string;
    temperature?: number;
    maxTokens?: number;
}
export declare function useAICompletion(): {
    loading: boolean;
    result: string | null;
    error: string | null;
    complete: (options: AICompletionOptions) => Promise<void>;
};
