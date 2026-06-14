import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address!"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain uppercase, lowercase, number, and special character",
      }
    ),
});

export const registerSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Invalid email address!"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "Password must contain uppercase, lowercase, number, and special character",
      }
    ),
});

export const searchSchema = z.object({
  searchText: z.string().min(3, "Search query must be at least 3 characters"),
});
