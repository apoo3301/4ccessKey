import { db } from "@/data/database";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email} })
        return user;
    } catch (error: any) {
        return null;
    }
}

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id} })
        return user;
    } catch (error: any) {
        return null;
    }
}

