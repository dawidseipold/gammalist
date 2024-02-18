"use client";

import { handleSignup } from "@/db/actions/users/handleSignup";
import {
  validateSignup,
  ValidationResult,
} from "@/validation/actions/validateSignup";
import { SignUpData } from "@/validation/signup";
import { useEffect, useState } from "react";

const SignUpPage = () => {
  const [formPending, setFormPending] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationResult["errors"]>(null);

  const handleSubmit = async (formData: FormData) => {
    const data = validateSignup(formData);

    if (data.errors) {
      console.log(data.errors);
      setErrors(data.errors);

      return;
    }

    await handleSignup(data.result as SignUpData);
  };

  useEffect(() => {}, [formPending]);

  return (
    <>
      <h1>Create an account</h1>

      <form action={handleSubmit} className="flex flex-col gap-y-4">
        username
        <input name="username" type="text" required />
        {errors?.username && (
          <ul>
            {errors.username.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        email
        <input name="email" type="email" required />
        {errors?.email && (
          <ul>
            {errors.email.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        password
        <input name="password" type="password" required />
        {errors?.password && (
          <ul>
            {errors.password.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {errors?.unknown && (
          <li>
            {errors.unknown.map((error) => (
              <span key={error}>{error}</span>
            ))}
          </li>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUpPage;
