import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

const DATABASE_TOKEN = process.env.DATABASE_TOKEN ?? "postgresql://accesstoken_owner:VX3pvIOcdj7L@ep-bitter-brook-a59h3087.us-east-2.aws.neon.tech/accesstoken?sslmode=require";

const drizzleConfig = {
    schema: "./src/data/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: { url: DATABASE_TOKEN },
} satisfies Config;

export default defineConfig(drizzleConfig);