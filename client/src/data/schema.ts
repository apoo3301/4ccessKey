import { boolean, timestamp, pgTable, text, primaryKey, integer, pgEnum, type AnyPgColumn, uniqueIndex, json, uuid} from "drizzle-orm/pg-core";
import generateUUIDv7 from "@/security/uuid";
import { sql, SQL } from "drizzle-orm";
import { time } from "console";

export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
    id: text("id").primaryKey().$defaultFn(() => generateUUIDv7()),
    username: text("username"),
    email: text("email").notNull(),
    password: text("password"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    role: roleEnum("role").notNull().default("user"),
})