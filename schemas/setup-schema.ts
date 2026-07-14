import { z } from "zod";

export const setupSchema = z
	.object({
		schoolName: z
			.string()
			.trim()
			.min(1, "School name is required")
			.min(3, "School name must be at least 3 characters"),
		schoolCode: z
			.string()
			.trim()
			.min(1, "School code is required")
			.max(10, "School code is too long"),

		adminName: z
			.string()
			.trim()
			.min(1, "Admin name is required")
			.min(3, "Admin name must be at least 3 characters"),

		username: z
			.string()
			.trim()
			.min(1, "Username is required")
			.min(4, "Username must be at least 4 characters"),

		password: z
			.string()
			.min(1, "Password is required")
			.min(8, "Password must be at least 8 characters"),

		confirmPassword: z.string().min(1, "Confirm Password is required"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export type SetupSchema = z.infer<typeof setupSchema>;