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
