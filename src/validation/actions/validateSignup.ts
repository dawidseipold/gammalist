import { ValiError, flatten, parse } from "valibot";
import { SignUpData, SignUpSchema } from "../signup";

export interface ValidationResult {
  result?: SignUpData | null;
  errors:
    | ({ [field in keyof SignUpData]?: string[] } & { unknown?: string[] })
    | null;
}

export const validateSignup = (formData: FormData): ValidationResult => {
  try {
    const user = parse(SignUpSchema, Object.fromEntries(formData.entries()));

    return {
      result: user,
      errors: null,
    };
  } catch (error) {
    if (error instanceof ValiError) {
      const flattenedErrors = flatten<typeof SignUpSchema>(error);
      const nestedErrors = flattenedErrors.nested;

      return { result: null, errors: nestedErrors };
    }

    return { result: null, errors: { unknown: ["An unknown error occurred"] } };
  }
};
