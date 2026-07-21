import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/password";
import { UserRole } from "@prisma/client";
export async function getTeachers(search?: string) {
  return prisma.teacher.findMany({
    where: search
      ? {
          OR: [
            {
              firstName: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              lastName: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              employeeId: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              subject: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : undefined,

    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createTeacher(data: {
  employeeId: string;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  subject?: string;
  schoolId: string;
}) {
  return prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        username: data.employeeId,
        password: await hashPassword("Teacher@123"),
        name: `${data.firstName} ${data.lastName}`,
        role: UserRole.TEACHER,
        schoolId: data.schoolId,
      },
    });

    const teacher = await tx.teacher.create({
      data: {
        employeeId: data.employeeId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        schoolId: data.schoolId,
        userId: user.id,
      },
    });

    return teacher;
  });
}

export async function updateTeacher(
  id: string,
  data: {
    employeeId: string;
    firstName: string;
    lastName: string;
    email?: string;
    phone?: string;
    subject?: string;
  },
) {
  return prisma.teacher.update({
    where: { id },
    data,
  });
}

export async function deleteTeacher(id: string) {
  return prisma.teacher.delete({
    where: { id },
  });
}

export async function getTeacherById(id: string) {
  return prisma.teacher.findUnique({
    where: { id },
  });
}

export async function getTeacherByUserId(userId: string) {
  return prisma.teacher.findUnique({
    where: {
      userId,
    },
  });
}
