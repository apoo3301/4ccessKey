"use server";

import { hashPassword } from "@/security/hash";
import { RegisterType } from "@/types";
import { db } from "@/data/database";
import * as z from "zod";
import { get } from "http";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterType>) => {
  const validatedFields = RegisterType.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fileds !" };
  }

  const { email, password, name } = validatedFields.data;
  const hash = hashPassword(password);
  const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "User already exists!" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hash,
        },
    });

    //mail

  return { success: "user created!" };
};
