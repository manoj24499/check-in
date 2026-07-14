"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import { setupSchema } from "@/app/schemas/setup-schema";
import { redirect } from "next/navigation";

export async function createSetup(formData: FormData) {
	const values = {
		schoolName: formData.get("schoolName"),
		schoolCode: formData.get("schoolCode"),
		adminName: formData.get("adminName"),
		username: formData.get("username"),
		password: formData.get("password"),
		confirmPassword: formData.get("confirmPassword"),
	};

	const result = setupSchema.safeParse(values);

	if (!result.success) {
		return {
			success: false,
			message: result.error.issues[0].message,
		};
	}

	// Prevent running setup twice
	const existingSchool = await prisma.school.findFirst();

	if (existingSchool) {
		return {
			success: false,
			message: "School has already been configured.",
		};
	}

	// Prevent duplicate username
	const existingUser = await prisma.user.findUnique({
		where: {
			username: result.data.username,
		},
	});

	if (existingUser) {
		return {
			success: false,
			message: "Username already exists.",
		};
	}

	const hashedPassword = await hashPassword(result.data.password);

	const school = await prisma.school.create({
		data: {
			name: result.data.schoolName,
			code: result.data.schoolCode,
		},
	});

	await prisma.user.create({
		data: {
			name: result.data.adminName,
			username: result.data.username,
			password: hashedPassword,
			role: "ADMIN",
			schoolId: school.id,
		},
	});

	redirect("/login");
}
