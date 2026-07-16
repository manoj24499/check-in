"use server";

import { redirect } from "next/navigation";
import { randomUUID } from "crypto";
import { createStudent as createStudentService } from "@/lib/services/student.service";
import { getCurrentUser } from "@/lib/auth";

export async function createStudent(formData: FormData) {
  const qrCode = randomUUID();
  console.log("Generated QR:", qrCode);
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/login");
  }

  await createStudentService({
    admissionNumber: String(formData.get("admissionNumber")),
    firstName: String(formData.get("firstName")),
    lastName: String(formData.get("lastName")),
    dateOfBirth: new Date(String(formData.get("dateOfBirth"))),
    gender: formData.get("gender") as "MALE" | "FEMALE" | "OTHER",
    grade: String(formData.get("grade")),
    section: String(formData.get("section")),
    pickupPin: String(formData.get("pickupPin")),
    schoolId: currentUser.schoolId,
    qrCode,
  });

  redirect("/admin/students");
}
