import { adminUserEmailAddresses, lower } from "@/data/schema";
import db from "@/data";
import "server-only";

export const findAdminUserEmailAddresses = async () => {
    const adminUserEmailAddress = await db
    .select({ email: lower(adminUserEmailAddresses.email)})
    .from(adminUserEmailAddresses);

    return adminUserEmailAddress.map((item) => item.email as string);
}