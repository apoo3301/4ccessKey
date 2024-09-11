"use server"

import { VERIFICATION_TOKEN_EXP_MIN } from "@/lib/constants";
import { verificationToken } from "@/data/schema";
import db from "@/data";

export async function createVerificationTokenAction( identifier: (typeof verificationToken.$inferSelect)["identifier"],) {
    const expires = new Date(Date.now() + VERIFICATION_TOKEN_EXP_MIN * 60 * 1000);
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const newVerificatonToken = await db
    .insert(verificationToken)
    .values({ expires, identifier, token})
    .returning({ token: verificationToken.token })
    .then((res) => res[0]);

    return newVerificatonToken;
}
