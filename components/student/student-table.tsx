import Link from "next/link";
import { getStudents } from "@/lib/services/student.service";

export async function StudentTable() {
  const students = await getStudents();

  if (students.length === 0) {
    return <div className="text-center p-8 text-muted-foreground">No students found.</div>;
  }

  return (
    <div className="w-full overflow-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-3 font-medium">Name</th>
            <th className="p-3 font-medium">Admission #</th>
            <th className="p-3 font-medium">Grade/Sec</th>
            <th className="p-3 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="border-b hover:bg-muted/50">
              <td className="p-3">{student.firstName} {student.lastName}</td>
              <td className="p-3">{student.admissionNumber}</td>
              <td className="p-3">{student.grade} - {student.section}</td>
              <td className="p-3 text-right">
                <Link 
                  href={`/admin/students/${student.id}/edit`}
                  className="text-primary hover:underline text-sm"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
