import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import dotenv from "dotenv";
import { sessions } from "./schema/sessions";
import { users } from "./schema/users";

dotenv.config({ path: ".env.local" });

const connectionString = process.env.DATABASE_URL!;

const sql = neon(connectionString);
const db = drizzle(sql);

export const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);
export { db };
