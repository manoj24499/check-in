import { prisma } from "@/lib/prisma";

export async function getParents(search?: string) {
  return prisma.user.findMany({
    where: {
      role: "PARENT",
      ...(search
        ? {
            OR: [
              {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                username: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                phone: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {}),
    },
    include: {
      parentStudents: {
        include: {
          student: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getParentById(id: string) {
  return prisma.user.findUnique({
    where: { id },
    include: {
      parentStudents: {
        include: {
          student: true,
        },
      },
    },
  });
}

export async function createParent(data: {
  username: string;
  password: string;
  name: string;
  phone?: string;
  schoolId: string;
}) {
  return prisma.user.create({
    data: {
      ...data,
      role: "PARENT",
    },
  });
}

export async function updateParent(
  id: string,
  data: {
    name: string;
    phone?: string;
  }
) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

export async function deleteParent(id: string) {
  return prisma.user.delete({
    where: { id },
  });
}
