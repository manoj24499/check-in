"use server";

import { redirect } from "next/navigation";
import { updateStudent as updateStudentService } from "@/lib/services/student.service";

export async function updateStudent(formData: FormData) {
  const id = String(formData.get("id"));

  await updateStudentService(id, {
    admissionNumber: String(formData.get("admissionNumber")),
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    dateOfBirth: new Date(String(formData.get("dateOfBirth"))),
    gender: formData.get("gender") as "MALE" | "FEMALE" | "OTHER",
    grade: String(formData.get("grade")),
    section: String(formData.get("section")),
    pickupPin: String(formData.get("pickupPin")),
  });

  redirect("/admin/students");
}