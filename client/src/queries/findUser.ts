import db from "@/data/database";
import { users } from "@/data/schema";
import { eq } from "drizzle-orm";

export const getUserById = async (userId: string) => {
  try {
    const user = await db.select().from(users).where(eq(users.id, userId));

    return user.length ? user[0] : null;
  } catch (error: any) {
    console.error("Error fetching user by ID:", error);
    throw new Error("Unable to fetch user by ID");
  }
};
