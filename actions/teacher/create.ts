"use server";

import { redirect } from "next/navigation";
import { createTeacher as createTeacherService } from "@/lib/services/teacher.service";
import { getCurrentUser } from "@/lib/auth";

export async function createTeacher(formData: FormData) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  await createTeacherService({
    employeeId: String(formData.get("employeeId")),
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    email: formData.get("email") ? String(formData.get("email")) : undefined,
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
    subject: formData.get("subject")
      ? String(formData.get("subject"))
      : undefined,
    schoolId: currentUser.schoolId,
  });

  redirect("/admin/teachers");
}
