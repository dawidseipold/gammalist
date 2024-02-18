import {
  object,
  email,
  string,
  minLength,
  maxLength,
  regex,
  type Output,
} from "valibot";

export const SignUpSchema = object({
  username: string([
    minLength(3, "Username must be at least 3 characters long."),
    maxLength(18, "Username must be at most 18 characters long."),
  ]),
  email: string([
    minLength(1, "Email is required."),
    email("Invalid email address."),
  ]),
  password: string([
    minLength(1, "Please enter your password."),
    minLength(8, "Your password must have 8 characters or more."),
    regex(/[a-z]/, "Your password must contain at least one lowercase letter."),
    regex(/[A-Z]/, "Your password must contain at least one uppercase letter."),
    regex(/[0-9]/, "Your password must contain at least one number."),
  ]),
});

export type SignUpData = Output<typeof SignUpSchema>;
