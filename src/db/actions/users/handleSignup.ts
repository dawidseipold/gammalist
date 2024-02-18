"use server";

import { lucia } from "@/auth";
import { db } from "@/db";
import { InsertUser, users } from "@/db/schema/users";
import { SignUpData } from "@/validation/signup";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";

export const handleSignup = async (user: SignUpData) => {
  try {
    const argon2id = new Argon2id();

    const userId = generateId(32);
    const userPassword = await argon2id.hash(user.password);

    await db.insert(users).values({
      id: userId,
      username: user.username,
      email: user.email,
      password: userPassword,
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);

      return;
    }

    console.log("An unknown error occurred");
  }
};
