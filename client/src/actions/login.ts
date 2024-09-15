"use server";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { LoginType } from "@/types";
import { signIn } from "@/auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginType>) => {
    const validatedFields = LoginType.safeParse(values);

    if (!validatedFields.success) {
        return { error: "invalid fields" };
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {
            email, password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "invalid credentials" };
            }
        }
    }
}