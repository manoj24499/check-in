import { prisma } from "@/lib/prisma";

export async function getStudents(search?: string) {
  return prisma.student.findMany({
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
              admissionNumber: {
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

// Add more service methods as needed
export async function createStudent(data: {
  admissionNumber: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: "MALE" | "FEMALE" | "OTHER";
  grade: string;
  section: string;
  pickupPin: string;
  schoolId?: string;
  qrCode: string;
}) {
  // Ensure provided schoolId exists; if not provided, omit to avoid FK violation
  const { schoolId, ...studentData } = data;
  const createData: any = { ...studentData };
  if (schoolId) {
    createData.schoolId = schoolId;
  }
  console.log("Creating student with data:", data);
  return prisma.student.create({
    data: createData,
  });
}
export async function updateStudent(
  id: string,
  data: {
    admissionNumber: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: "MALE" | "FEMALE" | "OTHER";
    grade: string;
    section: string;
    pickupPin: string;
  },
) {
  return prisma.student.update({
    where: { id },
    data,
  });
}
export async function deleteStudent(id: string) {
  return prisma.student.delete({
    where: { id },
  });
}

export async function getStudentById(id: string) {
  return prisma.student.findUnique({
    where: { id },
  });
}
export async function getStudentByQRCode(qrCode: string) {
  return prisma.student.findUnique({
    where: {
      qrCode,
    },
  });
}
