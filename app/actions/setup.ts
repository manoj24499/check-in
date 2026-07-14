"use server";

import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import { setupSchema } from "@/schemas/setup-schema";
import { redirect } from "next/navigation";

export async function setupSchool(formData: FormData) {
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
      error: result.error.issues[0].message,
    };
  }

  const schoolExists = await prisma.school.findFirst();

  if (schoolExists) {
    return {
      success: false,
      error: "School already exists.",
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
      username: result.data.username,
      password: hashedPassword,
      name: result.data.adminName,
      role: "ADMIN",
      schoolId: school.id,
    },
  });

  redirect("/login");
}