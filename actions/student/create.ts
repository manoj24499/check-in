"use server";

import { redirect } from "next/navigation";
import { createStudent as createStudentService } from "@/lib/services/student.service";

export async function createStudent(formData: FormData) {
  await createStudentService({
    admissionNumber: String(formData.get("admissionNumber")),
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    dateOfBirth: new Date(String(formData.get("dateOfBirth"))),
    gender: formData.get("gender") as "MALE" | "FEMALE" | "OTHER",
    grade: String(formData.get("grade")),
    section: String(formData.get("section")),
    pickupPin: String(formData.get("pickupPin")),
    schoolId: "86f11074-2e62-4dab-8fe8-a7b3d06923f5", // Temporary
  });

  redirect("/admin/students");
}