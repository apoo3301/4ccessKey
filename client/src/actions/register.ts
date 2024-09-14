"use server";

import { hashPassword } from "@/security/hash";
import { RegisterType } from "@/types";
import { db } from "@/data/database";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterType>) => {
  const validatedFields = RegisterType.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fileds !" };
  }

  const { email, password, name } = validatedFields.data;
  const hash = hashPassword(password);
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

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
