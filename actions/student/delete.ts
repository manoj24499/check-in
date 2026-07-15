"use server";

import { redirect } from "next/navigation";
import { deleteStudent as deleteStudentService } from "@/lib/services/student.service";

export async function deleteStudent(formData: FormData) {
  const id = String(formData.get("id"));

  await deleteStudentService(id);

  redirect("/admin/students");
}