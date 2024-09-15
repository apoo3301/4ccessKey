import Credentials from "next-auth/providers/credentials";
import { NextAuthConfig } from "next-auth";
import { LoginType } from "@/types";
import { getUserByEmail } from "./data/user";
import { comparePasswordHash } from "./security/hash";
import { nullable } from "zod";


export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = LoginType.safeParse(credentials)

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data;
                    const user = await getUserByEmail(email);
                    if (!user || !user.password) return null;
                    const passwordMatch = comparePasswordHash(password, user.password);
                    if (!passwordMatch) return null;
                }
                return null;
            }
        })
    ],
} satisfies NextAuthConfig;