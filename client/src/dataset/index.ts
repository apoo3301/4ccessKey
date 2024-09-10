import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const DATABASE_TOKEN = process.env.DATABASE_TOKEN;

if (!DATABASE_TOKEN) {
  throw new Error("DATABASE_TOKEN is not set");
}

const sql = neon(DATABASE_TOKEN);
const db = drizzle(sql, { schema });

db.select().from(schema.users).limit(1).then(() => {
    console.log("DATABASE IS CONNECTED");
}).catch((error: any) => {
    console.error("DATABASE CONNECTION ERROR", error);
    process.exit(1);
});

export default db;