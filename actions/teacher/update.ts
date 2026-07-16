"use server";

import { redirect } from "next/navigation";
import { updateTeacher as updateTeacherService } from "@/lib/services/teacher.service";

export async function updateTeacher(formData: FormData) {
  const id = String(formData.get("id"));

  await updateTeacherService(id, {
    employeeId: String(formData.get("employeeId")),
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    email: formData.get("email") ? String(formData.get("email")) : undefined,
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
    subject: formData.get("subject") ? String(formData.get("subject")) : undefined,
  });

  redirect("/admin/teachers");
}
