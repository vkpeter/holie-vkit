import { z } from 'zod';

export const emailSchema = z.string().email('Invalid email address');
export const passwordSchema = z.string().min(6, 'Password must be at least 6 characters');
export const authSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  displayName: z.string()
    .refine((val) => !val || !val.includes('@'), {
      message: 'Display name cannot contain email address',
    })
    .optional(),
});
export const calculatePasswordStrength = (pwd: string): { score: number; label: string; color: string } => {
  if (!pwd) return { score: 0, label: '', color: '' };
  let score = 0;
  if (pwd.length >= 6) score++;
  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  if (score <= 2) return { score, label: 'Weak', color: 'text-destructive' };
  if (score <= 4) return { score, label: 'Medium', color: 'text-yellow-600' };
  return { score, label: 'Strong', color: 'text-green-600' };
};
export const authErrorMessages: Record<string, string> = {
  'auth/invalid-credentials': 'Invalid login credentials',
  'auth/user-already-exists': 'This email address is already registered',
  'auth/email-not-confirmed': 'Email address not yet confirmed',
};
export const validateEmail = (email: string): string => {
  if (!email) return '';
  try {
    emailSchema.parse(email);
    return '';
  } catch {
    return 'Invalid email address';
  }
};
export const validatePassword = (password: string): string => {
  if (!password) return '';
  if (password.length < 6) return 'Password too short';
  return '';
};
