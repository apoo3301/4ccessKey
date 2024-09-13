import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

const DATABASE_TOKEN = process.env.DATABASE_TOKEN;

const drizzleConfig = {
    schema: "./src/data/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: { url: DATABASE_TOKEN || "postgresql://0x_owner:x7vI1DhiqmAz@ep-flat-mountain-a5d4c26j.us-east-2.aws.neon.tech/0x?sslmode=require" },
} satisfies Config;

export default defineConfig(drizzleConfig);