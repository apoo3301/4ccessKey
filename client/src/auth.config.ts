import type { NextAuthConfig } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import db from "./data";
import * as schema from "./data/schema";
import { USER_ROLES } from "./lib/constants";
import type { AdapterUser } from "@auth/core/adapters";
import { getTableColumns } from "drizzle-orm";
