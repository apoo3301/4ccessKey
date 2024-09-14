"use server";
import { LoginType } from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginType>) => {
    const validatedFields = LoginType.safeParse(values);

    return { error: "Invalid fields" };

    return { success: "Email sent !"}
}