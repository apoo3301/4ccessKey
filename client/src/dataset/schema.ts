import { boolean, timestamp, pgTable, text, primaryKey, integer, pgEnum, type AnyPgColumn, uniqueIndex, json, uuid } from "drizzle-orm/pg-core";
import { sql, SQL } from "drizzle-orm";
import { v7 as uuidv7 } from "uuid";
import { unique } from "drizzle-orm/mysql-core";


export function lower(email: AnyPgColumn): SQL {
    return sql`LOWER(${email})`;
}

export const roleEnum = pgEnum("role", ["admin", "moderator", "guest"]);

export const users = pgTable("user", {
    id: text("id").primaryKey().$defaultFn(uuidv7),
    name: text("name"),
    email: text("email").notNull(),
    password: text("password").notNull(),
    role: roleEnum("role").notNull().default("guest"),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    ip: text("ip").notNull(),
}, (table) => ({ emailUniqueIndex: uniqueIndex("adminEmailUniqueIndex").on(lower(table.email),), }));

