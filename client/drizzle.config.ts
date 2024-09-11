import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

const DATABASE_TOKEN = process.env.DATABASE_TOKEN ?? "!";

const drizzleConfig = {
    schema: "./src/data/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: { url: DATABASE_TOKEN },
} satisfies Config;

export default defineConfig(drizzleConfig);