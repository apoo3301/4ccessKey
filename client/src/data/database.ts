import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema"

const DATABASE_TOKEN = process.env.DATABASE_TOKEN;

if (!DATABASE_TOKEN) {
    throw new Error("DATABASE_TOKEN not found in environment variables");
}

const sql = neon(DATABASE_TOKEN);
const db = drizzle(sql, { schema });

export default db;  