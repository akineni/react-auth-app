import { z } from 'zod';

export const signupSchema = z.object({
    fullName: z.string()
        .min(2, 'Full name must be at least 2 characters')
        .max(100, 'Full name must be less than 100 characters')
        .regex(/^[a-zA-Z\s]+$/, 'Full name can only contain letters and spaces'),

    email: z.email('Please enter a valid email address')
        .min(5, 'Email must be at least 5 characters')
        .max(255, 'Email must be less than 255 characters'),

    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .max(100, 'Password must be less than 100 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),

    confirmPassword: z.string()
        .min(1, 'Please confirm your password')
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});