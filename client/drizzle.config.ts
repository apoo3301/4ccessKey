import { defineConfig } from "drizzle-kit";
import type { Config } from "drizzle-kit";

const DATABASE_TOKEN = process.env.DATABASE_TOKEN ?? "postgresql://primary_shard_owner:yct6fQBo5PHU@ep-young-wave-a5qhswns.us-east-2.aws.neon.tech/primary_shard?sslmode=require";

const drizzleConfig = {
    schema: "./src/dataset/schema.ts",
    out: "./migrations",
    dialect: "postgresql",
    dbCredentials: { url: DATABASE_TOKEN },
} satisfies Config;

export default defineConfig(drizzleConfig);