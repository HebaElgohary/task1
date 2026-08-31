import type { IFormData } from "../types/types";

export const validateLogin = (data: IFormData) => {
  const errors: Partial<IFormData> = {};

  if (!data.email.trim()) {
    errors.email = "Email is required";
  }

  if (!data.password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

