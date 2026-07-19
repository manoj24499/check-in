"use server";

import { getStudentByQRCode } from "@/lib/services/student.service";

export async function scanAttendance(qrCode: string) {
  const student = await getStudentByQRCode(qrCode);

  if (!student) {
    return {
      success: false,
      message: "Student not found.",
    };
  }

  return {
    success: true,
    student,
  };
}
