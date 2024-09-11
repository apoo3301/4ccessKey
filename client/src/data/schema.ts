import { boolean, timestamp, pgTable, text, primaryKey, integer, pgEnum, type AnyPgColumn, uniqueIndex, json, uuid} from "drizzle-orm/pg-core";
import { sql, SQL } from "drizzle-orm";
import { time } from "console";

export function lower(email: AnyPgColumn): SQL {
    return sql`lower(${email})`;
}

export const roleEnum = pgEnum("role", ["admin", "user"]);

export const users = pgTable("user", {
    id: text("id").primaryKey().$defaultFn(() => generateUUIDv7()),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    password: text("password"),
    role: roleEnum("role").notNull().default("user"),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
}, (table) => ({
    emailUniqueIndex: uniqueIndex("emailUniqueIndex").on(lower(table.email)),
}));

export const adminUserEmailAddresses = pgTable("adminUserEmailAddress", {
    id: text("id").primaryKey().$defaultFn(() => generateUUIDv7()),
    email: text("email").notNull(),
}, (table) => ({
    adminEmailUniqueIndex: uniqueIndex("adminEmailUniqueIndex").on(lower(table.email)),
}))