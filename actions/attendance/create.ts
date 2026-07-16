"use server";

import { redirect } from "next/navigation";
import { createAttendance as createAttendanceService } from "@/lib/services/attendance.service";
import { getCurrentUser } from "@/lib/auth";

export async function createAttendance(formData: FormData) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/login");
  }

  await createAttendanceService({
    studentId: String(formData.get("studentId")),
    teacherId: String(formData.get("teacherId")),
    status: formData.get("status") as "CHECKED_IN" | "CHECKED_OUT" | "ABSENT",
    verificationMethod: formData.get("verificationMethod") as
      | "MANUAL"
      | "QR"
      | "PIN"
      | "FACE",
  });

  redirect("/admin/attendance");
}
