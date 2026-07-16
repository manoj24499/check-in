"use server";

import { redirect } from "next/navigation";
import { createTeacher as createTeacherService } from "@/lib/services/teacher.service";

export async function createTeacher(formData: FormData) {
  await createTeacherService({
    employeeId: String(formData.get("employeeId")),
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    email: formData.get("email") ? String(formData.get("email")) : undefined,
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
    subject: formData.get("subject") ? String(formData.get("subject")) : undefined,
    schoolId: "441481ee-0ded-4f20-bd0d-ea9cf9746079", // Temporary
  });

  redirect("/admin/teachers");
}
