import { notFound } from "next/navigation";
import { getStudentById } from "@/lib/services/student.service";
import { StudentForm } from "@/components/student/student-form";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditStudentPage({ params }: PageProps) {
  const { id } = await params;

  const student = await getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Edit Student
      </h1>

      <StudentForm student={student} />
    </div>
  );
}