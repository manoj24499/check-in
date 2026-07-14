import { z } from "zod";

export const setupSchema = z
  .object({
    schoolName: z.string().min(3, "School name is required"),
    schoolCode: z
      .string()
      .min(3, "School code is required")
      .max(10, "School code is too long"),
    adminName: z.string().min(3, "Admin name is required"),
    username: z.string().min(4, "Username must be at least 4 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SetupSchema = z.infer<typeof setupSchema>;