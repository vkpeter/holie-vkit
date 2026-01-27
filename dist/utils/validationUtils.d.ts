export declare const emailSchema: any;
export declare const passwordSchema: any;
export declare const authSchema: any;
export declare const calculatePasswordStrength: (pwd: string) => {
    score: number;
    label: string;
    color: string;
};
export declare const authErrorMessages: Record<string, string>;
export declare const validateEmail: (email: string) => string;
export declare const validatePassword: (password: string) => string;
