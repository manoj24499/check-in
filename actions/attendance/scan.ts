"use server";

import { getCurrentUser } from "@/lib/auth";
import { getStudentByQRCode } from "@/lib/services/student.service";
import { getTeacherByUserId } from "@/lib/services/teacher.service";
import {
  createAttendance,
  getTodayAttendance,
} from "@/lib/services/attendance.service";

export async function scanAttendance(qrCode: string) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  const student = await getStudentByQRCode(qrCode);

  if (!student) {
    return {
      success: false,
      message: "Student not found.",
    };
  }
  const teacher = await getTeacherByUserId(currentUser.id);

  if (!teacher) {
    return {
      success: false,
      message: "Teacher profile not found.",
    };
  }

  const alreadyChecked = await getTodayAttendance(student.id);

  if (alreadyChecked) {
    return {
      success: false,
      message: `${student.firstName} has already checked in today.`,
    };
  }

  await createAttendance({
    studentId: student.id,
    teacherId: teacher.id,
    status: "CHECKED_IN",
    verificationMethod: "QR",
  });
}
