"use server";

import { db } from "@/db";
import { users } from "@/db/schema/users";

export const getUsers = async () => {
  const result = await db.select().from(users);

  return result;
};
