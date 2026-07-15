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
    schoolId: "441481ee-0ded-4f20-bd0d-ea9cf9746079", // Temporary
  });

  redirect("/admin/students");
}