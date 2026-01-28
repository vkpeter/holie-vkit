import { useContext, createContext } from 'react';

type AICompletionContextType = {
  complete: (prompt: string, options?: Record<string, any>) => Promise<string>;
  isLoading: boolean;
  error: Error | null;
} | null;

export const AICompletionContext = createContext<AICompletionContextType>(null);

export function useAICompletion() {
  const context = useContext(AICompletionContext);
  if (!context) {
    // Fallback for projects that don't use AICompletionProvider
    return {
      complete: async (prompt: string) => '',
      isLoading: false,
      error: null,
    };
  }
  return context;
}
