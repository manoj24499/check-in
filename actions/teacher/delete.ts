"use server";

import { redirect } from "next/navigation";
import { deleteTeacher as deleteTeacherService } from "@/lib/services/teacher.service";

export async function deleteTeacher(formData: FormData) {
  const id = String(formData.get("id"));

  await deleteTeacherService(id);

  redirect("/admin/teachers");
}
