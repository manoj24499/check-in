import { prisma } from "@/lib/prisma";

export async function getAttendance() {
  return prisma.attendance.findMany({
    include: {
      student: true,
      teacher: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getAttendanceById(id: string) {
  return prisma.attendance.findUnique({
    where: { id },
    include: {
      student: true,
      teacher: true,
    },
  });
}

export async function createAttendance(data: {
  studentId: string;
  teacherId: string;
  status: "CHECKED_IN" | "CHECKED_OUT" | "ABSENT";
  verificationMethod: "MANUAL" | "QR" | "PIN" | "FACE";
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existing = await prisma.attendance.findFirst({
    where: {
      studentId: data.studentId,
      createdAt: {
        gte: today,
      },
    },
  });

  if (existing) {
    throw new Error("Attendance already recorded today.");
  }

  return prisma.attendance.create({
    data: {
      ...data,
      checkIn: new Date(),
    },
  });
}

export async function checkOutAttendance(id: string) {
  return prisma.attendance.update({
    where: { id },
    data: {
      checkOut: new Date(),
      status: "CHECKED_OUT",
    },
  });
}
