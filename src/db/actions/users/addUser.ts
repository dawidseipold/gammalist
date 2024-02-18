"use server";

import { db } from "@/db";
import { users, InsertUser } from "@/db/schema/users";

export const addUser = async (user: InsertUser) => {
  await db.insert(users).values({
    name: user.name,
    email: user.email,
    password: user.password,
  });
};
