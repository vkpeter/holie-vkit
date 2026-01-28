import { useContext, createContext } from 'react';
export const AICompletionContext = createContext(null);
export function useAICompletion() {
    const context = useContext(AICompletionContext);
    if (!context) {
        // Fallback for projects that don't use AICompletionProvider
        return {
            complete: async (prompt) => '',
            isLoading: false,
            error: null,
        };
    }
    return context;
}
