import type { IFormData } from "../types/types";

export const validateLogin = (
  data: IFormData
): IFormData => {
  const errors: IFormData = {email:'',password:''};

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!data.email.includes("@")) {
    errors.email = "Invalid email";
  }

  if (!data.password.trim()) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

