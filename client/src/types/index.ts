import * as z from "zod";

export const LoginType = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
});

export const RegisterType = z.object({
    name: z.string().min(3, {
        message: "Username must be at least 3 characters",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
});