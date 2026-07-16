import { prisma } from "@/lib/prisma";

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
]
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
  return prisma.teacher.create({
    data,
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
  }
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
