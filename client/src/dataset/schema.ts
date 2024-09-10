import { sql, SQL } from "drizzle-orm";
import { boolean, timestamp, pgTable, text, primaryKey, integer, pgEnum, type AnyPgColumn, uniqueIndex, json } from "drizzle-orm/pg-core";


export function lower(email: AnyPgColumn): SQL {
    return sql`LOWER(${email})`;
}

export const roleEnum = pgEnum("role", ["admin", "moderator", "guest"]);

export const users = pgTable("user", {
    id: text("id").primaryKey()
})