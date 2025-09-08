import { signupSchema } from "./signup.schema";

export const resetPasswordSchema = signupSchema.pick({
    password: true,
    confirmPassword: true,
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});