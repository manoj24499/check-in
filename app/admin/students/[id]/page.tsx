import { notFound } from "next/navigation";
import Link from "next/link";

import { getStudentById } from "@/lib/services/student.service";
import { StudentQR } from "@/components/student/student-qr";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function StudentDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const student = await getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Student Profile</h1>

        <Link
          href={`/admin/students/${student.id}/edit`}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Edit Student
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-3">
          <p>
            <strong>Admission:</strong> {student.admissionNumber}
          </p>

          <p>
            <strong>Name:</strong> {student.firstName} {student.lastName}
          </p>

          <p>
            <strong>Grade:</strong> {student.grade}
          </p>

          <p>
            <strong>Section:</strong> {student.section}
          </p>

          <p>
            <strong>Pickup PIN:</strong> {student.pickupPin}
          </p>
        </div>

        <div className="flex justify-center">
          {student.qrCode && <StudentQR value={student.qrCode} />}
        </div>
      </div>
    </div>
  );
}
