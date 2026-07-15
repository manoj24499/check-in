import { prisma } from "@/lib/prisma";

export async function getStudents() {
  return await prisma.student.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getStudentById(id: string) {
  return await prisma.student.findUnique({
    where: { id },
  });
}

// Add more service methods as needed
