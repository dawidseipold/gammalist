import { pgTable, text, timestamp, bigserial } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  // id: bigserial("id", { mode: "number" }).primaryKey().notNull(),
  id: text("id").primaryKey().notNull(),
  username: text("name").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type InsertUser = typeof users.$inferInsert;
export type SelectUser = typeof users.$inferSelect;
