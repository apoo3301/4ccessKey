import { boolean, timestamp, pgTable, text, primaryKey, integer, pgEnum, type AnyPgColumn, uniqueIndex, json, uuid } from "drizzle-orm/pg-core";
import { sql, SQL } from "drizzle-orm";
import { v7 as uuidv7 } from "uuid";
import { unique } from "drizzle-orm/mysql-core";
import { time } from "console";


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

export const adminUserEmail = pgTable("adminUserEmail", {
    id: text("id").primaryKey().$defaultFn(uuidv7),
    email: text("email").notNull(),
}, (table) => ({ adminUserEmailIndex: uniqueIndex("adminUserEmailIndex").on(lower(table.email),), }));

export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable("verificationToken", {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull()
}, (verificationTokens) => ({ compositePk: primaryKey({ columns: [verificationTokens.identifier, verificationTokens.token] }), }), );