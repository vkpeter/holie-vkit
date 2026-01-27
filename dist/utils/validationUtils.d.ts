import { z } from 'zod';
export declare const emailSchema: z.ZodString;
export declare const passwordSchema: z.ZodString;
export declare const authSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    displayName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const calculatePasswordStrength: (pwd: string) => {
    score: number;
    label: string;
    color: string;
};
export declare const authErrorMessages: Record<string, string>;
export declare const validateEmail: (email: string) => string;
export declare const validatePassword: (password: string) => string;
