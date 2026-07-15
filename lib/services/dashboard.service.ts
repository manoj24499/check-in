import { prisma } from "@/lib/prisma";

export async function getDashboardStats() {
  const [
    totalStudents,
    totalTeachers,
    totalParents,
    checkedInToday,
    checkedOutToday,
  ] = await Promise.all([
    prisma.student.count(),

    prisma.user.count({
      where: {
        role: "TEACHER",
      },
    }),

    prisma.user.count({
      where: {
        role: "PARENT",
      },
    }),

    prisma.attendance.count({
      where: {
        status: "CHECKED_IN",
      },
    }),

    prisma.attendance.count({
      where: {
        status: "CHECKED_OUT",
      },
    }),
  ]);

  return {
    totalStudents,
    totalTeachers,
    totalParents,
    checkedInToday,
    checkedOutToday,
  };
}