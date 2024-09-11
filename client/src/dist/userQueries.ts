import "server-only";

import db from "@/data";
import { lower, users } from "@/data/schema";
import { desc, eq, getTableColumns } from "drizzle-orm";
import { USER_ROLES } from "@/lib/constants";
import { auth } from "@/auth"

export async function findAllUsers() {
    const session = await auth()
    if (session?.user?.role !== USER_ROLES.ADMIN) {
        throw new Error("Unauthorized");
    }

    const { password, ...rest } = getTableColumns(users);

    const allUsers = await db
    .select({...rest})
    .from(users)
    .orderBy(desc(users.role));

    return allUsers;
}