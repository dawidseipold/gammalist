import { adapter } from "@/db";
import { SelectUser } from "@/db/schema/users";
import { Lucia } from "lucia";

interface DatabaseUserAttributes extends SelectUser {}

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
      email: attributes.email,
      password: attributes.password,
      createdAt: attributes.createdAt,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}
