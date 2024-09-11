"use server"

import { SignUpSchema } from "@/validators/signUpValidators";
import { lower, users } from "@/data/schema";
import * as v from "valibot";
import db from "@/data"
import { eq } from "drizzle-orm";
import { USER_ROLES } from "@/lib/constants";
